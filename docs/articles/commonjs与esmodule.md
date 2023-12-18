# commonjs 与 esmodule

## 什么是 CommonJS

CommonJS 是一种服务器端的模块规范，用于定义和导出模块。

CommonJS 模块输出的是一个值的拷贝，而非一个引用。

CommonJS 模块是运行在服务器环境下的，Node.js 采用了这个规范。

CommonJS 模块的运行机制是，在输入模块的时候，require()方法会加载该模块，并运行其中的代码。

## 什么是 ESModule

ESModule 是一种浏览器端的模块规范，用于定义和导出模块。

ESModule 输出的是一个值的引用，而非拷贝。

ESModule 是运行在浏览器环境下的，浏览器采用了这个规范。

ESModule 的运行机制是，在输入模块的时候，import()方法会加载该模块，并返回该模块对外暴露的接口。

## 区别

CommonJS 和 ESModule 的区别主要有以下几点：

1. 输出值。CommonJS 输出的是值的拷贝，ESModule 输出的是值的引用。
2. 加载方式。CommonJS 是运行在服务器端的，ESModule 是运行在浏览器端的。
3. 运行机制。CommonJS 是通过 require()方法加载，ESModule 是通过 import()方法加载。

## commonjs 原理

每个模块文件存在 module,export,require 三个对象

- module 记录当前模块信息。
- export 引入模块的方法
- require 对象代表对其他模块的引用。

然而这三个变量是没有被定义的，但是我们可以在 Commonjs 规范下每一个 js 模块上直接使用它们。在 nodejs 中还存在 **filename 和**dirname 变量。

在编译的过程中，实际 Commonjs 对 js 的代码块进行了首尾包装， 我们以上述的 home.js 为例子 🌰，它被包装之后的样子如下：

```javascript
(function (exports, require, module, __filename, __dirname) {
  // 你的代码
  const sayName = require("./hello.js");
  module.exports = function say() {
    return {
      name: sayName(),
      author: "我不是外星人",
    };
  };
});
```

在 Commonjs 规范下模块中，会形成一个包装函数，我们写的代码将作为包装函数的执行上下文，使用的 require ，exports ，module 本质上是通过形参的方式传递到包装函数中的。

```js
function wrapper(script) {
  return (
    "(function (exports, require, module, __filename, __dirname) {" +
    script +
    "\n})"
  );
}
```

包装函数执行

```js
const modulefunction = wrapper(`
  const sayName = require('./hello.js')
    module.exports = function say(){
        return {
            name:sayName(),
            author:'我不是外星人'
        }
    }
`);
```

如上模拟了一个包装函数功能， script 为我们在 js 模块中写的内容，最后返回的就是如上包装之后的函数。当然这个函数暂且是一个字符串。

```js
runInThisContext(modulefunction)(
  module.exports,
  require,
  module,
  __filename,
  __dirname
);
```

在模块加载的时候，会通过 runInThisContext (可以理解成 eval ) 执行 modulefunction ，传入 require ，exports ，module 等参数。最终我们写的 nodejs 文件就这么执行了。

## require 文件加载流程

```js
const fs = require("fs"); // ①核心模块
const sayName = require("./hello.js"); //② 文件模块
const crypto = require("crypto-js"); // ③第三方自定义模块
```

如上三种方式

1. 为 nodejs 底层的核心模块。
2. 为我们编写的文件模块，比如上述 sayName
3. 为我们通过 npm 下载的第三方自定义模块，比如 crypto-js。

当 require 方法执行的时候，接收的唯一参数作为一个标识符 ，Commonjs 下对不同的标识符，处理流程不同，但是目的相同，都是找到对应的模块。

首先我们看一下 nodejs 中对标识符的处理原则。

首先像 fs ，http ，path 等标识符，会被作为 nodejs 的核心模块。

./ 和 ../ 作为相对路径的文件模块， / 作为绝对路径的文件模块。

非路径形式也非核心模块的模块，将作为自定义模块。

核心模块的处理：

