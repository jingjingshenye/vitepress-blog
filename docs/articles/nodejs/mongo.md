# mododb

## 简介

mododb 是基于 mongodb 的 ORM 库，它提供了一系列的功能，使得开发者可以更加方便地使用 mongodb。

## 安装

mongoose 是链接 mongodb 数据库的工具

```bash
npm install mongoose
```

## 连接 mongodb

```javascript
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/test"); //test是数据库名称

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", function () {
  console.log("数据库连接成功");
});

db.on("disconnected", function () {
  console.log("数据库断开连接");
});

db.on("close", function () {
  console.log("数据库关闭");
});
```

## 定义模型

```javascript
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  age: Number,
  email: String,
  created: { type: Date, default: Date.now },
});

// 模型，对文档(document)的抽象
// 第一个参数是模型名称，第二个参数是模型的属性
const User = mongoose.model("User", userSchema);

const user = new User({
  name: "张三",
  age: 18,
  email:,
});

user.create({
    name: "李四",
    age: 20,
    email:,
},function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("创建成功");
  }
});
```

## 字段类型

```javascript
string;
number;
boolean;
date;
array;
buffer;
ObjectId; // 对象id，需要使用mongoose.schema.Types.ObjectId()方法
mixed; // 任意类型，需要使用mongoose.Schema.Types.Mixed()方法
Decimal128; // 128位精度的浮点数
```

## 常用方法

```javascript
// 保存
user.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("保存成功");
  }
});

// 查询
User.find();

User.findOne({ name: "张三" }, function (err, user) {
  if (err) {
    console.log(err);
  } else {
    console.log(user);
  }
});

// 删除
User.remove({ name: "张三" }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("删除成功");
  }
});

User.update({ name: "张三" }, { age: 20 }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("更新成功");
  }
});
```

## 模块化

```javascript
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  age: Number,
  email: String,
  created: { type: Date, default: Date.now },
});

// 导出模型
module.exports = mongoose.model("User", userSchema);

// 导入模型
const User = require("./user");

const user = new User({
  name: "张三",
  age: 18,
  email:,
});

user.create({
    name: "李四",
    age: 20,
    email:,
},function (err) {
  if (err) {
    console.log(err);
  }
});
```
