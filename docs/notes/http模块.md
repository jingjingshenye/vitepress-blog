```js
http
  .createServer(function (req, res) {
    // 处理请求
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World\n");
  })
  .listen(8080);
```

http 请求相对路径和绝对路径

绝对路径的请求会拼接到服务器的根目录下，相对路径的请求会拼接到当前目录下。