核心模块的优先级仅次于缓存加载，在 Node 源码编译中，已被编译成二进制代码，所以加载核心模块，加载过程中速度最快。

路径形式的文件模块处理：

已 ./ ，../ 和 / 开始的标识符，会被当作文件模块处理。require() 方法会将路径转换成真实路径，并以真实路径作为索引，将编译后的结果缓存起来，第二次加载的时候会更快。至于怎么缓存的？我们稍后会讲到。

自定义模块处理：

自定义模块，一般指的是非核心的模块，它可能是一个文件或者一个包，它的查找会遵循以下原则：

在当前目录下的 node_modules 目录查找。

如果没有，在父级目录的 node_modules 查找，

如果没有在父级目录的父级目录的 node_modules 中查找。

沿着路径向上递归，直到根目录下的 node_modules 目录。

在查找过程中，会找 package.json 下 main 属性指向的文件，如果没有 package.json ，在 node 环境下会以此查找 index.js ，index.json ，index.node。

## require 模块引入与处理

CommonJS 模块同步加载并执行模块文件，CommonJS 模块在执行阶段分析模块依赖，采用深度优先遍历（depth-first traversal），执行顺序是父 -> 子 -> 父；

commonjs 是如何解决相互引用的呢？

为了弄清楚上述问题。我们要明白两个感念，那就是 module 和 Module。

`module` ：在 Node 中每一个 js 文件都是一个 module ，module 上保存了 exports 等信息之外，还有一个 loaded 表示该模块是否被加载

`Module` ：以 nodejs 为例，整个系统运行之后，会用 Module 缓存每一个模块加载的信息

require 源码

```js
 // id 为路径标识符
function require(id) {
   /* 查找  Module 上有没有已经加载的 js  对象*/
   const  cachedModule = Module._cache[id]

   /* 如果已经加载了那么直接取走缓存的 exports 对象  */
  if(cachedModule){
    return cachedModule.exports
  }

  /* 创建当前模块的 module  */
  const module = { exports: {} ,loaded: false , ...}

  /* 将 module 缓存到  Module 的缓存属性中，路径标识符作为 id */
  Module._cache[id] = module
  /* 加载文件 */
  runInThisContext(wrapper('module.exports = "123"'))(module.exports, require, module, __filename, __dirname)
  /* 加载完成 *//
  module.loaded = true
  /* 返回值 */
  return module.exports
}

// require 会接收一个参数——文件标识符，然后分析定位文件，分析过程我们上述已经讲到了，加下来会从 Module 上查找有没有缓存，如果有缓存，那么直接返回缓存的内容。
// 如果没有缓存，会创建一个 module 对象，缓存到 Module 上，然后执行文件，加载完文件，将 loaded 属性设置为 true ，然后返回 module.exports 对象。借此完成模块加载流程。
// 模块导出就是 return 这个变量的其实跟 a = b 赋值一样， 基本类型导出的是值， 引用类型导出的是引用地址。
// exports 和 module.exports 持有相同引用，因为最后导出的是 module.exports， 所以对 exports 进行赋值会导致 exports 操作的不再是 module.exports 的引用。

```

正式因为缓存`Module._cache`的存在，才避免重复加载和循环引用的问题。

但是循环引用还有一个问题，两个互相引用的模块，比如 a.js 和 b.js，a.js 里面 require b.js，b.js 里面 require a.js

先执行的 a.js 引用 b.js。b.js 又引用 a.js。但这时候，a.js 还没完成导出模块，就导致 exports 是空

怎么解决这个问题呢？

动态加载或者异步加载

## exports 和 module.exports 的区别

exports 和 module.exports 都是在当前模块中定义的变量，exports 是对 module.exports 的引用，所以对 exports 进行赋值，会导致 exports 操作的不再是 module.exports 的引用。

理想情况下是通过 exports = {} 直接赋值，不需要在 exports.a = xxx 每一个属性，但是如上我们看到了这种方式是无效的。为什么会这样？实际这个是 js 本身的特性决定的。

