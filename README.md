# wechat_web_devtools_linux
wechat web devtools for linux

![wx-dev-tools v-0.17.170800](https://img.shields.io/badge/wx_dev_tools-0.17.170900-green.svg)
![nw.js v-0.19.5](https://img.shields.io/badge/nw.js-v0.19.5-blue.svg)

**Linux微信web开发者工具** 可在linux环境下运行的微信开发者工具

- 2017/04/06 更新: 同步至 0.15.152900
- 2017/05/09 更新: 同步至 0.17.170800
- 2017/05/10 更新: 同步至 0.17.170900



## 安装
```console
 git clone git@github.com:jmeviler/wechat_web_devtools_linux.git
 cd wechat_web_devtools_linux & ./nw
```


### 需要小程序开发

1. 安装wine
```console
  sudo apt-get install wine
```

2. wine 运行小程序编译器
  ```console
  cd .config/微信web开发者工具/WeappVendor
  wine wcsc.exe wcc.exe
```
