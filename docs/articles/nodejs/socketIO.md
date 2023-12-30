# socketIO

##

安装

```bash
# 服务端
npm install socket.io
#客户端
npm install socket.io-client

# 搭配其他库使用
npm install express
npm install nodemon
npm install cors
npm install uuid
```

## 基本使用

```js
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('chat message', (msg) => {
    console.log('message:'+ msg);
    io.emit('chat message', msg);
  });

}
```

## 客户端

```js
const socket = io.connect(url); // 注意url
socket.on("connect", () => {
  console.log("连接成功");
});
socket.on("chat message", (msg) => {
  console.log("message:" + msg);
});
socket.emit("chat message", "hello");
```

## 广播

要将事件发送给每个用户，Socket.IO 提供了 `io.emit`

```js
io.emit("chat message", "hello");
io.to("room-1").emit("chat message", "hello");
io.in("room-1").emit("chat message", "hello");
```

要将消息发给除特定 socket 外的其他用户，可以用 `broadcast` 标志

```js
socket.broadcast.emit("chat message", "hello");
```

## 命名空间

Socket.IO 允许你将一组 socket 连接分组，并对这些组执行单独的事件和数据处理。

如果你想隔离作用域，或者划分业务模块，namespace 是个有效的法子。namespace 相当于建立新的频道，你可以在一个 socket.io 服务上面隔离不同的连接，事件和中间件。

使用命名空间的方式一：直接在链接后面加子域名，这种其实用的还是同一个 sokcet 服务进程，可以看成是软隔离吧

```js
/*** 客户端 **/
import io from "socket.io-client";

//默认的namespace
const socket = io("http://127.0.0.1:3001");
// mypath
const socket = io("http://127.0.0.1:3001/mypath", { forceNew: true });

/*** 服务端 **/
//默认的namespace
io.on("connection", (socket) => {});
// mypath
io.of("/mypath").on("connection", (socket) => {});
```

使用命名空间的方式二： path 参数，这种就是实打实的重新起了一个 socket 服务了。

```js
/*** 客户端 **/
const socket = io("http://localhost", {
  path: "/mypath",
});

/*** 服务端 **/
// 另外重新起socket服务
const io = require("socket.io")({
  path: "/mypath",
});
```

## 中间件

Socket.IO 允许你为每个连接设置自定义的中间件。

中间件就是一个函数，它接收二个参数：

- socket：当前连接的 socket 对象
- next：一个函数，如果执行了这个函数，则执行下一个中间件，否则忽略当前中间件，进入下一个连接。

```js
// 案例一
io.use((socket, next) => {
  // 验证用户
  const user = verifyUser(socket.request);
  if (user) {
    socket.user = user;
    next();
  } else {
    next(new Error("Authentication error"));
  }
});

// 案例二
const mypath = io.of("/mypath").on("connection", (socket) => {
  socket.on("message", (data) => {});
});

//中间件
const auth = (socket, next) => {
  const data = socket.request;
  if (!verify(data)) {
    throw new Error("not verify");
  }
  next();
};
// mypath 这个 namespace 注册中间件
mypath.use(auth);
```

## rooms

Socket.IO 允许你将一组 socket 连接分组，并对这些组执行单独的事件和数据处理。

每一个 socket 连接都会有一个独一无二的标志，那就是 socket.id，我们就是通过 id 来区分不同连接的。除此之外，socket.id 本身也是房间 room 的标志，通俗讲，每个 socket 连接自身都拥有一间房 room。那么我们就可以给这个 room 发送消息，还有如果你加入了房间，就能接受到房间里的广播信息。当然你可以自定义 room ，让 socket 连接加入或离开。还有如果 socket 断开连接，也就是 disconnect 后，它会被自动移出 room。

- socket.join(rooms[, callback])：加入房间
- socket.leave(room[, callback]) ：离开房间
- socket.to(room)： 给房间发送消息

```js
// 自定义room
io.on('connection', (socket) => {
  socket.join('some room')); // 加入房间
  socket.leave('some room'); // 离开房间
});

// 向房间里的所有客户端发送消息
io.to('some room').emit('some event');

// 默认房间（每一个id一个room）
socket.on('say to someone', (id, msg) => {
    socket.broadcast.to(id).emit('my message', msg);
});

```
