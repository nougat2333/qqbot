# qqbot

> 基于 go-cqhttp 的 Node.js 机器人

## 使用说明

- 在 https://github.com/Mrs4s/go-cqhttp/releases 下载可执行文件, 放到 go-cqhttp 目录中, 并赋予执行权限

- 安装 Node.js 环境 (建议 10.0 以上版本): 在根目录执行 `npm install` 安装依赖

### 开发环境

- 运行 `go-cqhttp/下载的文件`, 根据提示填写 QQ 号和密码等信息, 然后再次运行

- 在根目录执行 `npm run dev`, 然后查看 https://docs.go-cqhttp.org 文档进行开发

### 生产环境 (Linux)

- 安装 screen 工具: 后台运行 `go-cqhttp/下载的文件` (screen 命令用法自行搜索)

- 安装 pm2 工具: 在根目录执行 `npm start`

- 代码更新后, 不停机重启: 在根目录执行 `pm2 reload qqbot`

> 因为 go-cqhttp 登录需要交互操作, pm2 不支持, 所以我这里用 screen 跑 go-cqhttp, 你也可以用其它方法后台运行

## 开发说明

### 监听消息 listen(data => {})

将根据 src/config.js 的 `handlerMap` 配置来触发 src/hander/\*.js

### 发送消息 send(action, params)

文档 https://docs.go-cqhttp.org/api

### 定时任务 schedule()

将根据 src/config.js 的 `scheduleMap` 配置来触发 src/schedule/\*.js

## 示例截图

![舔狗日记](https://user-images.githubusercontent.com/8413791/105276494-7d6a8e00-5bdc-11eb-8212-26b1943e9742.png)
