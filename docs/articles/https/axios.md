# axios 说明书

## 基本使用

所有用法

```js
import axios from 'axios';

axios(config) // 直接传入配置
axios(url[, config]) // 传入url和配置
axios[method](url[, option]) // 直接调用请求方式方法，传入url和配置
axios[method](url[, data[, option]]) // 直接调用请求方式方法，传入data、url和配置
axios.request(option) // 调用 request 方法

const axiosInstance = axios.create(config)
// axiosInstance 也具有以上 axios 的能力

axios.all([axiosInstance1, axiosInstance2]).then(axios.spread(response1, response2))
// 调用 all 和传入 spread 回调
```

1. axios(config):调用自身，通用/最本质的发任意类型请求的方法

```js
axios({
  //请求类型
  method: "post",
  //URL
  url: "http://localhost:3000/posts/2",
  //设置请求体(即传输的数据)
  data: {
    title: "candy",
    author: "i like",
  },
}).then((response) => {
  console.log(response);
});
```

2. axios.request(config)：调用属性的方法发送请求,等同于 axios(config）

```js
axios
  .request({
    //请求类型
    method: "post",
    //URL
    url: "http://localhost:3000/posts/2",
    //设置请求体(即传输的数据)
    data: {
      title: "candy",
      author: "i like",
    },
  })
  .then((response) => {
    console.log(response);
  });
```

## axios 为什么创建实例

直接使用导入的 axios，使用的是默认的请求配置数据，比如 timeout， content-type，Authorization，token 等

对于多样化的请求配置，需要创建新的 axios 实力。

```js
//一般创建axios实例时，传入一些默认配置
const instance = axios.create({
  baseURL: "https://some-domain.com/api/",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
//instance 实例和 axios对象功能基本差不多
//使用axios的实例对象instance，方法的返回值是一个Promise对象（then方法可以拿到异步请求的结果）
instance({
  //请求类型
  method: "GET",
  //URL
  url: "/getJoke",
  //设置请求体(即传输的数据)
  params: {
    title: "candy",
    author: "i like",
  },
}).then((response) => {
  console.log(response);
});
```

## axios 拦截器

1. 请求拦截器：axios.interceptors.request.use(成功处理函数，失败处理函数)

```txt
1.可能是config中有一些信息是不符合服务器的要求
2.希望每次发送网络请求，在界面可以显示有一个请求的图标，就是那个转呀转的圆圈
3.一些网络请求必须要有特殊信息，例如登录（需要有token）
```

2. 响应拦截器：axios.interceptors.response.use(成功处理函数，失败处理函数)

```txt
1.对响应的数据进行格式处理
```

## axios 取消请求

```js
// 方式一
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('xxxx', {
  cancelToken: source.token
})
// 取消请求 (请求原因是可选的)
source.cancel('主动取消请求');

// 方式二
const CancelToken = axios.CancelToken;
let cancel;

axios.get('xxxx', {
  cancelToken: new CancelToken(function executor(c) {
    cancel = c;
  })
});
cancel('主动取消请求');
```
## 封装请求

```js
// 封装请求
import axios from 'axios'
import { ElMessage } from 'element-plus'
// 请求
const http = axios.create({
    baseURL: "请求地址",
    timeout: 6000
})
// 请求拦截
http.interceptors.request.use(config => {
    //请求头设置
    let token = localStorage.getItem('token') || ''
    config.headers.Authorization = token
    return config
}, err => {
    console.log(err);
})
// 响应拦截
http.interceptors.response.use(arr => {
    // 对响应码的处理
    switch (arr.data.meta.status) {
        case 200:
            ElMessage({
                message: arr.data.meta.msg,
                type: 'success',
            })
            break;
        case 201:
            ElMessage({
                message: arr.data.meta.msg,
                type: 'success',
            })
            break;
        case 204:
            ElMessage({
                message: arr.data.meta.msg,
                type: 'success',
            })
            break;
        case 400:
            ElMessage({
                message: arr.data.meta.msg,
                type: 'warning',
            })
            break;
        case 401:
            ElMessage({
                message: arr.data.meta.msg,
                type: 'warning',
            })
            break;
        case 403:
            ElMessage({
                message: arr.data.meta.msg,
                type: 'warning',
            })
            break;
        case 404:
            ElMessage({
                message: arr.data.meta.msg,
                type: 'warning',
            })
            break;
        case 422:
            ElMessage({
                message: arr.data.meta.msg,
                type: 'warning',
            })
            break;
        case 500:
            ElMessage({
                message: arr.data.meta.msg,
                type: 'error',
            })
            break;
    }
    return arr.data.data
}, err => {
    console.log(err);
})
// 返出
export default http
​
```
