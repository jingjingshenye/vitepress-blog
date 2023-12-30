import{_ as s,o as n,c as a,Q as e}from"./chunks/framework.9f730de1.js";const u=JSON.parse('{"title":"服务器相关","description":"","frontmatter":{},"headers":[],"relativePath":"Linux/服务器相关.md","filePath":"Linux/服务器相关.md"}'),p={name:"Linux/服务器相关.md"},l=e(`<h1 id="服务器相关" tabindex="-1">服务器相关 <a class="header-anchor" href="#服务器相关" aria-label="Permalink to &quot;服务器相关&quot;">​</a></h1><h2 id="ssh-相关" tabindex="-1">ssh 相关 <a class="header-anchor" href="#ssh-相关" aria-label="Permalink to &quot;ssh 相关&quot;">​</a></h2><p>远程连接服务器</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">ssh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">用户名@服务器IP地址</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">ssh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">用户名@服务器IP地址</span></span></code></pre></div><h2 id="解压-压缩" tabindex="-1">解压， 压缩 <a class="header-anchor" href="#解压-压缩" aria-label="Permalink to &quot;解压， 压缩&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">tar</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-zxvf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">压缩包名</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">tar</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-zxvf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">压缩包名</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">tar</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-zcvf</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">压缩包名</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">要压缩的文件或目录</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">tar</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-zcvf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">压缩包名</span><span style="color:#24292E;"> </span><span style="color:#032F62;">要压缩的文件或目录</span></span></code></pre></div><p>-z 表示使用 gzip 压缩 -x 表示解压 -v 表示显示压缩过程 -c 表示建立压缩档案 -f 表示使用档案名称 -j 表示使用 bzip2 压缩 -Z 表示使用 compress 压缩 -h 表示显示帮助信息</p><h2 id="上传文件" tabindex="-1">上传文件 <a class="header-anchor" href="#上传文件" aria-label="Permalink to &quot;上传文件&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">scp</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">要上传的文件</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">远程用户名@远程服务器IP地址:要上传到服务器上的路径</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">scp</span><span style="color:#24292E;"> </span><span style="color:#032F62;">要上传的文件</span><span style="color:#24292E;"> </span><span style="color:#032F62;">远程用户名@远程服务器IP地址:要上传到服务器上的路径</span></span></code></pre></div><h2 id="下载文件" tabindex="-1">下载文件 <a class="header-anchor" href="#下载文件" aria-label="Permalink to &quot;下载文件&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">scp</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">远程用户名@远程服务器IP地址:要下载的文件路径</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">本地路径</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">scp</span><span style="color:#24292E;"> </span><span style="color:#032F62;">远程用户名@远程服务器IP地址:要下载的文件路径</span><span style="color:#24292E;"> </span><span style="color:#032F62;">本地路径</span></span></code></pre></div><h2 id="文件属性" tabindex="-1">文件属性 <a class="header-anchor" href="#文件属性" aria-label="Permalink to &quot;文件属性&quot;">​</a></h2><p>rwx 权限</p><ul><li>r 读权限</li><li>w 写权限</li><li>x 执行权限</li></ul><p>每个用户有三组 rwx，分别是：</p><ul><li>所有者</li><li>组</li><li>其他</li></ul><p>比如：-rwxr--r-- 就是所有者有读写执行权限，组和其他人只有读权限。(最开始的-表示文件，d 表示目录，l 表示软连接)</p><p>给文件访问权限的命令：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">chmod</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">777</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">文件名</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">chmod</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">777</span><span style="color:#24292E;"> </span><span style="color:#032F62;">文件名</span></span></code></pre></div><p>每个 rwx 代表一个数字，421，加起来 7。</p><p>777 就是所有人都有权限，777 就是所有人都有权限，777 就是所有人都有权限。</p><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">重要</span></span>
<span class="line"><span style="color:#e1e4e8;">1、top：查看内存/显示系统当前进程信息</span></span>
<span class="line"><span style="color:#e1e4e8;">2、df -h：查看磁盘储存状况</span></span>
<span class="line"><span style="color:#e1e4e8;">3、iotop：查看IO读写（yum install iotop安装）</span></span>
<span class="line"><span style="color:#e1e4e8;">4、iotop -o：直接查看比较高的磁盘读写程序</span></span>
<span class="line"><span style="color:#e1e4e8;">5、netstat -tunlp | grep 端口号：查看端口号占用情况（1）</span></span>
<span class="line"><span style="color:#e1e4e8;">6、lsof -i:端口号：查看端口号占用情况（2）</span></span>
<span class="line"><span style="color:#e1e4e8;">7、uptime：查看报告系统运行时长及平均负载</span></span>
<span class="line"><span style="color:#e1e4e8;">8、ps aux：查看进程</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">基础</span></span>
<span class="line"><span style="color:#e1e4e8;">1、查看目录与文件：ls</span></span>
<span class="line"><span style="color:#e1e4e8;">ls -la：显示当前目录下所有文件的详细信息</span></span>
<span class="line"><span style="color:#e1e4e8;">2、切换目录：cd</span></span>
<span class="line"><span style="color:#e1e4e8;">cd /home 进入 ‘/ home’ 目录</span></span>
<span class="line"><span style="color:#e1e4e8;">cd … 返回上一级目录</span></span>
<span class="line"><span style="color:#e1e4e8;">cd …/… 返回上两级目录</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">3、显示当前目录：pwd</span></span>
<span class="line"><span style="color:#e1e4e8;">pwd</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">4、创建空文件：touch</span></span>
<span class="line"><span style="color:#e1e4e8;">touch desc.txt：在当前目录下创建文件desc.txt</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">5、创建目录：mkdir</span></span>
<span class="line"><span style="color:#e1e4e8;">mkdir test：在当前目录下创建test目录</span></span>
<span class="line"><span style="color:#e1e4e8;">mkdir -p /opt/test/img：在/opt/test目录下创建目录img，若无test目录，先创建test目录</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">6、查看文件内容：cat</span></span>
<span class="line"><span style="color:#e1e4e8;">cat desc.txt：查看desc.txt的内容</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">7、分页查看文件内容：more</span></span>
<span class="line"><span style="color:#e1e4e8;">more desc.txt：分页查看desc.txt的内容</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">8、查看文件尾内容：tail</span></span>
<span class="line"><span style="color:#e1e4e8;">tail -100 desc.txt：查看desc.txt的最后100行内容</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">9、拷贝：cp</span></span>
<span class="line"><span style="color:#e1e4e8;">cp desc.txt /mnt/：拷贝desc.txt到/mnt目录下</span></span>
<span class="line"><span style="color:#e1e4e8;">cp -r test /mnt/：拷贝test目录到/mnt目录下</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">10、剪切或改名：</span></span>
<span class="line"><span style="color:#e1e4e8;">mv desc.txt /mnt/：剪切文件desc.txt到目录/mnt下</span></span>
<span class="line"><span style="color:#e1e4e8;">mv 原名 新名</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">11、删除：rm</span></span>
<span class="line"><span style="color:#e1e4e8;">rm -rf test：删除test目录，-r递归删除，-f强制删除。危险操作，务必小心，切记！</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">12、搜索文件：find</span></span>
<span class="line"><span style="color:#e1e4e8;">find /opt -name ‘*.txt’：在opt目录下查找以.txt结尾的文件</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">13、显示或配置网络设备：ifconfig</span></span>
<span class="line"><span style="color:#e1e4e8;">ifconfig：显示网络设备情况</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">14、显示网络相关信息：netstat</span></span>
<span class="line"><span style="color:#e1e4e8;">netstat -a：列出所有端口</span></span>
<span class="line"><span style="color:#e1e4e8;">netstat -tunlp | grep 端口号：查看进程端口号</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">15、显示进程状态：ps</span></span>
<span class="line"><span style="color:#e1e4e8;">ps -ef：显示当前所有进程</span></span>
<span class="line"><span style="color:#e1e4e8;">ps-ef | grep java：显示当前所有java相关进程</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">16、查看目录使用情况：du</span></span>
<span class="line"><span style="color:#e1e4e8;">du -h /opt/test：查看/opt/test目录的磁盘使用情况</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">17、查看磁盘空间使用情况：df</span></span>
<span class="line"><span style="color:#e1e4e8;">df -h：查看磁盘空间使用情况</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">18、显示系统当前进程信息：top</span></span>
<span class="line"><span style="color:#e1e4e8;">top：显示系统当前进程信息</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">19、杀死进程：kill</span></span>
<span class="line"><span style="color:#e1e4e8;">kill -s 9 27810：杀死进程号为27810的进程，强制终止，系统资源无法回收</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">20、压缩和解压：tar</span></span>
<span class="line"><span style="color:#e1e4e8;">tar -zcvf test.tar.gz ./test：打包test目录为test.tar.gz文件，-z表示用gzip压缩</span></span>
<span class="line"><span style="color:#e1e4e8;">tar -zxvf test.tar.gz：解压test.tar.gz文件</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">21、改变文件或目录的拥有者和组：chown</span></span>
<span class="line"><span style="color:#e1e4e8;">chown nginx:nginx desc.txt：变更文件desc.txt的拥有者为nginx，用户组为nginx</span></span>
<span class="line"><span style="color:#e1e4e8;">chown -R nginx:nginx test：变更test及目录下所有文件的拥有者为nginx，用户组为nginx</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">22、改变文件或目录的访问权限：chmod</span></span>
<span class="line"><span style="color:#e1e4e8;">chmod u+x test.sh：权限范围：u(拥有者)g(郡组)o(其它用户)， 权限代号：r(读权限/4)w(写权限/2)x(执行权限/1)#给文件拥有者增加test.sh的执行权限</span></span>
<span class="line"><span style="color:#e1e4e8;">chmod u+x -R test：给文件拥有者增加test目录及其下所有文件的执行权限</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">23、文本编辑：vim</span></span>
<span class="line"><span style="color:#e1e4e8;">vim三种模式：命令模式，插入模式，编辑模式。使用ESC或i或：来切换模式。</span></span>
<span class="line"><span style="color:#e1e4e8;">命令模式下:q退出 :q!强制退出 :wq!保存退出 :set number显示行号 /java在文档中查找java yy复制 p粘贴</span></span>
<span class="line"><span style="color:#e1e4e8;">vim desc.txt：编辑desc.txt文件</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">24、关机或重启：shutdown</span></span>
<span class="line"><span style="color:#e1e4e8;">shutdown -h now：立刻关机</span></span>
<span class="line"><span style="color:#e1e4e8;">shutdown -r -t 60：60秒后重启</span></span>
<span class="line"><span style="color:#e1e4e8;">shutdown -r now：重启(1)</span></span>
<span class="line"><span style="color:#e1e4e8;">reboot：重启(2)</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">25、帮助命令：man</span></span>
<span class="line"><span style="color:#e1e4e8;">man ls：查看ls命令的帮助文档</span></span>
<span class="line"><span style="color:#e1e4e8;">help</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">重要</span></span>
<span class="line"><span style="color:#24292e;">1、top：查看内存/显示系统当前进程信息</span></span>
<span class="line"><span style="color:#24292e;">2、df -h：查看磁盘储存状况</span></span>
<span class="line"><span style="color:#24292e;">3、iotop：查看IO读写（yum install iotop安装）</span></span>
<span class="line"><span style="color:#24292e;">4、iotop -o：直接查看比较高的磁盘读写程序</span></span>
<span class="line"><span style="color:#24292e;">5、netstat -tunlp | grep 端口号：查看端口号占用情况（1）</span></span>
<span class="line"><span style="color:#24292e;">6、lsof -i:端口号：查看端口号占用情况（2）</span></span>
<span class="line"><span style="color:#24292e;">7、uptime：查看报告系统运行时长及平均负载</span></span>
<span class="line"><span style="color:#24292e;">8、ps aux：查看进程</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">基础</span></span>
<span class="line"><span style="color:#24292e;">1、查看目录与文件：ls</span></span>
<span class="line"><span style="color:#24292e;">ls -la：显示当前目录下所有文件的详细信息</span></span>
<span class="line"><span style="color:#24292e;">2、切换目录：cd</span></span>
<span class="line"><span style="color:#24292e;">cd /home 进入 ‘/ home’ 目录</span></span>
<span class="line"><span style="color:#24292e;">cd … 返回上一级目录</span></span>
<span class="line"><span style="color:#24292e;">cd …/… 返回上两级目录</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">3、显示当前目录：pwd</span></span>
<span class="line"><span style="color:#24292e;">pwd</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">4、创建空文件：touch</span></span>
<span class="line"><span style="color:#24292e;">touch desc.txt：在当前目录下创建文件desc.txt</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">5、创建目录：mkdir</span></span>
<span class="line"><span style="color:#24292e;">mkdir test：在当前目录下创建test目录</span></span>
<span class="line"><span style="color:#24292e;">mkdir -p /opt/test/img：在/opt/test目录下创建目录img，若无test目录，先创建test目录</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">6、查看文件内容：cat</span></span>
<span class="line"><span style="color:#24292e;">cat desc.txt：查看desc.txt的内容</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">7、分页查看文件内容：more</span></span>
<span class="line"><span style="color:#24292e;">more desc.txt：分页查看desc.txt的内容</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">8、查看文件尾内容：tail</span></span>
<span class="line"><span style="color:#24292e;">tail -100 desc.txt：查看desc.txt的最后100行内容</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">9、拷贝：cp</span></span>
<span class="line"><span style="color:#24292e;">cp desc.txt /mnt/：拷贝desc.txt到/mnt目录下</span></span>
<span class="line"><span style="color:#24292e;">cp -r test /mnt/：拷贝test目录到/mnt目录下</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">10、剪切或改名：</span></span>
<span class="line"><span style="color:#24292e;">mv desc.txt /mnt/：剪切文件desc.txt到目录/mnt下</span></span>
<span class="line"><span style="color:#24292e;">mv 原名 新名</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">11、删除：rm</span></span>
<span class="line"><span style="color:#24292e;">rm -rf test：删除test目录，-r递归删除，-f强制删除。危险操作，务必小心，切记！</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">12、搜索文件：find</span></span>
<span class="line"><span style="color:#24292e;">find /opt -name ‘*.txt’：在opt目录下查找以.txt结尾的文件</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">13、显示或配置网络设备：ifconfig</span></span>
<span class="line"><span style="color:#24292e;">ifconfig：显示网络设备情况</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">14、显示网络相关信息：netstat</span></span>
<span class="line"><span style="color:#24292e;">netstat -a：列出所有端口</span></span>
<span class="line"><span style="color:#24292e;">netstat -tunlp | grep 端口号：查看进程端口号</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">15、显示进程状态：ps</span></span>
<span class="line"><span style="color:#24292e;">ps -ef：显示当前所有进程</span></span>
<span class="line"><span style="color:#24292e;">ps-ef | grep java：显示当前所有java相关进程</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">16、查看目录使用情况：du</span></span>
<span class="line"><span style="color:#24292e;">du -h /opt/test：查看/opt/test目录的磁盘使用情况</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">17、查看磁盘空间使用情况：df</span></span>
<span class="line"><span style="color:#24292e;">df -h：查看磁盘空间使用情况</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">18、显示系统当前进程信息：top</span></span>
<span class="line"><span style="color:#24292e;">top：显示系统当前进程信息</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">19、杀死进程：kill</span></span>
<span class="line"><span style="color:#24292e;">kill -s 9 27810：杀死进程号为27810的进程，强制终止，系统资源无法回收</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">20、压缩和解压：tar</span></span>
<span class="line"><span style="color:#24292e;">tar -zcvf test.tar.gz ./test：打包test目录为test.tar.gz文件，-z表示用gzip压缩</span></span>
<span class="line"><span style="color:#24292e;">tar -zxvf test.tar.gz：解压test.tar.gz文件</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">21、改变文件或目录的拥有者和组：chown</span></span>
<span class="line"><span style="color:#24292e;">chown nginx:nginx desc.txt：变更文件desc.txt的拥有者为nginx，用户组为nginx</span></span>
<span class="line"><span style="color:#24292e;">chown -R nginx:nginx test：变更test及目录下所有文件的拥有者为nginx，用户组为nginx</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">22、改变文件或目录的访问权限：chmod</span></span>
<span class="line"><span style="color:#24292e;">chmod u+x test.sh：权限范围：u(拥有者)g(郡组)o(其它用户)， 权限代号：r(读权限/4)w(写权限/2)x(执行权限/1)#给文件拥有者增加test.sh的执行权限</span></span>
<span class="line"><span style="color:#24292e;">chmod u+x -R test：给文件拥有者增加test目录及其下所有文件的执行权限</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">23、文本编辑：vim</span></span>
<span class="line"><span style="color:#24292e;">vim三种模式：命令模式，插入模式，编辑模式。使用ESC或i或：来切换模式。</span></span>
<span class="line"><span style="color:#24292e;">命令模式下:q退出 :q!强制退出 :wq!保存退出 :set number显示行号 /java在文档中查找java yy复制 p粘贴</span></span>
<span class="line"><span style="color:#24292e;">vim desc.txt：编辑desc.txt文件</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">24、关机或重启：shutdown</span></span>
<span class="line"><span style="color:#24292e;">shutdown -h now：立刻关机</span></span>
<span class="line"><span style="color:#24292e;">shutdown -r -t 60：60秒后重启</span></span>
<span class="line"><span style="color:#24292e;">shutdown -r now：重启(1)</span></span>
<span class="line"><span style="color:#24292e;">reboot：重启(2)</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">25、帮助命令：man</span></span>
<span class="line"><span style="color:#24292e;">man ls：查看ls命令的帮助文档</span></span>
<span class="line"><span style="color:#24292e;">help</span></span></code></pre></div>`,23),o=[l];function t(c,i,r,y,d,h){return n(),a("div",null,o)}const m=s(p,[["render",t]]);export{u as __pageData,m as default};
