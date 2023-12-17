# markdown 语法

## 介绍 markdown

Markdown 是一种轻量级标记语言（类似 HTML），它允许人们使用易读易写的纯文本格式编写文档。Markdown 由 John Gruber 于 2004 年创建，如今已成为世界上最受欢迎的标记语言之一。 Markdown 文件的后缀名便是“.md”

markdown [在线编辑器](https://markdown.com.cn/editor/)

## 标题

```text
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

## 列表

```text
* 无序列表1
* 无序列表2
* 无序列表3
```

```text
1. 有序列表
2. 有序列表
3. 有序列表
```

## 引用

```text
> 引用文本
```

例如：
> 子曰：岁寒，然后知松柏之后凋也

## 代码块

```text
 反引号表示
 ```代码 ```
```

```javascript
import * as THREE from "three";
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
```

## 链接

```text
[链接名称](链接地址)
```

比如：
[百度](https://www.baidu.com/)

## 图片

```text
![图片名称](图片地址)

```

比如：
![图片](../public/img/sky.jpg)

## 表格

```text
| 表头1 | 表头2 | 表头3 |
| :--: | :--: | :--: |

| 表格内容1 | 表格内容2 | 表格内容3 |
| :--: | :--: | :--: |
| 表格内容4 | 表格内容5 | 表格内容6 |

```

比如：
| 表头1 | 表头2 | 表头3 |
| :--: | :--: | :--: |

| 表格内容1 | 表格内容2 | 表格内容3 |
| :--: | :--: | :--: |
| 表格内容4 | 表格内容5 | 表格内容6 |

## 粗体和斜体

```text
**粗体**
*斜体*
```

比如：
**粗体**
*斜体*

## 表情

```text
:smile:
```

比如：
:smile:

## 任务列表

```text
- [x] 已完成任务
- [ ] 未完成任务
```

比如：

- [x] 已完成任务
- [ ] 未完成任务

## 特殊标记

```text
`特殊样式`
```

比如：
`特殊样式`

## 分割线

```text
---
```

比如：

---
