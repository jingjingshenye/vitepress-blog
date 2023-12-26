# pm2

nodejs 进程管理工具，性能监控，自动重启，负载均衡等

## 主要特性

- 负载均衡，使用 node cluster 集群模块
- 后台运行
- 0 秒停机重载
- 停止不稳定的进程，避免无限循环
- 控制台检测
- 提供 http api
- 远程控制和实时的几口 api，nodejs 模块，允许和 pm2 进程交互

安装

```bash
npm install -g pm2
```

启动

```bash
pm2 start app.js
```

停止

```bash
pm2 stop app.js
```

重启

```bash
pm2 restart app.js
```

状态

```bash
pm2 status
```

日志

```bash
pm2 logs
```

删除

```bash
pm2 delete app.js
```

查看进程

```bash
pm2 list
```

查看进程详情

```bash
pm2 show app.js
```

查看进程日志

```bash
pm2 logs app.js
```

查看进程状态

```bash
pm2 monit
```
