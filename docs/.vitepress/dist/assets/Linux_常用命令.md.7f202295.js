import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.9f730de1.js";const f=JSON.parse('{"title":"linux 常用命令","description":"","frontmatter":{},"headers":[],"relativePath":"Linux/常用命令.md","filePath":"Linux/常用命令.md"}'),p={name:"Linux/常用命令.md"},l=e(`<h1 id="linux-常用命令" tabindex="-1">linux 常用命令 <a class="header-anchor" href="#linux-常用命令" aria-label="Permalink to &quot;linux 常用命令&quot;">​</a></h1><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">命令	功能说明</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">线上查询及帮助命令 (2 个)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">man	查看命令帮助，命令的词典，更复杂的还有 info，但不常用。</span></span>
<span class="line"><span style="color:#e1e4e8;">help	查看 Linux 内置命令的帮助，比如 cd 命令。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">文件和目录操作命令 (18 个)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">ls	全拼 list，功能是列出目录的内容及其内容属性信息。</span></span>
<span class="line"><span style="color:#e1e4e8;">cd	全拼 change directory，功能是从当前工作目录切换到指定的工作目录。</span></span>
<span class="line"><span style="color:#e1e4e8;">cp	全拼 copy，其功能为复制文件或目录。</span></span>
<span class="line"><span style="color:#e1e4e8;">find	查找的意思，用于查找目录及目录下的文件。</span></span>
<span class="line"><span style="color:#e1e4e8;">mkdir	全拼 make directories，其功能是创建目录。</span></span>
<span class="line"><span style="color:#e1e4e8;">mv	全拼 move，其功能是移动或重命名文件。</span></span>
<span class="line"><span style="color:#e1e4e8;">pwd	全拼 print working directory，其功能是显示当前工作目录的绝对路径。</span></span>
<span class="line"><span style="color:#e1e4e8;">rename	用于重命名文件。</span></span>
<span class="line"><span style="color:#e1e4e8;">rm	全拼 remove，其功能是删除一个或多个文件或目录。</span></span>
<span class="line"><span style="color:#e1e4e8;">rmdir	全拼 remove empty directories，功能是删除空目录。</span></span>
<span class="line"><span style="color:#e1e4e8;">touch	创建新的空文件，改变已有文件的时间戳属性。</span></span>
<span class="line"><span style="color:#e1e4e8;">tree	功能是以树形结构显示目录下的内容。</span></span>
<span class="line"><span style="color:#e1e4e8;">basename	显示文件名或目录名。</span></span>
<span class="line"><span style="color:#e1e4e8;">dirname	显示文件或目录路径。</span></span>
<span class="line"><span style="color:#e1e4e8;">chattr	改变文件的扩展属性。</span></span>
<span class="line"><span style="color:#e1e4e8;">lsattr	查看文件扩展属性。</span></span>
<span class="line"><span style="color:#e1e4e8;">file	显示文件的类型。</span></span>
<span class="line"><span style="color:#e1e4e8;">md5sum	计算和校验文件的 MD5 值。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">查看文件及内容处理命令（21 个）</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">cat	全拼 concatenate，功能是用于连接多个文件并且打印到屏幕输出或重定向到指定文件中。</span></span>
<span class="line"><span style="color:#e1e4e8;">tac	tac 是 cat 的反向拼写，因此命令的功能为反向显示文件内容。</span></span>
<span class="line"><span style="color:#e1e4e8;">more	分页显示文件内容。</span></span>
<span class="line"><span style="color:#e1e4e8;">less	分页显示文件内容，more 命令的相反用法。</span></span>
<span class="line"><span style="color:#e1e4e8;">head	显示文件内容的头部。</span></span>
<span class="line"><span style="color:#e1e4e8;">tail	显示文件内容的尾部。</span></span>
<span class="line"><span style="color:#e1e4e8;">cut	将文件的每一行按指定分隔符分割并输出。</span></span>
<span class="line"><span style="color:#e1e4e8;">split	分割文件为不同的小片段。</span></span>
<span class="line"><span style="color:#e1e4e8;">paste	按行合并文件内容。</span></span>
<span class="line"><span style="color:#e1e4e8;">sort	对文件的文本内容排序。</span></span>
<span class="line"><span style="color:#e1e4e8;">uniq	去除重复行。oldboy</span></span>
<span class="line"><span style="color:#e1e4e8;">wc	统计文件的行数、单词数或字节数。</span></span>
<span class="line"><span style="color:#e1e4e8;">iconv	转换文件的编码格式。</span></span>
<span class="line"><span style="color:#e1e4e8;">dos2unix	将 DOS 格式文件转换成 UNIX 格式。</span></span>
<span class="line"><span style="color:#e1e4e8;">diff	全拼 difference，比较文件的差异，常用于文本文件。</span></span>
<span class="line"><span style="color:#e1e4e8;">vimdiff	命令行可视化文件比较工具，常用于文本文件。</span></span>
<span class="line"><span style="color:#e1e4e8;">rev	反向输出文件内容。</span></span>
<span class="line"><span style="color:#e1e4e8;">grep/egrep	过滤字符串，三剑客老三。</span></span>
<span class="line"><span style="color:#e1e4e8;">join	按两个文件的相同字段合并。</span></span>
<span class="line"><span style="color:#e1e4e8;">tr	替换或删除字符。</span></span>
<span class="line"><span style="color:#e1e4e8;">vi/vim	命令行文本编辑器。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">文件压缩及解压缩命令（4 个）</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">tar	打包压缩。oldboy</span></span>
<span class="line"><span style="color:#e1e4e8;">unzip	解压文件。</span></span>
<span class="line"><span style="color:#e1e4e8;">gzip	gzip 压缩工具。</span></span>
<span class="line"><span style="color:#e1e4e8;">zip	压缩工具。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">信息显示命令（11 个）</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">uname	显示操作系统相关信息的命令。</span></span>
<span class="line"><span style="color:#e1e4e8;">hostname	显示或者设置当前系统的主机名。</span></span>
<span class="line"><span style="color:#e1e4e8;">dmesg	显示开机信息，用于诊断系统故障。</span></span>
<span class="line"><span style="color:#e1e4e8;">uptime	显示系统运行时间及负载。</span></span>
<span class="line"><span style="color:#e1e4e8;">stat	显示文件或文件系统的状态。</span></span>
<span class="line"><span style="color:#e1e4e8;">du	计算磁盘空间使用情况。</span></span>
<span class="line"><span style="color:#e1e4e8;">df	报告文件系统磁盘空间的使用情况。</span></span>
<span class="line"><span style="color:#e1e4e8;">top	实时显示系统资源使用情况。</span></span>
<span class="line"><span style="color:#e1e4e8;">free	查看系统内存。</span></span>
<span class="line"><span style="color:#e1e4e8;">date	显示与设置系统时间。</span></span>
<span class="line"><span style="color:#e1e4e8;">cal	查看日历等时间信息。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">搜索文件命令（4 个）</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">which	查找二进制命令，按环境变量 PATH 路径查找。</span></span>
<span class="line"><span style="color:#e1e4e8;">find	从磁盘遍历查找文件或目录。</span></span>
<span class="line"><span style="color:#e1e4e8;">whereis	查找二进制命令，按环境变量 PATH 路径查找。</span></span>
<span class="line"><span style="color:#e1e4e8;">locate	从数据库 (/var/lib/mlocate/mlocate.db) 查找命令，使用 updatedb 更新库。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">用户管理命令（10 个）</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">useradd	添加用户。</span></span>
<span class="line"><span style="color:#e1e4e8;">usermod	修改系统已经存在的用户属性。</span></span>
<span class="line"><span style="color:#e1e4e8;">userdel	删除用户。</span></span>
<span class="line"><span style="color:#e1e4e8;">groupadd	添加用户组。</span></span>
<span class="line"><span style="color:#e1e4e8;">passwd	修改用户密码。</span></span>
<span class="line"><span style="color:#e1e4e8;">chage	修改用户密码有效期限。</span></span>
<span class="line"><span style="color:#e1e4e8;">id	查看用户的 uid,gid 及归属的用户组。</span></span>
<span class="line"><span style="color:#e1e4e8;">su	切换用户身份。</span></span>
<span class="line"><span style="color:#e1e4e8;">visudo	编辑 / etc/sudoers 文件的专属命令。</span></span>
<span class="line"><span style="color:#e1e4e8;">sudo	以另外一个用户身份（默认 root 用户）执行事先在 sudoers 文件允许的命令。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">基础网络操作命令（11 个）</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">telnet	使用 TELNET 协议远程登录。</span></span>
<span class="line"><span style="color:#e1e4e8;">ssh	使用 SSH 加密协议远程登录。</span></span>
<span class="line"><span style="color:#e1e4e8;">scp	全拼 secure copy，用于不同主机之间复制文件。</span></span>
<span class="line"><span style="color:#e1e4e8;">wget	命令行下载文件。</span></span>
<span class="line"><span style="color:#e1e4e8;">ping	测试主机之间网络的连通性。</span></span>
<span class="line"><span style="color:#e1e4e8;">route	显示和设置 linux 系统的路由表。</span></span>
<span class="line"><span style="color:#e1e4e8;">ifconfig	查看、配置、启用或禁用网络接口的命令。</span></span>
<span class="line"><span style="color:#e1e4e8;">ifup	启动网卡。</span></span>
<span class="line"><span style="color:#e1e4e8;">ifdown	关闭网卡。</span></span>
<span class="line"><span style="color:#e1e4e8;">netstat	查看网络状态。</span></span>
<span class="line"><span style="color:#e1e4e8;">ss	查看网络状态。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">深入网络操作命令（9 个）</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">nmap	网络扫描命令。</span></span>
<span class="line"><span style="color:#e1e4e8;">lsof	全名 list open files，也就是列举系统中已经被打开的文件。</span></span>
<span class="line"><span style="color:#e1e4e8;">mail	发送和接收邮件。</span></span>
<span class="line"><span style="color:#e1e4e8;">mutt	邮件管理命令。</span></span>
<span class="line"><span style="color:#e1e4e8;">nslookup	交互式查询互联网 DNS 服务器的命令。</span></span>
<span class="line"><span style="color:#e1e4e8;">dig	查找 DNS 解析过程。</span></span>
<span class="line"><span style="color:#e1e4e8;">host	查询 DNS 的命令。</span></span>
<span class="line"><span style="color:#e1e4e8;">traceroute	追踪数据传输路由状况。</span></span>
<span class="line"><span style="color:#e1e4e8;">tcpdump	命令行的抓包工具。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">有关磁盘与文件系统的命令（16 个）</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">mount	挂载文件系统。</span></span>
<span class="line"><span style="color:#e1e4e8;">umount	卸载文件系统。</span></span>
<span class="line"><span style="color:#e1e4e8;">fsck	检查并修复 Linux 文件系统。</span></span>
<span class="line"><span style="color:#e1e4e8;">dd	转换或复制文件。</span></span>
<span class="line"><span style="color:#e1e4e8;">dumpe2fs	导出 ext2/ext3/ext4 文件系统信息。</span></span>
<span class="line"><span style="color:#e1e4e8;">dump	ext2/3/4 文件系统备份工具。</span></span>
<span class="line"><span style="color:#e1e4e8;">fdisk	磁盘分区命令，适用于 2TB 以下磁盘分区。</span></span>
<span class="line"><span style="color:#e1e4e8;">parted	磁盘分区命令，没有磁盘大小限制，常用于 2TB 以下磁盘分区。</span></span>
<span class="line"><span style="color:#e1e4e8;">mkfs	格式化创建 Linux 文件系统。</span></span>
<span class="line"><span style="color:#e1e4e8;">partprobe	更新内核的硬盘分区表信息。</span></span>
<span class="line"><span style="color:#e1e4e8;">e2fsck	检查 ext2/ext3/ext4 类型文件系统。</span></span>
<span class="line"><span style="color:#e1e4e8;">mkswap	创建 Linux 交换分区。</span></span>
<span class="line"><span style="color:#e1e4e8;">swapon	启用交换分区。</span></span>
<span class="line"><span style="color:#e1e4e8;">swapoff	关闭交换分区。</span></span>
<span class="line"><span style="color:#e1e4e8;">sync	将内存缓冲区内的数据写入磁盘。</span></span>
<span class="line"><span style="color:#e1e4e8;">resize2fs	调整 ext2/ext3/ext4 文件系统大小。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">系统权限及用户授权相关命令（4 个）</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">chmod	改变文件或目录权限。</span></span>
<span class="line"><span style="color:#e1e4e8;">chown	改变文件或目录的属主和属组。</span></span>
<span class="line"><span style="color:#e1e4e8;">chgrp	更改文件用户组。</span></span>
<span class="line"><span style="color:#e1e4e8;">umask	显示或设置权限掩码。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">查看系统用户登陆信息的命令（7 个）</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">whoami	显示当前有效的用户名称，相当于执行 id -un 命令。</span></span>
<span class="line"><span style="color:#e1e4e8;">who	显示目前登录系统的用户信息。</span></span>
<span class="line"><span style="color:#e1e4e8;">w	显示已经登陆系统的用户列表，并显示用户正在执行的指令。</span></span>
<span class="line"><span style="color:#e1e4e8;">last	显示登入系统的用户。</span></span>
<span class="line"><span style="color:#e1e4e8;">lastlog	显示系统中所有用户最近一次登录信息。</span></span>
<span class="line"><span style="color:#e1e4e8;">users	显示当前登录系统的所有用户的用户列表。</span></span>
<span class="line"><span style="color:#e1e4e8;">finger	查找并显示用户信息。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">内置命令及其它（19 个）</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">echo	打印变量，或直接输出指定的字符串</span></span>
<span class="line"><span style="color:#e1e4e8;">printf	将结果格式化输出到标准输出。</span></span>
<span class="line"><span style="color:#e1e4e8;">rpm	管理 rpm 包的命令。</span></span>
<span class="line"><span style="color:#e1e4e8;">yum	自动化简单化地管理 rpm 包的命令。</span></span>
<span class="line"><span style="color:#e1e4e8;">watch	周期性的执行给定的命令，并将命令的输出以全屏方式显示。</span></span>
<span class="line"><span style="color:#e1e4e8;">alias	设置系统别名。</span></span>
<span class="line"><span style="color:#e1e4e8;">unalias	取消系统别名。</span></span>
<span class="line"><span style="color:#e1e4e8;">date	查看或设置系统时间。</span></span>
<span class="line"><span style="color:#e1e4e8;">clear	清除屏幕，简称清屏。</span></span>
<span class="line"><span style="color:#e1e4e8;">history	查看命令执行的历史纪录。</span></span>
<span class="line"><span style="color:#e1e4e8;">eject	弹出光驱。</span></span>
<span class="line"><span style="color:#e1e4e8;">time	计算命令执行时间。</span></span>
<span class="line"><span style="color:#e1e4e8;">nc	功能强大的网络工具。</span></span>
<span class="line"><span style="color:#e1e4e8;">xargs	将标准输入转换成命令行参数。</span></span>
<span class="line"><span style="color:#e1e4e8;">exec	调用并执行指令的命令。</span></span>
<span class="line"><span style="color:#e1e4e8;">export	设置或者显示环境变量。</span></span>
<span class="line"><span style="color:#e1e4e8;">unset	删除变量或函数。</span></span>
<span class="line"><span style="color:#e1e4e8;">type	用于判断另外一个命令是否是内置命令。</span></span>
<span class="line"><span style="color:#e1e4e8;">bc	命令行科学计算器</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">系统管理与性能监视命令 (9 个)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">chkconfig	管理 Linux 系统开机启动项。</span></span>
<span class="line"><span style="color:#e1e4e8;">vmstat	虚拟内存统计。</span></span>
<span class="line"><span style="color:#e1e4e8;">mpstat	显示各个可用 CPU 的状态统计。</span></span>
<span class="line"><span style="color:#e1e4e8;">iostat	统计系统 IO。</span></span>
<span class="line"><span style="color:#e1e4e8;">sar	全面地获取系统的 CPU、运行队列、磁盘 I/O、分页（交换区）、内存、 CPU 中断和网络等性能数据。</span></span>
<span class="line"><span style="color:#e1e4e8;">ipcs	用于报告 Linux 中进程间通信设施的状态，显示的信息包括消息列表、共享内存和信号量的信息。</span></span>
<span class="line"><span style="color:#e1e4e8;">ipcrm	用来删除一个或更多的消息队列、信号量集或者共享内存标识。</span></span>
<span class="line"><span style="color:#e1e4e8;">strace	用于诊断、调试 Linux 用户空间跟踪器。我们用它来监控用户空间进程和内核的交互，比如系统调用、信号传递、进程状态变更等。</span></span>
<span class="line"><span style="color:#e1e4e8;">ltrace	命令会跟踪进程的库函数调用, 它会显现出哪个库函数被调用。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">关机 / 重启 / 注销和查看系统信息的命令（6 个）</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">shutdown	关机。</span></span>
<span class="line"><span style="color:#e1e4e8;">halt	关机。</span></span>
<span class="line"><span style="color:#e1e4e8;">poweroff	关闭电源。</span></span>
<span class="line"><span style="color:#e1e4e8;">logout	退出当前登录的 Shell。</span></span>
<span class="line"><span style="color:#e1e4e8;">exit	退出当前登录的 Shell。</span></span>
<span class="line"><span style="color:#e1e4e8;">Ctrl+d	退出当前登录的 Shell 的快捷键。</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">进程管理相关命令（15 个）</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">bg	将一个在后台暂停的命令，变成继续执行 （在后台执行）。</span></span>
<span class="line"><span style="color:#e1e4e8;">fg	将后台中的命令调至前台继续运行。</span></span>
<span class="line"><span style="color:#e1e4e8;">jobs	查看当前有多少在后台运行的命令。</span></span>
<span class="line"><span style="color:#e1e4e8;">kill	终止进程。</span></span>
<span class="line"><span style="color:#e1e4e8;">killall	通过进程名终止进程。</span></span>
<span class="line"><span style="color:#e1e4e8;">pkill	通过进程名终止进程。</span></span>
<span class="line"><span style="color:#e1e4e8;">crontab	定时任务命令。</span></span>
<span class="line"><span style="color:#e1e4e8;">ps	显示进程的快照。</span></span>
<span class="line"><span style="color:#e1e4e8;">pstree	树形显示进程。</span></span>
<span class="line"><span style="color:#e1e4e8;">nice/renice	调整程序运行的优先级。</span></span>
<span class="line"><span style="color:#e1e4e8;">nohup	忽略挂起信号运行指定的命令。</span></span>
<span class="line"><span style="color:#e1e4e8;">pgrep	查找匹配条件的进程。</span></span>
<span class="line"><span style="color:#e1e4e8;">runlevel	查看系统当前运行级别。</span></span>
<span class="line"><span style="color:#e1e4e8;">init	切换运行级别。</span></span>
<span class="line"><span style="color:#e1e4e8;">service	启动、停止、重新启动和关闭系统服务，还可以显示所有系统服务的当前状态。</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#24292e;">命令	功能说明</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">线上查询及帮助命令 (2 个)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">man	查看命令帮助，命令的词典，更复杂的还有 info，但不常用。</span></span>
<span class="line"><span style="color:#24292e;">help	查看 Linux 内置命令的帮助，比如 cd 命令。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">文件和目录操作命令 (18 个)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">ls	全拼 list，功能是列出目录的内容及其内容属性信息。</span></span>
<span class="line"><span style="color:#24292e;">cd	全拼 change directory，功能是从当前工作目录切换到指定的工作目录。</span></span>
<span class="line"><span style="color:#24292e;">cp	全拼 copy，其功能为复制文件或目录。</span></span>
<span class="line"><span style="color:#24292e;">find	查找的意思，用于查找目录及目录下的文件。</span></span>
<span class="line"><span style="color:#24292e;">mkdir	全拼 make directories，其功能是创建目录。</span></span>
<span class="line"><span style="color:#24292e;">mv	全拼 move，其功能是移动或重命名文件。</span></span>
<span class="line"><span style="color:#24292e;">pwd	全拼 print working directory，其功能是显示当前工作目录的绝对路径。</span></span>
<span class="line"><span style="color:#24292e;">rename	用于重命名文件。</span></span>
<span class="line"><span style="color:#24292e;">rm	全拼 remove，其功能是删除一个或多个文件或目录。</span></span>
<span class="line"><span style="color:#24292e;">rmdir	全拼 remove empty directories，功能是删除空目录。</span></span>
<span class="line"><span style="color:#24292e;">touch	创建新的空文件，改变已有文件的时间戳属性。</span></span>
<span class="line"><span style="color:#24292e;">tree	功能是以树形结构显示目录下的内容。</span></span>
<span class="line"><span style="color:#24292e;">basename	显示文件名或目录名。</span></span>
<span class="line"><span style="color:#24292e;">dirname	显示文件或目录路径。</span></span>
<span class="line"><span style="color:#24292e;">chattr	改变文件的扩展属性。</span></span>
<span class="line"><span style="color:#24292e;">lsattr	查看文件扩展属性。</span></span>
<span class="line"><span style="color:#24292e;">file	显示文件的类型。</span></span>
<span class="line"><span style="color:#24292e;">md5sum	计算和校验文件的 MD5 值。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">查看文件及内容处理命令（21 个）</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">cat	全拼 concatenate，功能是用于连接多个文件并且打印到屏幕输出或重定向到指定文件中。</span></span>
<span class="line"><span style="color:#24292e;">tac	tac 是 cat 的反向拼写，因此命令的功能为反向显示文件内容。</span></span>
<span class="line"><span style="color:#24292e;">more	分页显示文件内容。</span></span>
<span class="line"><span style="color:#24292e;">less	分页显示文件内容，more 命令的相反用法。</span></span>
<span class="line"><span style="color:#24292e;">head	显示文件内容的头部。</span></span>
<span class="line"><span style="color:#24292e;">tail	显示文件内容的尾部。</span></span>
<span class="line"><span style="color:#24292e;">cut	将文件的每一行按指定分隔符分割并输出。</span></span>
<span class="line"><span style="color:#24292e;">split	分割文件为不同的小片段。</span></span>
<span class="line"><span style="color:#24292e;">paste	按行合并文件内容。</span></span>
<span class="line"><span style="color:#24292e;">sort	对文件的文本内容排序。</span></span>
<span class="line"><span style="color:#24292e;">uniq	去除重复行。oldboy</span></span>
<span class="line"><span style="color:#24292e;">wc	统计文件的行数、单词数或字节数。</span></span>
<span class="line"><span style="color:#24292e;">iconv	转换文件的编码格式。</span></span>
<span class="line"><span style="color:#24292e;">dos2unix	将 DOS 格式文件转换成 UNIX 格式。</span></span>
<span class="line"><span style="color:#24292e;">diff	全拼 difference，比较文件的差异，常用于文本文件。</span></span>
<span class="line"><span style="color:#24292e;">vimdiff	命令行可视化文件比较工具，常用于文本文件。</span></span>
<span class="line"><span style="color:#24292e;">rev	反向输出文件内容。</span></span>
<span class="line"><span style="color:#24292e;">grep/egrep	过滤字符串，三剑客老三。</span></span>
<span class="line"><span style="color:#24292e;">join	按两个文件的相同字段合并。</span></span>
<span class="line"><span style="color:#24292e;">tr	替换或删除字符。</span></span>
<span class="line"><span style="color:#24292e;">vi/vim	命令行文本编辑器。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">文件压缩及解压缩命令（4 个）</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">tar	打包压缩。oldboy</span></span>
<span class="line"><span style="color:#24292e;">unzip	解压文件。</span></span>
<span class="line"><span style="color:#24292e;">gzip	gzip 压缩工具。</span></span>
<span class="line"><span style="color:#24292e;">zip	压缩工具。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">信息显示命令（11 个）</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">uname	显示操作系统相关信息的命令。</span></span>
<span class="line"><span style="color:#24292e;">hostname	显示或者设置当前系统的主机名。</span></span>
<span class="line"><span style="color:#24292e;">dmesg	显示开机信息，用于诊断系统故障。</span></span>
<span class="line"><span style="color:#24292e;">uptime	显示系统运行时间及负载。</span></span>
<span class="line"><span style="color:#24292e;">stat	显示文件或文件系统的状态。</span></span>
<span class="line"><span style="color:#24292e;">du	计算磁盘空间使用情况。</span></span>
<span class="line"><span style="color:#24292e;">df	报告文件系统磁盘空间的使用情况。</span></span>
<span class="line"><span style="color:#24292e;">top	实时显示系统资源使用情况。</span></span>
<span class="line"><span style="color:#24292e;">free	查看系统内存。</span></span>
<span class="line"><span style="color:#24292e;">date	显示与设置系统时间。</span></span>
<span class="line"><span style="color:#24292e;">cal	查看日历等时间信息。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">搜索文件命令（4 个）</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">which	查找二进制命令，按环境变量 PATH 路径查找。</span></span>
<span class="line"><span style="color:#24292e;">find	从磁盘遍历查找文件或目录。</span></span>
<span class="line"><span style="color:#24292e;">whereis	查找二进制命令，按环境变量 PATH 路径查找。</span></span>
<span class="line"><span style="color:#24292e;">locate	从数据库 (/var/lib/mlocate/mlocate.db) 查找命令，使用 updatedb 更新库。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">用户管理命令（10 个）</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">useradd	添加用户。</span></span>
<span class="line"><span style="color:#24292e;">usermod	修改系统已经存在的用户属性。</span></span>
<span class="line"><span style="color:#24292e;">userdel	删除用户。</span></span>
<span class="line"><span style="color:#24292e;">groupadd	添加用户组。</span></span>
<span class="line"><span style="color:#24292e;">passwd	修改用户密码。</span></span>
<span class="line"><span style="color:#24292e;">chage	修改用户密码有效期限。</span></span>
<span class="line"><span style="color:#24292e;">id	查看用户的 uid,gid 及归属的用户组。</span></span>
<span class="line"><span style="color:#24292e;">su	切换用户身份。</span></span>
<span class="line"><span style="color:#24292e;">visudo	编辑 / etc/sudoers 文件的专属命令。</span></span>
<span class="line"><span style="color:#24292e;">sudo	以另外一个用户身份（默认 root 用户）执行事先在 sudoers 文件允许的命令。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">基础网络操作命令（11 个）</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">telnet	使用 TELNET 协议远程登录。</span></span>
<span class="line"><span style="color:#24292e;">ssh	使用 SSH 加密协议远程登录。</span></span>
<span class="line"><span style="color:#24292e;">scp	全拼 secure copy，用于不同主机之间复制文件。</span></span>
<span class="line"><span style="color:#24292e;">wget	命令行下载文件。</span></span>
<span class="line"><span style="color:#24292e;">ping	测试主机之间网络的连通性。</span></span>
<span class="line"><span style="color:#24292e;">route	显示和设置 linux 系统的路由表。</span></span>
<span class="line"><span style="color:#24292e;">ifconfig	查看、配置、启用或禁用网络接口的命令。</span></span>
<span class="line"><span style="color:#24292e;">ifup	启动网卡。</span></span>
<span class="line"><span style="color:#24292e;">ifdown	关闭网卡。</span></span>
<span class="line"><span style="color:#24292e;">netstat	查看网络状态。</span></span>
<span class="line"><span style="color:#24292e;">ss	查看网络状态。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">深入网络操作命令（9 个）</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">nmap	网络扫描命令。</span></span>
<span class="line"><span style="color:#24292e;">lsof	全名 list open files，也就是列举系统中已经被打开的文件。</span></span>
<span class="line"><span style="color:#24292e;">mail	发送和接收邮件。</span></span>
<span class="line"><span style="color:#24292e;">mutt	邮件管理命令。</span></span>
<span class="line"><span style="color:#24292e;">nslookup	交互式查询互联网 DNS 服务器的命令。</span></span>
<span class="line"><span style="color:#24292e;">dig	查找 DNS 解析过程。</span></span>
<span class="line"><span style="color:#24292e;">host	查询 DNS 的命令。</span></span>
<span class="line"><span style="color:#24292e;">traceroute	追踪数据传输路由状况。</span></span>
<span class="line"><span style="color:#24292e;">tcpdump	命令行的抓包工具。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">有关磁盘与文件系统的命令（16 个）</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">mount	挂载文件系统。</span></span>
<span class="line"><span style="color:#24292e;">umount	卸载文件系统。</span></span>
<span class="line"><span style="color:#24292e;">fsck	检查并修复 Linux 文件系统。</span></span>
<span class="line"><span style="color:#24292e;">dd	转换或复制文件。</span></span>
<span class="line"><span style="color:#24292e;">dumpe2fs	导出 ext2/ext3/ext4 文件系统信息。</span></span>
<span class="line"><span style="color:#24292e;">dump	ext2/3/4 文件系统备份工具。</span></span>
<span class="line"><span style="color:#24292e;">fdisk	磁盘分区命令，适用于 2TB 以下磁盘分区。</span></span>
<span class="line"><span style="color:#24292e;">parted	磁盘分区命令，没有磁盘大小限制，常用于 2TB 以下磁盘分区。</span></span>
<span class="line"><span style="color:#24292e;">mkfs	格式化创建 Linux 文件系统。</span></span>
<span class="line"><span style="color:#24292e;">partprobe	更新内核的硬盘分区表信息。</span></span>
<span class="line"><span style="color:#24292e;">e2fsck	检查 ext2/ext3/ext4 类型文件系统。</span></span>
<span class="line"><span style="color:#24292e;">mkswap	创建 Linux 交换分区。</span></span>
<span class="line"><span style="color:#24292e;">swapon	启用交换分区。</span></span>
<span class="line"><span style="color:#24292e;">swapoff	关闭交换分区。</span></span>
<span class="line"><span style="color:#24292e;">sync	将内存缓冲区内的数据写入磁盘。</span></span>
<span class="line"><span style="color:#24292e;">resize2fs	调整 ext2/ext3/ext4 文件系统大小。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">系统权限及用户授权相关命令（4 个）</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">chmod	改变文件或目录权限。</span></span>
<span class="line"><span style="color:#24292e;">chown	改变文件或目录的属主和属组。</span></span>
<span class="line"><span style="color:#24292e;">chgrp	更改文件用户组。</span></span>
<span class="line"><span style="color:#24292e;">umask	显示或设置权限掩码。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">查看系统用户登陆信息的命令（7 个）</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">whoami	显示当前有效的用户名称，相当于执行 id -un 命令。</span></span>
<span class="line"><span style="color:#24292e;">who	显示目前登录系统的用户信息。</span></span>
<span class="line"><span style="color:#24292e;">w	显示已经登陆系统的用户列表，并显示用户正在执行的指令。</span></span>
<span class="line"><span style="color:#24292e;">last	显示登入系统的用户。</span></span>
<span class="line"><span style="color:#24292e;">lastlog	显示系统中所有用户最近一次登录信息。</span></span>
<span class="line"><span style="color:#24292e;">users	显示当前登录系统的所有用户的用户列表。</span></span>
<span class="line"><span style="color:#24292e;">finger	查找并显示用户信息。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">内置命令及其它（19 个）</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">echo	打印变量，或直接输出指定的字符串</span></span>
<span class="line"><span style="color:#24292e;">printf	将结果格式化输出到标准输出。</span></span>
<span class="line"><span style="color:#24292e;">rpm	管理 rpm 包的命令。</span></span>
<span class="line"><span style="color:#24292e;">yum	自动化简单化地管理 rpm 包的命令。</span></span>
<span class="line"><span style="color:#24292e;">watch	周期性的执行给定的命令，并将命令的输出以全屏方式显示。</span></span>
<span class="line"><span style="color:#24292e;">alias	设置系统别名。</span></span>
<span class="line"><span style="color:#24292e;">unalias	取消系统别名。</span></span>
<span class="line"><span style="color:#24292e;">date	查看或设置系统时间。</span></span>
<span class="line"><span style="color:#24292e;">clear	清除屏幕，简称清屏。</span></span>
<span class="line"><span style="color:#24292e;">history	查看命令执行的历史纪录。</span></span>
<span class="line"><span style="color:#24292e;">eject	弹出光驱。</span></span>
<span class="line"><span style="color:#24292e;">time	计算命令执行时间。</span></span>
<span class="line"><span style="color:#24292e;">nc	功能强大的网络工具。</span></span>
<span class="line"><span style="color:#24292e;">xargs	将标准输入转换成命令行参数。</span></span>
<span class="line"><span style="color:#24292e;">exec	调用并执行指令的命令。</span></span>
<span class="line"><span style="color:#24292e;">export	设置或者显示环境变量。</span></span>
<span class="line"><span style="color:#24292e;">unset	删除变量或函数。</span></span>
<span class="line"><span style="color:#24292e;">type	用于判断另外一个命令是否是内置命令。</span></span>
<span class="line"><span style="color:#24292e;">bc	命令行科学计算器</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">系统管理与性能监视命令 (9 个)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">chkconfig	管理 Linux 系统开机启动项。</span></span>
<span class="line"><span style="color:#24292e;">vmstat	虚拟内存统计。</span></span>
<span class="line"><span style="color:#24292e;">mpstat	显示各个可用 CPU 的状态统计。</span></span>
<span class="line"><span style="color:#24292e;">iostat	统计系统 IO。</span></span>
<span class="line"><span style="color:#24292e;">sar	全面地获取系统的 CPU、运行队列、磁盘 I/O、分页（交换区）、内存、 CPU 中断和网络等性能数据。</span></span>
<span class="line"><span style="color:#24292e;">ipcs	用于报告 Linux 中进程间通信设施的状态，显示的信息包括消息列表、共享内存和信号量的信息。</span></span>
<span class="line"><span style="color:#24292e;">ipcrm	用来删除一个或更多的消息队列、信号量集或者共享内存标识。</span></span>
<span class="line"><span style="color:#24292e;">strace	用于诊断、调试 Linux 用户空间跟踪器。我们用它来监控用户空间进程和内核的交互，比如系统调用、信号传递、进程状态变更等。</span></span>
<span class="line"><span style="color:#24292e;">ltrace	命令会跟踪进程的库函数调用, 它会显现出哪个库函数被调用。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">关机 / 重启 / 注销和查看系统信息的命令（6 个）</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">shutdown	关机。</span></span>
<span class="line"><span style="color:#24292e;">halt	关机。</span></span>
<span class="line"><span style="color:#24292e;">poweroff	关闭电源。</span></span>
<span class="line"><span style="color:#24292e;">logout	退出当前登录的 Shell。</span></span>
<span class="line"><span style="color:#24292e;">exit	退出当前登录的 Shell。</span></span>
<span class="line"><span style="color:#24292e;">Ctrl+d	退出当前登录的 Shell 的快捷键。</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">进程管理相关命令（15 个）</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">bg	将一个在后台暂停的命令，变成继续执行 （在后台执行）。</span></span>
<span class="line"><span style="color:#24292e;">fg	将后台中的命令调至前台继续运行。</span></span>
<span class="line"><span style="color:#24292e;">jobs	查看当前有多少在后台运行的命令。</span></span>
<span class="line"><span style="color:#24292e;">kill	终止进程。</span></span>
<span class="line"><span style="color:#24292e;">killall	通过进程名终止进程。</span></span>
<span class="line"><span style="color:#24292e;">pkill	通过进程名终止进程。</span></span>
<span class="line"><span style="color:#24292e;">crontab	定时任务命令。</span></span>
<span class="line"><span style="color:#24292e;">ps	显示进程的快照。</span></span>
<span class="line"><span style="color:#24292e;">pstree	树形显示进程。</span></span>
<span class="line"><span style="color:#24292e;">nice/renice	调整程序运行的优先级。</span></span>
<span class="line"><span style="color:#24292e;">nohup	忽略挂起信号运行指定的命令。</span></span>
<span class="line"><span style="color:#24292e;">pgrep	查找匹配条件的进程。</span></span>
<span class="line"><span style="color:#24292e;">runlevel	查看系统当前运行级别。</span></span>
<span class="line"><span style="color:#24292e;">init	切换运行级别。</span></span>
<span class="line"><span style="color:#24292e;">service	启动、停止、重新启动和关闭系统服务，还可以显示所有系统服务的当前状态。</span></span></code></pre></div>`,2),o=[l];function c(t,i,r,y,d,u){return n(),a("div",null,o)}const h=s(p,[["render",c]]);export{f as __pageData,h as default};
