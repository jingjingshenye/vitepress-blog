# localhost 与 127.0.0.1 的区别

localhost：也叫 local ，正确的解释是：本地服务器
127.0.0.1：在 windows 等系统的正确解释是：本机地址(本机服务器)
一个是“本地”，一个是“本机”。不过从这两个词来看，还是不能比较两者的区别。我们再看看他们的工作原理。

localhot：是不经网卡传输的，它不受网络防火墙和网卡相关的的限制。
127.0.0.1：是通过网卡传输的，它依赖网卡，并受到网络防火墙和网卡相关的限制。
