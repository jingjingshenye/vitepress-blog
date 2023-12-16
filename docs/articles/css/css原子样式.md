## 常用scss原子样式

```scss
ul { list-style: none; }
* { margin: 0; padding: 0; box-sizing: border-box; }

@for $i from 10 through 60 {
  .fs-#{$i} { font-size: $i * 1rpx; }
  .pl-#{$i} { padding-left: $i * 1rpx; }
  .pt-#{$i} { padding-top: $i * 1rpx; }
  .pr-#{$i} { padding-right: $i * 1rpx; }
  .pb-#{$i} { padding-bottom: $i * 1rpx; }
  .px-#{$i} { padding-left: $i * 1rpx; padding-right: $i * 1rpx; }
  .py-#{$i} { padding-top: $i * 1rpx; padding-bottom: $i * 1rpx; }
  .p-#{$i} { padding: $i * 1rpx; }
  .ml-#{$i} { margin-left: $i * 1rpx; }
  .mt-#{$i} { margin-top: $i * 1rpx; }
  .mr-#{$i} { margin-right: $i * 1rpx; }
  .mb-#{$i} { margin-bottom: $i * 1rpx; }
  .mx-#{$i} { margin-left: $i * 1rpx; margin-right: $i * 1rpx; }
  .my-#{$i} { margin-top: $i * 1rpx; margin-bottom: $i * 1rpx; }
  .m-#{$i} { margin: $i * 1rpx; }
}

$colors: #000, #333, #666, #999, #ccc, #ddd, #eee, #fff, #1E90FF, #00BFFF	;
$colorName: '000', '333', '666', '999', 'ccc', 'ddd', 'eee', 'fff', '0ff', 'bff';

@for $i from 1 through length($colors) {
  $color: nth($colors, $i);
  $name: nth($colorName, $i);
  .color-#{$name} { color: $color; }
  .bg-#{$name} { background-color: $color;}
  .bc-#{$name} { border-color: $color !important;}
}

.flex { display: flex; }
.flex-1 { flex: 1; }
.flex-2 { flex: 2; }
.flex-3 { flex: 3; }
.flex-col { flex-direction: column; }
.flex-row-start { justify-content: flex-start; }
.flex-row-center { justify-content: center; }
.flex-row-end { justify-content: flex-end; }
.flex-row-between { justify-content: space-between; }
.flex-col-start { align-items: flex-start; }
.flex-col-center { align-items: center; }
.flex-col-end { align-items: flex-end; }
.flex-col-baseline { align-items: baseline; }

.p-relative { position: relative; }
.p-absolute { position: absolute; }
.p-fixed { position: fixed; }
.l-0 { left: 0; }
.t-0 { top: 0; }
.r-0 { right:0; }
.b-0 { bottom: 0; }
.w-100 { width: 100%; }
.w-100i { width: 100% !important; }
.h-100 { height: 100%; }
.h-100i { height: 100% !important; }
.vh-100 { height: 100vh; }
.fw-bold { font-weight: bold; }

.mx-auto { margin-left: auto; margin-right: auto; }

.bb-1 { border-bottom: 1px solid; }
.bt-1 { border-top: 1px solid; }
.scroll-y { overflow-y: auto; }
.scroll-x { overflow-x: auto; }

.z-1 { z-index: 1; }
.z-2 { z-index: 2; }
.z-3 { z-index: 3; }
```