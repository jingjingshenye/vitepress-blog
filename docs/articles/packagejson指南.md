# package.json 指南

## 是什么

package.json  是一个 JSON 格式的文件，位于 Node.js 项目的根目录下，用于定义项目的各种信息，如项目名称、版本、描述、作者、依赖、脚本等。
创建一个  package.json  文件很简单，只需要在项目根目录下执行  npm init  命令，并按照提示进行操作即可。如果你希望快速生成一个默认的  package.json  文件，可以使用  npm init -y  命令。

## 主要字段

- name：定义了项目的名称。它必须是小写的，可以包含字母、数字、下划线、连字符，不能包含空格。
- version：定义了项目的版本号，通常遵循   语义化版本   的规则。
- description：描述了项目的简单信息。
- main：指定了项目的入口文件。
- scripts：定义了一些脚本命令，可以使用  npm run  命令执行。

## 依赖字段

- dependencies：定义了当前项目依赖的外部模块。
- devDependencies：定义了当前项目依赖的外部模块，这些模块仅在开发时使用。
- peerDependencies：定义了当前项目依赖的外部模块，这些模块在开发和生产时均使用。
- optionalDependencies：定义了当前项目依赖的外部模块，这些模块仅在开发时使用，但不会作为依赖项安装。dependencies：列出了项目在生产环境中需要的依赖。

## 其他字段

- bin：定义了项目可执行文件的路径。定义在全局安装时可执行的命令，例如构建脚手架

所有有 node_modules/.bin / 目录下的命令，都可以用 npm run [命令] 的格式运行。

- module: 指定 es 模块入口文件
- browser：定义了浏览器环境下使用的入口文件。
- types：定义了项目的类型声明文件。
- engines：定义了项目的运行环境。
- config：定义了项目的配置项。
- repository：指定了项目的仓库地址。
- keywords：定义了项目的关键字。
- author：定义了项目的作者。
- man: man 命令是 Linux 中的帮助指令,在 package.json 通过 man 属性可以指定 man 命令查找的文档地址
- license：定义了项目的许可证。
- bugs：定义了项目的 bug 地址。
- homepage：定义了项目的主页地址。
- files：定义了项目需要发布的文件。keywords：定义了一些与项目相关的关键字，有助于其他开发者在搜索时找到你的项目。
- private：如果设置为 true，则阻止你无意中发布你的私有仓库。

## 其他

- 项目的  .gitignore  文件，用于定义需要忽略的文件。
- 项目的  .npmignore  文件，用于定义需要忽略的文件。
- 项目的  .npmrc  文件，用于定义 npm 全局配置。
- 项目的  .editorconfig  文件，用于定义编辑器的配置。
- 项目的  .eslintrc  文件，用于定义代码风格 repository：指定了项目的代码仓库地址。
- 项目的  .eslintignore  文件，用于定义需要忽略的代码风格。
- 项目的  .babelrc  文件，用于定义 Babel 的配置。
- 项目的  .browserslistrc  文件，用于定义浏览器兼容性配置。
- 项目的  .prettierrc  文件，用于定义代码格式化配置。
