# css常用样式


## 文字超出省略号

```scss
// 单行超出
.title {
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space:nowrap;
}

// 多行超出
.title {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
}
```
## 开启css gpu加速

CSS的animation、tranform、transition并不会自动开启GPU加速，而是通过浏览器的缓慢的软件渲染引擎来实现执行，那么我们怎么才能实现GPU加速呢，很多浏览器提供了某些触发该模式的规则。

比如使用 translate3d() rotate3d() scale3d()　这几个方法，我们就可以使用ＧＰＵ加速了。

如下几个css属性可以触发硬件加速：

> transform（ translate3d、translateZ(0)等）

> opacity

> filter（滤镜：drop-shadow()、opacity()，函数与已有的box-shadow、opacity属性很相似；不同之处在于，通过滤镜，一些浏览器为了更好的性能会提供硬件加速）

> will-change：哪一个属性即将发生变化，进而进行优化。

如果有一些元素不需要用到上述属性，但是需要触发硬件加速效果，例如：某些情况下，我们并不想要对元素应用３Ｄ变换的效果，却还想要实现ＧＰＵ加速，可以使用一些小技巧来诱导浏览器开启硬件加速。

> transform: translateZ(0)
```css
.element {
    -webkit-transform: translateZ(0);
    -moz-transform: translateZ(0);
    -ms-transform: translateZ(0);
    -o-transform: translateZ(0);
    transform: translateZ(0); 
    /**或者**/
    transform: rotateZ(360deg);
    transform: translate3d(0, 0, 0);
} 
```

## 设置表单输入框placeholder的样式

```scss
input::-webkit-input-placeholder {
  color:skyblue;
  text-align: center;
}
input::-ms-input-placeholder {
  color:skyblue;
  text-align: center;
}
input::-moz-placeholder {
  color:skyblue;
  text-align: center;
}
```

## 设置滚动条样式

```scss
.wrap {
  margin: 0 auto;
  width: 300px;
  height: 200px;
  overflow: auto;
}


.wrap::-webkit-scrollbar {
  /* 整体大小样式 */
  width: 10px;
  height: 10px;
  }


.wrap::-webkit-scrollbar-thumb {
  /* 滚动条里的滑块 */
  border-radius: 10px;
  background-color: skyblue;
  background-image: -webkit-linear-gradient(45deg,rgba(255,255,255,0.2) 25%,
  transparent 25%,
  transparent 50%,
  rgba(255,255,255,0.2) 55%,
  rgba(255,255,255,0.2) 75%,
  transparent 75%,
  transparent);
}


.test::-webkit-scrollbar-track {
/* 滚动条的轨道 */
  box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  background: #ededed;
  border-radius: 10px;
}
```

## 隐藏滚动条

```scss
.wrap {
  margin: 0 auto;
  width: 300px;
  height: 200px;
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}


.wrap::-webkit-scrollbar {
/* 整体大小样式 */
  display: none;
}
```

## 禁止用户选中元素

```scss
.wrap { 
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
```

## 原色占满整个屏幕

```scss
.mask {
  width:100%;
  height: 100vh;
  background: rgba(0,0,0,0.6);
  position: fixed;
  top: 0;
}
```

## 字母大小写转换

```scss
p {text-transform: uppercase}  // 将所有字母变成大写字母
p {text-transform: lowercase}  // 将所有字母变成小写字母
p {text-transform: capitalize} // 首字母大写
p {font-variant: small-caps}   // 将字体变成小型的大写字母
```

## 将一个容器化为透明

```scss
.wrap { 
  filter:alpha(opacity=50); 
  -moz-opacity:0.5; 
  -khtml-opacity: 0.5; 
  opacity: 0.5; 
}
```

## css 动画造成闪屏

在使用 CSS 的 transition 属性时，可能会出现闪屏的问题。这是因为在过渡开始时，浏览器会先将元素的初始状态渲染出来，然后再过渡到目标状态。如果过渡效果比较明显，这个过程可能会导致闪屏的问题。

```scss
// 使用 transition-delay 属性延迟过渡的开始时间。
/* 延迟 100 毫秒开始过渡 */

.ani{

  transition-delay: 100ms; 
}

/* 告诉浏览器 transform 属性会发生变化 */
.ani{

  will-change: transform ;
}
```

## 识别字符串里的"\n"，并换行

```scss
body {
   white-space: pre-line;
}
```

## 解决1px边框变粗问题

出现1px变粗的原因，比如在2倍屏时1px的像素对应2个物理像素。
```scss
.dom{
  height: 1px;
  background: #dbdbdb;
  transform:scaleY(0.5);
}
```