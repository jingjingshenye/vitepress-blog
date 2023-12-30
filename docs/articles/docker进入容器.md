# docker 进入容器的方式

### 1. 使用 docker attach 进入 Docker 容器

docker attach 命令是 Docker 提供的一种机制，允许用户从一个正在运行的容器中，与容器内的进程进行交互。

语法：

```bash
docker attach [OPTIONS] CONTAINER

OPTIONS:
    -i, --interactive=false  保持STDIN打开，通常与-t一起使用
    -t, --tty=false          为STDIN/STDOUT/STDERR分配一个伪终端
    -u, --detach-keys=""     分离键，用于在attach模式下将键发送到容器中
```

使用示例：

```bash
$ sudo docker run -itd ubuntu:14.04 /bin/bash
#然后我们使用docker ps查看到该容器信息，接下来就使用docker attach进入该容器
$ sudo docker attach 44fc0f0582d9
# 　　但在，使用该命令有一个问题。当多个窗口同时使用该命令进入该容器时，所有的窗口都会同步显示。如果有一个窗口阻塞了，那么其他窗口也无法再进行操作。

# 因为这个原因，所以docker attach命令不太适合于生产环境，平时自己开发应用时可以使用该命令。
```

### 2. 使用 docker exec 进入 Docker 容器

docker exec 命令是 Docker 提供的一种机制，允许用户在一个正在运行的容器中，以命令的形式运行一个命令。

语法：

```bash
docker exec [OPTIONS] CONTAINER COMMAND [ARG...]

OPTIONS:
    -d, --detach=false        后台运行容器，并返回容器ID
    -i, --interactive=false   保持STDIN打开，通常与-t一起使用
    -t, --tty=false           为STDIN/STDOUT/STDERR分配一个伪终端
    -u, --user=""             指定执行命令的用户
    -w, --workdir=""          指定命令运行时的工作目录
```

使用示例：

```bash
sudo docker exec -it 44fc0f0582d9 /bin/bash
# sudo docker ps
# sudo docker exec -it 775c7c9ee1e1 /bin/bash
```
