# sass 总结

一种 css 预处理器，扩充 css 语法

1. 变量；
2. 嵌套；
3. mixin；
4. 继承；
5. import；
6. 计算；
7. 颜色函数；
8. Interpolation；
9. if 判断；
10. for 循环；
11. 列表循环；
12. while 循环；
13. function 自定义函数

## 变量

```scss
$color: #000;
$font-size: 16px;
$line-height: 1.5;
$border-radius: 3px;
$border-color: #ccc;
$border-style: solid;
$border-width: 1px;
```

## 嵌套

```scss
.box {
  .box-title {
    font-size: 16px;
    line-height: 1.5;
  }
  .box-content {
    font-size: 14px;
    line-height: 1.5;
  }
}
```

## mixin

```scss
@mixin box-shadow($color, $offset-x, $offset-y, $blur, $spread) {
  box-shadow: $color $offset-x $offset-y $blur $spread;
}

.box {
  @include box-shadow(#000, 0, 0, 10px, 0);
}
```

## 继承

```scss
.box-title {
  font-size: 16px;
  line-height: 1.5;
}
.box-content {
  font-size: 14px;
  line-height: 1.5;
}
.box {
  @extend.box-title;
  @extend.box-content;
}
```

## import

```scss
@import "reset";
@import "common";
@import "box";
```

## 计算

```scss
$width: 100px;

#box {
  width: $width + 10px;
}
```

## 颜色函数

hsl（色相，饱和度，明度）;

```scss
#box {
  background-color: hsl(5, 20%, 20%);
}
```

## Interpolation

把一个值插入到另一个值

```scss
$yanse: color;
body {
  #{$yanse}: red;
}
```

## if 判断

```scss
@mixin box-shadow($color, $offset-x, $offset-y, $blur, $spread) {
  @if $color {
    box-shadow: $color $offset-x $offset-y $blur $spread;
  }
}

.box {
  @include box-shadow(red, 0, 0, 10px, 0);
}
```

## for 循环

```scss
@for $i from 1 through 3 {
  .box-#{$i} {
    width: 200px * $i;
  }
}
```

## 列表循环

```scss
@each $item in 1, 2, 3 {
  .box-#{$item} {
  }
}
```

## while 循环

```scss
@while $i < 3 {
  .box-#{$i} {
    width: 200px * $i;
  }
  $i: $i + 1;
}
```

## function 自定义函数

```scss
@function add($a, $b) {
  @return $a + $b;
}

.box {
  width: add(100px, 10px);
}
```

## 参考

[sass 官网](https://sass-lang.com/)

[sass 语法](https://sass-lang.com/documentation/syntax)
