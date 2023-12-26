# Node.js

js 运行时，单线程，事件循环

## process

全局变量

进程对象，提供当前进程的信息

````js
console.log(process.argv); // 打印当前命令行参数
console.log(process.env); // 打印当前环境变量
console.log(process.version); // 打印当前 Node.js 版本
console.log(process.platform); // 打印当前操作系统平台
console.log(process.cwd()); // 打印当前工作目录
console.log(process.uptime()); // 打印当前进程已经运行了多久
console.log(process.memoryUsage()); // 打印当前进程占用的内存
console.log(process.nextTick); // 打印当前进程的 nextTick 队列
console.log(process.hrtime()); // 打印当前进程的启动时间
console.log(process.kill(pid)); // 杀死进程
console.log(process.exit(code)); // 退出进程
console.log(process.cpuUsage()); // 打印当前进程占用的 CPU 资源
console.log(process.cpuUsage(pid)); // 打印指定进程占用的 CPU 资源
console.log(process.memoryUsage()); // 打印当前进程占用的内存
```

## fs 模块

文件以及文件目录的增删改查

### 写入

```js
fs.writeFile("test.txt", "hello world", function (err) {
  if (err) throw err;
  console.log("It's saved!");
});

// 同步方式
fs.writeFileSync("test.txt", "hello world");
````

### 读取

```js
fs.readFile("test.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});

// 同步方式
fs.readFileSync("test.txt", "utf8");
```

## buffer

用于处理二进制数据

```js
const buf = Buffer.from("hello world");
console.log(buf.toString()); // hello world
```

## JWT 鉴权

json web token

token 是什么？

token 是用来验证用户身份的一种机制，它包含了用户的身份信息，并且可以防止用户的身份信息被篡改。

token 是谁生成的？

服务器生成 token，客户端使用 token 进行鉴权

token 的结构？

三个部分：

header.

payload.

signature

header 是用来描述 token 的类型，payload 是存放有效信息，signature 是用来验证 token 的合法性

```js
const jwt = require("jsonwebtoken");

const token = jwt.sign(
  {
    username: "admin",
    id: 1,
  },
  "secret",
  {
    expiresIn: 60 * 60, // 1小时过期
  }
);

console.log(token);

// 解析token
const decoded = jwt.verify(token, "secret");
```

前端拿到 token，存放到 cookie 中，每次请求都带上 token

```js
const token = "token";

const decoded = jwt.verify(token, "secret");

// 前端拿到token，存放到cookie中，每次请求都带上token
document.cookie = `token=${token}`;
```

## 分页功能

```js
const query = {
  page: 1,
  pageSize: 10,
};

// 1. 先获取总数
const count = await User.countDocuments();

// 2. 计算总页数
const totalPage = Math.ceil(count / query.pageSize);

// 3. 获取数据
const users = await User.find()
  .skip((query.page - 1) * query.pageSize)
  .limit(query.pageSize)
  .exec();
```

## Stream

流是一种数据流，可以将数据从一个地方传输到另一个地方

逐块读取数据，不用一次性读取整个文件

流的特点：

1. 单向流，数据只能从一个地方流向另一个地方
2. 可读流，数据可以从流中读取
3. 可写流，数据可以写入流中
4. 管道流，数据可以同时从一个地方流向另一个地方

### 读流

```js
const fs = require("fs");

const rs = fs.createReadStream("test.txt");

rs.on("data", (chunk) => {
  console.log(chunk.toString());
});

rs.on("end", () => {
  console.log("end");
});

rs.on("error", (err) => {
  console.log(err);
});
```

### 写流

```js
const fs = require("fs");

const ws = fs.createWriteStream("test.txt");

ws.write("hello world");

ws.end();
```

## 中间件

middleware
