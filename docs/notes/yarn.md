# yarn 总结

## yarn 常用命令

```shell
yarn // yarn install
yarn add
yarn install
yarn config list

```

## pnpm 常用命令

```shell
pnpm add xxx
pnpm install xxx
pnpm install --save xxx
pnpm config list
```

## npm vs yarn vs pnpm

### npm v2

此时期主要是采用简单的递归依赖方法，最后形成高度嵌套的依赖树。然后就会造成如下问题：重复依赖嵌套地狱，空间资源浪费，安装速度过慢，文件路径过长等问题。大家都很熟悉，这里不再详细解释

### npm v3

v3 版本作了较大的更新，开始采取扁平化的依赖结构。这样的依赖结构可以很好的解决重复依赖的嵌套地狱问题，但是却出现扁平化依赖算法耗时长这样新的问题
官方仓库 issue 的解释：npm@3 wants to be faster · Issue #8826 · npm/npm (github.com)

### npm v5

为了解决上面出现的扁平化依赖算法耗时长问题，npm 引入 package-lock.json 机制，package-lock.json 的作用是锁定项目的依赖结构，保证依赖的稳定性，有兴趣的朋友可以直接查看官方文档

### yarn

官网：Home page | Yarn (yarnpkg.com)
首先需要提出的是 yarn 出现时间为 2016 年，此时 npm 处于 v3 时期，其实当时 yarn 解决的问题基本就是 npm v5 解决的问题，包括使用 yarn.lock 等机制，锁定版本依赖，实现并发网络请求，最大化网络资源利用率，其次还有利用缓存机制，实现了离线模式
其实后面很多 npm 都是在学习 yarn 的机制，上面的机制目前 npm 基本也都实现了，就目前而言 npm 和 yarn 其实并没有差异很大，具体使用 npm 还是 yarn 可以看个人需求

### pnpm

中文官网：pnpm - 速度快、节省磁盘空间的软件包管理器 | pnpm 中文文档 | pnpm 中文网
pnpm 内部使用基于内容寻址的文件系统来存储磁盘上所有的文件，这样可以做到不会出现重复安装，在项目中需要使用到依赖的时候，pnpm 只会安装一次，之后再次使用都会直接硬链接指向该依赖，极大节省磁盘空间，并且加快安装速度

也许有人说 yarn 默认也是扁平化安装方式，但是 yarn 有独特的 PnP 安装方式，可以直接去掉 node_modules，将依赖包内容写在磁盘，节省了 node 文件 I/O 的开销，这样也能提升安装速度，但是 yarn PnP 和 pnpm 机制是不同的，且总体来说安装速度 pnpm 是要快于 yarn PnP 的，详情请看下面官方文档

最后就是 pnpm 是默认支持 monorepo 多项目管理的，在日渐复杂的前端多项目开发中尤其适用，也就说我们不再需要 lerna 来管理多包项目，可以使用 pnpm + Turborepo 作为我们的项目管理环境

还有就是 pnpm 还能管理 nodejs 版本
