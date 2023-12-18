# vscode 相关

## 快捷键

### 打开窗口

- 打开命令面板：`ctrl + shift + p`
- 打开设置：`ctrl +,`
- 打开终端：`ctrl + 、`

### 代码操作

- 代码向左缩进：`ctrl + [`
- 代码向右缩进：`ctrl + ]`
- 复制或剪切当前行/当前选中内容: `Ctrl+C 、 Ctrl+V`
- 代码格式化: `Shift+Alt+F`
- 向上或向下移动一行: `Alt+Up` 或 `Alt+Down`
- 向上或向下复制一行: `Shift+Alt+Up` 或 `Shift+Alt+Down`
- 在当前行下方插入一行: `Ctrl+Enter`
- 在当前行上方插入一行: `Ctrl+Shift+Enter`
- 多行编辑(列编辑): `Alt+Shift+鼠标左键` 或 `Ctrl+Alt+Down/Up`
- 注释选中内容: `Ctrl+/`

### 光标移动

- 定位到某一行: `ctrl+G`,Ctrl+g 输入行数可快速的调到指定的行数上。
- 光标移动到上一行: `Up`
- 光标移动到下一行: `Down`
- 光标移动到上一个单词: `Ctrl+Left`
- 光标移动到下一个单词: `Ctrl+Right`
- 扩展/缩小选取范围： `Shift+Alt+Right` 和 `Shift+Alt+Left`
- 光标移动到行首: `Home`
- 光标移动到行尾: `End`
- 选择从光标到行尾的内容: `Shift+End`
- 选择从光标到行首的内容： `Shift+Home`
- 下一个匹配的也被选中: `Ctrl+D`
- 撤销上一步操作: `Ctrl+Z`
- 手动保存: `Ctrl+S`

### 显示

- 全屏显示(再次按则恢复): `F11`
- 放大或缩小(以编辑器左上角为基准): `Ctrl +/-`
- 侧边栏显示或隐藏： `Ctrl+B`

## vite 项目别名，项目里要可以识别

jsconfig 里添加如下配置：

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

## 设置里自带远程同步

登录同一个账号，可以同步插件，设置等

## 本地导入配置文件

设置->配置文件->导入设置->选择配置文件

## 常用插件

|         插件名         |     插件作用      |
| :--------------------: | :---------------: |
|    auto-rename-tag     | 自动命名改名标签  |
|     auto-close-tag     |   自动关闭标签    |
|      code-runner       |    代码运行器     |
|        css-peek        | 快速预览 css 属性 |
|        bookmark        |     快速书签      |
|        chinese         |    中文输入法     |
|        gitlens         |   git 增强插件    |
|      glsl-canvas       |   快速预览 glsl   |
| highlight-matching-tag |   高亮匹配标签    |
|     indent-rainbow     |     缩进颜色      |
|   path-intellisense    |     路径补全      |
|    prettier-vscode     |    格式化代码     |
|    project-manager     |     项目管理      |
|     image preview      |     图片预览      |
|      live server       |    本地服务器     |
|         vetur          |   vue 开发插件    |
|      vscode-icons      |     图标插件      |
|    vscode-svgviewer    |     svg 预览      |
|      vscode-zipfs      |     解压插件      |
|         notes          |     本地笔记      |
|   path intellisense    |     路径补全      |
|        prettier        |    格式化代码     |
|         volar          |   vue 开发工具    |
|     tongyi lingma      |     通义灵码      |
|     vue3 snippets      |   vue3 代码片段   |
|        draw.io         |    流程图绘制     |