通过上述讲解都知道 exports ， module 和 require 作为形参的方式传入到 js 模块中。我们直接 exports = {} 修改 exports ，等于重新赋值了形参，那么会重新赋值一份，但是不会在引用原来的形参。举一个简单的例子

```js
function wrap(myExports) {
  myExports = {
    name: "我不是外星人",
  };
}

let myExports = {
  name: "alien",
};
wrap(myExports);
console.log(myExports);

// 输出{name:'alien'}
```

我们期望修改 myExports ，但是没有任何作用。

假设 wrap 就是 Commonjs 规范下的包装函数，我们的 js 代码就是包装函数内部的内容。当我们把 myExports 对象传进去，但是直接赋值 myExports = { name:'我不是外星人' } 没有任何作用，相等于内部重新声明一份 myExports 而和外界的 myExports 断绝了关系。所以解释了为什么不能 exports={...} 直接赋值。

从上述 require 原理实现中，我们知道了 exports 和 module.exports 持有相同引用，因为最后导出的是 module.exports 。那么这就说明在一个文件中，我们最好选择 exports 和 module.exports 两者之一，如果两者同时存在，很可能会造成覆盖的情况发生。比如如下情况：

## 既然有了 exports，为何又出了 module.exports ?

如果我们不想在 commonjs 中导出对象，而是只导出一个类或者一个函数再或者其他属性的情况，那么 module.exports 就更方便了，如上我们知道 exports 会被初始化成一个对象，也就是我们只能在对象上绑定属性，但是我们可以通过 module.exports 自定义导出出对象外的其他类型元素。

## 与 exports 相比，module.exports 有什么缺陷 ？

module.exports 当导出一些函数等非对象属性的时候，也有一些风险，就比如循环引用的情况下。对象会保留相同的内存地址，就算一些属性是后绑定的，也能间接通过异步形式访问到。但是如果 module.exports 为一个非对象其他属性类型，在循环引用的时候，就容易造成属性丢失的情况发生了。

## ES Module

Nodejs 借鉴了 Commonjs 实现了模块化 ，从 ES6 开始， JavaScript 才真正意义上有自己的模块化规范，
Es Module 的产生有很多优势，比如:

借助 Es Module 的静态导入导出的优势，实现了 tree shaking。
Es Module 还可以 import() 懒加载方式实现代码分割。

在 Es Module 中用 export 用来导出模块，import 用来导入模块。但是 export 配合 import 会有很多种组合情况，接下来我们逐一分析一下。

### export

```js
export * from 'module'; //重定向导出 不包括 module内的default
export { name1, name2, ..., nameN } from 'module'; // 重定向命名导出
export { import1 as name1, import2 as name2, ..., nameN } from 'module'; // 重定向重命名导出

export { name1, name2, …, nameN }; // 与之前声明的变量名绑定 命名导出
export { variable1 as name1, variable2 as name2, …, nameN }; // 重命名导出

export let name1 = 'name1'; // 声明命名导出 或者 var, const，function， function*, class

export default expression; // 默认导出
export default function () { ... } // 或者 function*, class
export default function name1() { ... } // 或者 function*, class
export { name1 as default, ... }; // 重命名为默认导出
```

export 规则

- export \* from '' 或者 export {} from ''，重定向导出，重定向的命名并不能在本模块使用，只是搭建一个桥梁，例如：这个 a 并不能在本模块内使用
- export {}， 与变量名绑定，命名导出
- export Declaration，声明的同时，命名导出， Declaration 就是： var, let, const, function, function\*, class 这一类的声明语句
- export default AssignmentExpression，默认导出， AssignmentExpression 的 范围很广，可以大致理解 为除了声明 Declaration（其实两者是有交叉的），a=2,i++,i/4,a===b,obj[name],name in obj,func(),new P(),[1,2,3],function(){}等等很多

### import

