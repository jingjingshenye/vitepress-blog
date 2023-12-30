# express

express 主要包含三个核心概念：路由、中间件、模板引擎

- 中间件：可以毫不夸张的说，在 express 应用中，一切皆中间件。各种应用逻辑，如 cookie 解析、会话处理、日志记录、权限校验等，都是通过中间件来完成的。
- 路由：地球人都知道，负责寻址的。比如用户发送了个 http 请求，该定位到哪个资源，就是路由说了算。
- 模板引擎：负责视图动态渲染。下面会介绍相关配置，以及如何开发自己的模板引擎。

## 项目搭建

1. 安装 express 模块

```bash
npm install express --save
npm install nodemon -D
```

2. 创建 app.js 文件

```js
const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("服务器启动成功，端口号为3000");
});
```

3. 启动服务器

```bash
# script添加nodemon命令
"scripts": {
  "dev": "nodemon app.js"
}
# 启动服务器
npm run dev
```

## API 总结

### 路由

```js
// 路由的基本使用
app.get("/api/users", (req, res) => {
  res.json({
    msg: "hello world",
  });
});

// 路由的中间件
app.get("/api/users", (req, res, next) => {
  console.log("请求进来了");
  next();
});
```

### 常用中间件

- body-parser
- compression
- serve-static
- session
- cookie-parser
- morgan

### 静态资源

```js
// 静态资源的使用
app.use(express.static("public"));

// 静态资源的配置
app.use(
  express.static("public", {
    maxAge: 30 * 24 * 60 * 60, // 缓存时间
    setHeaders(res) {
      res.setHeader("Access-Control-Allow-Origin", "*");
    },
  })
);
```

### 错误处理

```js
// 错误处理的使用
app.use((err, req, res, next) => {
  res.status(500).json({
    msg: "服务器错误",
    err,
  });
});
```

### 跨域

```js
// 跨域的使用
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
    if (req.method === "OPTIONS") {
      res.sendStatus(200);
    } else {
      next();
    }
    next();
  )
  next();
});
```

### 日志记录

```js
// 日志记录的使用
const morgan = require("morgan");
app.use(morgan("dev"));
```

### 数据库

```js
// 数据库的使用
const mongoose = require("mongoose");
mongoose.connect(, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "连接数据库失败"));
db.once("open", () => {
  console.log("连接数据库成功");
});
```

### 模板引擎

```js
// 模板引擎的使用
const express = require("express");
const path = require("path");
const ejs = require("ejs");
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index", {
    title: "首页",
  });
});
app.listen(3000, () => {
  console.log("服务器启动成功，端口号为3000");
});
// views：模版文件放在哪里，默认是在项目根目录下。举个例子：app.set('views', './views')
// view engine：使用什么模版引擎，举例：app.set('view engine', 'jade')
```

### 开发模板引擎

通过 app.engine(engineExt, engineFunc)来注册模板引擎。其中

engineExt：模板文件后缀名。比如 jade。

engineFunc：模板引擎核心逻辑的定义，一个带三个参数的函数（如下）

```js
// filepath: 模板文件的路径
// options：渲染模板所用的参数
// callback：渲染完成回调
app.engine(engineExt, function (filepath, options, callback) {
  // 参数一：渲染过程的错误，如成功，则为null
  // 参数二：渲染出来的字符串
  return callback(null, "Hello World");
});
```

## request 对象

Request 对象 - request 对象表示 HTTP 请求，包含了请求查询字符串，参数，内容，HTTP 头部等属性。常见属性有：

```txt
req.app：当callback为外部文件时，用req.app访问express的实例
req.baseUrl：获取路由当前安装的URL路径
req.body / req.cookies：获得「请求主体」/ Cookies
req.fresh / req.stale：判断请求是否还「新鲜」
req.hostname / req.ip：获取主机名和IP地址
req.originalUrl：获取原始请求URL
req.params：获取路由的parameters
req.path：获取请求路径
req.protocol：获取协议类型
req.query：获取URL的查询参数串
req.route：获取当前匹配的路由
req.subdomains：获取子域名
req.accepts()：检查可接受的请求的文档类型
req.acceptsCharsets / req.acceptsEncodings / req.acceptsLanguages：返回指定字符集的第一个可接受字符编码
req.get()：获取指定的HTTP请求头
req.is()：判断请求头Content-Type的MIME类型
```

## response 对象

Response 对象 - response 对象表示 HTTP 响应，即在接收到请求时向客户端发送的 HTTP 响应数据。常见属性有：

```txt
res.app：同req.app一样
res.append()：追加指定HTTP头
res.set()在res.append()后将重置之前设置的头
res.cookie(name，value [，option])：设置Cookie
opition: domain / expires / httpOnly / maxAge / path / secure / signed
res.clearCookie()：清除Cookie
res.download()：传送指定路径的文件
res.get()：返回指定的HTTP头
res.json()：传送JSON响应
res.jsonp()：传送JSONP响应
res.location()：只设置响应的Location HTTP头，不设置状态码或者close response
res.redirect()：设置响应的Location HTTP头，并且设置状态码302
res.render(view,[locals],callback)：渲染一个view，同时向callback传递渲染后的字符串，如果在渲染过程中有错误发生next(err)将会被自动调用。callback将会被传入一个可能发生的错误以及渲染后的页面，这样就不会自动输出了。
res.send()：传送HTTP响应
res.sendFile(path [，options] [，fn])：传送指定路径的文件 -会自动根据文件extension设定Content-Type
res.set()：设置HTTP头，传入object可以一次设置多个头
res.status()：设置HTTP状态码
res.type()：设置Content-Type的MIME类型
```

## 总结

> 进程管理
> 会话管理
> 日志管理
> 性能优化
> 调试
> 错误处理
> 负载均衡
> 数据库支持
> HTTPS 支持
> 业务实践
