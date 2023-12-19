# vscdoe 权威指南

## 1. 简史

2015 年，第一个预览版本

2016 年，发布了 1.0 版本

2017 年 11 月，用户达到 260 万

2019 年，发布 remote development 插件，支持在 vscode 中进行远程开发

## 2. 核心组件

electron

Monaco editor：基于浏览器的代码编辑器

typescript

language server protocol：提供对各种语言的支持，如 javascript，typescript，css，html，json 等

debug adapter protocol: 开发工具与调试工具的通信

xterm.js: 集成终端

## 设置

我们可以通过不同的设置来打造属于自己的 vscode，无论是用户界面还是编辑器功能或者是其他配置，在 vscode 中都可以被设置。

### 两种不同范围的设置

    用户设置，会应用到全局范围的设置
    工作区设置（workspace settings），设置保存在相应的工作区。工作区会覆盖用户设置

## 用户界面

编辑器，

状态栏，

活动栏，

菜单栏，

工具栏，

侧边栏、

状态栏

活动栏
