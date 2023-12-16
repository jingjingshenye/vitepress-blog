
# Tailwind CSS 常用原子类
Tailwind CSS 提供了大量的实用程序类，这些类名都是使用缩写的方式，以更简洁地表述其含义。以下是一些常用的 Tailwind CSS 缩写及其对应的意义：


## 1. 布局



- w: width

- max-w: max-width

- h: height

- max-h: max-height

- m: margin

- mt: margin-top

- mb: margin-bottom

- ml: margin-left

- mr: margin-right

- p: padding

- pt: padding-top

- pb: padding-bottom

- pl: padding-left

- pr: padding-right



## 2. 文本样式


- font: font-family

- text: text-color, text-alignment, text-transform, font-size

- leading：line-height

- tracking: letter-spacing

- uppercase: text-transform: uppercase

- lowercase: text-transform: lowercase



## 3. 背景和边框



- bg: background-color

- border: border-style, border-width, border-color

- rounded: border-radius

- shadow: box-shadow



## 4. 弹性盒子布局



- flex: display: flex

- justify: justify-content

- items: align-items

- self: align-self

- order: order

- flex-grow: flex-grow

- flex-shrink: flex-shrink



## 5. 网格布局



- grid-cols: grid-template-columns

- grid-rows: grid-template-rows

- gap: grid-gap


## 6. 响应式设计



- sm, md, lg, xl: 分别对应移动设备、平板、桌面、大屏幕

- hover: 鼠标悬停时的样式

- focus: 元素获取焦点时的样式



## 7. 边框和分隔符

- divide: 分隔符 (border-color, border-style, border-width)

- divide-x: 水平分隔符 (border-color, border-style, border-width)

- divide-y: 垂直分隔符 (border-color, border-style, border-width)

- border-collapse: 设置边框是否合并



## 8. Flexbox 尺寸和排列



- flex-wrap: 等同于 flex-flow 中的 wrap

- flex-row, flex-row-reverse, flex-col, flex-col-reverse: flex-direction 的简写

- flex-1...flex-12: 设置 flex-grow、flex-shrink 和 flex-basis 属性

- gap-x: 水平包裹在对象（如 flex 子元素）之间的间距。

- gap-y: 垂直包裹在对象（如 flex 子元素）之间的间距。

- space-x: 水平排列中对象（如 flex 子元素）之间的空间

- space-y: 垂直排列中对象（如 flex 子元素）之间的空间



## 9. Z-index



- z-{n}: 设置 z-index 的值，其中 n 为正整数



## 10. 动画



- animate-{name}: 向元素添加动画（使用 @keyframes 中定义的动画名称）



## 11. 列表样式

- list-style-{type}: 设置列表项的类型 (disc, decimal, decimal-leading-zero)

## 12. 转换和过渡

- transform: 让元素旋转、缩放、倾斜、平移等

- transition-{property}: 用于添加一个过度效果 {property} 的值是必需的。



## 13. 颜色



- text-{color}: 设置文本颜色

- bg-{color}: 设置背景颜色

- border-{color}: 设置边框颜色



## 14. 字体权重



- font-thin: 字体细

- font-light: 字体轻

- font-normal: 字体正常

- font-medium: 字体中等

- font-semibold: 字体半粗

- font-bold: 字体粗

- font-extrabold: 字体特粗

- font-black: 字体黑



## 15. SVG



- fill-{color}: 设置 SVG 填充颜色

- stroke-{color}: 设置 SVG 描边颜色



## 16. 显示和隐藏



- hidden: 隐藏元素（display: none）

- invisible: 隐藏元素，但仍保留该元素的布局和尺寸

- visible: 显示元素



## 17. 清除浮动



- clear-{direction}: 清除某个方向的浮动效果



## 18. 容器



- container: 将内容限制在最大宽度的容器内部

- mx-auto: 实现水平居中（margin-left 和 margin-right 设置为 auto）

以上是一些常用的 Tailwind CSS 缩写及其对应的意义，覆盖了基础的布局、文本、背景、边框、弹性盒子布局、网格布局和响应式设计，有助于更快速地开发出具有良好用户体验的 Web 应用程序。