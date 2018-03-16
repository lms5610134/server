const express = require('express');
const app = express();
// const config = require('config-lite')(__dirname)
const path = require('path');

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

// 启动服务
app.listen(80, () => {
	console.log(`server has started on port 80`)
});
