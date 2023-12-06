# git相关

## git 设置代理

git 超时需要魔法，设置
git config --global http.proxy 127.0.0.1:7890
git config --global https.proxy 127.0.0.1:7890

稍后取消
git config --global --unset http.proxy
git config --global --unset https.proxy

注意配置里
base: '/blog/',
