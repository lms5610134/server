const express = require('express')
const app = express()
const compression = require('compression')
const history = require('connect-history-api-fallback');
const path = require('path')
// const winston = require('winston');

// // 系统访问日志
// const logger = winston.createLogger({
//     level: 'info',
//     format: winston.format.json(),
//     transports: [
//         new winston.transports.File(config.errorLog),
//         new winston.transports.File(config.combinedLog)
//     ]
// });
app.use(compression());
// 将所有请求重定向到index.html
app.use(history());

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'dist')));


// 启动服务
app.listen(8085, () => {
    console.log(`server has started on port 8085`)
})