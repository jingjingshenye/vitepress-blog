# scss使用

## BEM

BEM 是一个分层系统，它把我们的网站分为三层，这三层正好对应着 BEM 三个英文单词的简写 block, element, modifier，分为为 块层、元素层、修饰符层

*  使用__两个下划线将块名称与元素名称分开
*  使用--两个破折号分隔元素名称及其修饰符
*  一切样式都是一个类，不能嵌套

## 嵌套

scss 允许在父级选择器下嵌套子选择器，这样层级更清晰

```scss
nav {
  ul {
    margin: 0;
    padding: 0;

    li {
      display: inline-block;
    }
  }

  a {
    color: #000;
    text-decoration: none;
  }
}
```

## 变量

scss 引入变量，用$符号， 可以提取存储颜色，字体，尺寸等，提供便捷的全局调整样式的方式

```scss
$primary-color: #ff0000;
$font-size: 16px;

body {
  color: $primary-color;
  font-size: $font-size;
}
```

## 混合器

（Mixins）：混合器允许定义一组样式规则，在需要时通过引用混合器生成样式。混合器可以接收参数，提供了代码复用的强大工具

```scss
@mixin border-radius($radius) {
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  border-radius: $radius;
}

.box {
  @include border-radius(5px);
  background-color: #f1f1f1;
}
```

## 继承

SCSS 支持样式的继承，可以通过@extend指令将一个选择器的样式继承到另一个选择器上，从而实现样式的复用。

```scss
.btn {
  padding: 10px 20px;
  font-size: 14px;
  background-color: #ff0000;
}

.btn-primary {
  @extend .btn;
  color: #fff;
}
```

## 运算和函数

SCSS 支持数学运算和逻辑运算，可以进行加减乘除等运算操作，还提供了许多内置函数和自定义函数，用于处理颜色、尺寸等样式属性。

```scss
$width: 200px;
$padding: 20px;
.box {
  width: $width + $padding;
  height: $width * 2;
  margin-bottom: $padding / 2;
}
```

函数

```scss
@function add($a, $b) {
  @return $a + $b;
}

.box {
  width: add(100px, 20px); // 使用自定义函数
}
```

## 逻辑运算

```scss
// 与（and）和或（or）：用于进行逻辑与和逻辑或操作
$has-border: true;
$is-active: false;
.btn {
  // 使用逻辑与运算符
  @if $has-border and $is-active {
    border: 1px solid #000;
  }
  // 使用逻辑或运算符
  @if $has-border or $is-active {
    background-color: #f00;
  }
}

// 非（not）：用于取反操作
$is-active: false;
.block {
  // 使用逻辑非运算符
  @if not $is-active {
    display: none;
  }
}

```

## 循环

```scss
// for
@for $i from 1 through 5 {
  .item-#{$i} {
    width: 20px * $i;
  }
}

// each
$colors: red, green, blue;

@each $color in $colors {
  .bg-#{$color} {
    background-color: $color;
  }
}

// while
$i: 1;

@while $i < 6 {
  .item-#{$i} {
    width: 20px * $i;
  }
  $i: $i + 1;
}
```

## 导入文件

SCSS 支持通过@import指令导入其他 SCSS 文件，可以将样式表拆分为多个模块化的文件，提高代码的组织性和可维护性。

```scss
// 导入样式文件
@import "reset";
@import "variables";
@import "typography";

// 定义全局样式
body {
  font-family: sans-serif;
}

// 导入组件样式
@import "button";
@import "navbar";
// ...
```

