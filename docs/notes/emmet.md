# emmet 用法

大多数编辑器也提供 emmet 插件来更快的编写 HTML 和 css 代码。emmet 的语法规则比较简单易理解可以极大的提高编码速度，基本上是前端开发人员必备的一项技能了

## 1. `!`可以快速生成 html 文件

## 2. div#main + tab 快速生成:

```html
<div id="main"></div>
```

## 3. div.wrapper + tab 快速生成:

```html
<div class="warpper"></div>
```

## 4. 子节点（>）、上级节点（^)、兄弟结点（+）

div>p>span + tab 快速生成:

```html
<div>
  <p><span></span></p>
</div>
```

## 重复(\*)

h2 \* 5 + tab

```html
<h2></h2>
<h2></h2>
<h2></h2>
<h2></h2>
<h2></h2>
```

## 属性([attr])

div[name="value"] + tab

```html
<div name="value"></div>
```

## 属性值([attr=value])

div[name="value"] + tab

```html
<div name="value"></div>
```

## 属性和值([attr="value"])

div[name="value"] + tab

```html
<div name="value"></div>
```

## 编号

ul>li.item$\*5 + tab

```html
<ul>
  <li class="item1"></li>
  <li class="item2"></li>
  <li class="item3"></li>
  <li class="item4"></li>
  <li class="item5"></li>
</ul>
```

## 分组(())

当写的 emmet 太长，可以用括号分组

ul>(li.item$\*5)+tab

```html
<ul>
  <li class="item1"></li>
  <li class="item2"></li>
  <li class="item3"></li>
  <li class="item4"></li>
  <li class="item5"></li>
</ul>
```
