# node 全栈

## 技术选型

nodejs + vue3

## 表设计

## 建表建库

```sql
CREATE DATABASE `node_vue3` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `node_vue3`;

-- 管理员表
CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL COMMENT '用户名',
  `password` varchar(255) NOT NULL COMMENT '密码',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `update_time` datetime NOT NULL COMMENT '更新时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COMMENT='管理员表';

```

vscode 安装插件 mysql，执行 sql

## Node 项目初始化

```bash
npm init -y
```

## 安装 express

```bash
npm i express
```

## 项目结构

````bash
├── app.js
├── bin
│   └── www
├── config
│   ├── config.default.js
│   └── config.prod.js
├── controllers
│   └── admin.js
├── index.js
├── lib
│   └── db.js
├── models

## 项目启动

```bash
node app.js
````

## 项目配置

```js
const config = require("./config/config.default");
const db = require("./lib/db");
const express = require("express");
const app = express();
const port = process.env.PORT || config.port;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
```

## 项目路由

```js
const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin");
router.get("/admin/login", adminController.login);
router.post("/admin/login", adminController.login);
router.get("/admin/logout", adminController.logout);
module.exports = router;
```

## 项目控制器

```js
const db = require("../lib/db");
const { SuccessModel, ErrorModel } = require("../model/resModel");
class AdminController {
  async login(req, res) {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.json(new ErrorModel("用户名或密码不能为空"));
    } else {
      const result = await db.query("select * from admin where username =?", [
        username,
      ]);
      if (result.length === 0) {
        return res.json(new ErrorModel("用户名或密码错误"));
      } else {
        const admin = result[0];
        if (admin.password !== password) {
          return res.json(new ErrorModel("用户名或密码错误"));
        } else {
          req.session.admin = {
            id: admin.id,
            username: admin.username,
          };
          return res.json(new SuccessModel());
        }
      }
    }
  }
  async logout(req, res) {
    req.session.admin = null;
    return res.json(new SuccessModel());
  }
}
module.exports = new AdminController();
```

## 项目模型

```js
class SuccessModel {
  constructor(data = {}) {
    this.code = 200;
    this.msg = "success";
    this.data = data;
  }
}
class ErrorModel {
  constructor(msg) {
    this.code = 500;
    this.msg = msg;
    this.data = {};
  }
}
```

## 项目数据库

```js
const mysql = require("mysql");
const config = require("../config/config.default");
const pool = mysql.createPool(config.mysql);
module.exports = {
  query(sql, values) {
    return new Promise((resolve, reject) => {
      pool.getConnection((err, connection) => {
        if (err) {
          reject(err);
        } else {
          connection.query(sql, values, (err, results) => {
            connection.release();
            if (err) {
              reject(err);
            } else {
              resolve(results);
            }
          });
        }
      });
    });
  },
};
```
