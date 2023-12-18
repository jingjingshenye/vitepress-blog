# 开发自己的 cli

## 常用的库

- commander：命令行接口的完整解决方案，设置一些 node 命令，如 help、usage、version、parse 输入的参数
- ora：终端旋转器，loading 小圈圈。
- chalk：node 终端样式库，可以修改 console 的输出颜色。
  `安装 chalk 时一定要注意安装 4.x 版本(小包使用的是 4.0.0)，否则会因为版本过高，爆出错误。`
- inquirer: 用户与命令行之间的交互问答工具。
- rimraf：删除文件和文件夹。
- download-git-repo：git 代码下载库，存到本地

## 初始化

```bash
npm init -y
```

## packge.json 添加 bin 的命令

```json
{
  "name": "cli-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "bin": {
    "CLI": "./bin/cli"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

## 代码部分

/bin/cli

```js
#!/usr/bin/env node
//第一行其中#!/usr/bin/env node表示用node解析器执行本文件。

const program = require("commander");
const pkg = require("../package");
const chalk = require("chalk");
const download = require("download-git-repo");
const ora = require("ora");
const spinner = ora("Loading undead unicorns");

/**
 * version
 */
program.version(chalk.green(`${pkg.version}`));

/**
 * init 项目
 */
program
  .command("init <app-name>")
  .description(
    "generate a project from a remote template (legacy API, requires ./wk-init)"
  )
  .option("-c, --clone", "Use git clone when fetching remote template")
  .action((appName, opts, cmd) => {
    spinner.start("开始下载");
    download(
      "direct:https://github.com/vue-admin/vue-admin.git#main",
      appName,
      { clone: true },
      (err) => {
        if (err) {
          spinner.fail(chalk.green("下载失败 \n" + err));
          process.exit();
        }
        spinner.succeed(chalk.green(`下载成功`));
      }
    );
  });

program.parse(process.argv);
```

## 测试

```bash
// 添加软连接
npm link


CLI init <app-name>
```

发布到 npm

```bash
npm login
npm publish
```

## 参考

- [commander](https://www.npmjs.com/package/commander)
- [ora](https://www.npmjs.com/package/ora)
- [chalk](https://www.npmjs.com/package/chalk)
