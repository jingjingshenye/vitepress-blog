# 前端项目调试

vite 设置

```js
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
            target:,
        }
    }
  }
})
```

## 开启 https

1. @vitejs/plugin-basic-ssl 插件
2. 自己生成证书

生成正式使用 mkcert 这个零配置的命令行工具

```bash
brew install mkcert
brew install nss
# nss 是可选的，如果不使用或者不需要测试 Firefox，那么可以不安装 nss

# 接着我们创建一个目录来存放证书，比如 ~/.cert：
mkdir -p ~/.cert

# 自动生成证书
mkcert -key-file ~/.cert/key.pem -cert-file ~/.cert/cert.pem "localhost"

# 让系统信任证书
mkcert -install
```

然后在 vite.config.js 中添加如下配置：

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHttpsServer } from '@vitejs/plugin-basic-ssl'

export default defineConfig(
    {
        plugins: [vue(), createHttpsServer()],
        server: {
            port: 3000,
            open: true,
            proxy: {
                '/api': {
                    target:,
                }
            }
        }
    }
)
```

## server.host

指定服务器应该监听哪个 IP 地址。 如果将此设置为 0.0.0.0 或者 true 将监听所有地址，包括局域网和公网地址。
