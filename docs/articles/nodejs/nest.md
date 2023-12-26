# nestjs

## 快速生成项目

快速生成 项目

```bash
# 全局安装脚手架
npm i -g @nestjs/cli
# 启用 Typescript 严格模式创建项目
nest new project01 --strict

```

## 安装 rest client

vscode 插件

## 创建一个模块和路由

```bash
# 进入项目目录
cd project01

# 创建一个模块
nest g module users

# 创建一个控制器
nest g controller users

# 创建一个服务
nest g service users

# 创建一个守卫
nest g guard users

# 创建一个中间件
nest g middleware users
```

## 修饰器

Get、Post、Request、Query、Body、Param、Headers 修饰器

## TypeORM

```base
# 安装
npm install --save @nestjs/typeorm typeorm mysql2
```

## 文件说明

app.controller.spec.ts：这是一个用作测试的文件

app.controller.ts：这是一个控制器文件

app.module.ts: 这是根模块文件

app.service.ts：这是一个提供功能服务的文件

main.ts：这是 nest 项目的入口文件

## 部署

项目根目录创建 Dockerfile

```dockerfile
# 使用Node.js作为基础镜像
FROM node:20-alpine3.18

# 设置工作目录
WORKDIR /app

# 复制package.json和package-lock.json文件到工作目录
COPY package*.json ./

# npm 源，选用国内镜像源以提高下载速度
RUN npm config set registry https://registry.npm.taobao.org/

# 安装依赖
RUN npm install

# 复制应用程序的源代码到工作目录
COPY . .

# 构建应用程序
RUN npm run build

# 暴露应用程序的端口
EXPOSE 3000

# 启动应用程序
CMD ["npm", "run", "start:prod"]
```

## 原理

- 通过装饰器给 class 或者对象添加元数据，然后初始化的时候取出这些元数据，进行依赖的分析，然后创建对应的实例对象就可以了
- 实现的核心就是 Reflect metadata 的 api
- 通过装饰器给 class 或者对象添加 metadata，并且开启 ts 的 emitDecoratorMetadata 来自动添加类型相关的 metadata，然后运行的时候通过这些元数据来实现依赖的扫描，对象的创建等等功能。

### 首先

```ts
@modules({
controllers: [],
providers: []
})

// 收集了所有的 controllers，和 providers 装在一个对象上（其实是借用了 reflect meatadataAPI）我可以理解为：const factory = {controllers: [],providers: []}
```

### 然后 controllers 里的所有类，的参数都来自 providers，所以我们在 controllers 里每一个类的时候，是不是只要找到对应 providers 里的参数，就自动实例化了？provider 我们是不是在 factory 里已经有

这里的问题就剩下说，如何之后每个 controller 依赖了哪些 provider，这个又是 reflect meatadataAPI 帮我们解决了，所以这就是整体的思路