```js
// 命名导出 module.js
let a = 1,b = 2
export { a, b }
export let c = 3

// 命名导入 main.js
import { a, b, c } from 'module'; // a: 1  b: 2  c: 3
import { a as newA, b, c as newC } from 'module'; // newA: 1  b: 2  newC: 3


// 默认导出 module.js
export default 1

// 默认导入 main.js
import defaultExport from 'module'; // defaultExport: 1


// 混合导出 module.js
let a = 1
export { a }
const b = 2
export { b }
export let c = 3
export default [1, 2, 3]

// 混合导入 main.js
import defaultExport, { a, b, c as newC} from 'module'; //defaultExport: [1, 2, 3]  a: 1  b: 2  newC: 3
import defaultExport, * as name from 'module'; //defaultExport: [1, 2, 3]  name: { a: 1, b: 2, c: 3 }
import * as name from 'module'; // name: { a: 1, b: 2, c: 3, default: [1, 2, 3] }


// module.js
Array.prototype.remove = function(){}

//副作用 只运行一个模块
import 'module'; // 执行module 不导出值  多次调用module.js只运行一次

//动态导入(异步导入)
var promise = import('module');
```

import 规则

- import { } from 'module'， 导入 module.js 的命名导出
- import defaultExport from 'module'， 导入 module.js 的默认导出
- import \* as name from 'module'， 将 module.js 的的所有导出合并为 name 的对象，key 为导出的命名，默认导出的 key 为 default
- import 'module'，副作用，只是运行 module，不为了导出内容例如 polyfill，多次调用次语句只能执行一次
- import('module')，动态导入返回一个 Promise，TC39 的 stage-3 阶段被提出 tc39 import

## ES Module 特性

### 1. 静态语法

ES6 module 的引入和导出是静态的，import 会自动提升到代码的顶层 ，import , export 不能放在块级作用域或条件语句中。

### 2. 执行特性

ES6 module 和 Common.js 一样，对于相同的 js 文件，会保存静态属性。
但是与 Common.js 不同的是 ，CommonJS 模块同步加载并执行模块文件，ES6 模块提前加载并执行模块文件，ES6 模块在预处理阶段分析模块依赖，在执行阶段执行模块，两个阶段都采用深度优先遍历，执行顺序是子 -> 父。

### 3.不能修改 import 导入的属性

使用 import 被导入的模块运行在严格模式下。

使用 import 被导入的变量是只读的，可以理解默认为 const 装饰，无法被赋值

使用 import 被导入的变量是与原变量绑定/引用的，可以理解为 import 导入的变量无论是否为基本类型都是引用传递。

### 4. import() 动态引入

import() 返回一个 Promise 对象， 返回的 Promise 的 then 成功回调中，可以获取模块的加载成功信息。我们来简单看一下 import() 是如何使用的

```js
setTimeout(() => {
  const result = import("./b");
  result.then((res) => {
    console.log(res);
  });
}, 0);
```

### 5.three shaking

Tree Shaking 在 Webpack 中的实现，是用来尽可能的删除没有被使用过的代码，一些被 import 了但其实没有被使用的代码。比如以下场景：

a.js 中暴露两个方法，addNumber 和 delNumber，但是整个应用中，只用到了 addNumber，那么构建打包的时候，delNumber 将作为没有引用的方法，不被打包进来。

## 总结

Commonjs 总结

Commonjs 的特性如下：

- CommonJS 模块由 JS 运行时实现。
- CommonJs 是单个值导出，本质上导出的就是 exports 属性。
- CommonJS 是可以动态加载的，对每一个加载都存在缓存，可以有效的解决循环引用问题。
- CommonJS 模块同步加载并执行模块文件。

es module 总结

Es module 的特性如下：

- ES6 Module 静态的，不能放在块级作用域内，代码发生在编译时。
- ES6 Module 的值是动态绑定的，可以通过导出方法修改，可以直 接访问修改结果。
- ES6 Module 可以导出多个属性和方法，可以单个导入导出，混合导入导出。
- ES6 模块提前加载并执行模块文件，
- ES6 Module 导入模块在严格模式下。
- ES6 Module 的特性可以很容易实现 Tree Shaking 和 Code Splitting。
