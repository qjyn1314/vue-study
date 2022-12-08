// 执行 npm i express   简单的服务.
// 执行 npm i nodemon  文件更改的同时重启服务.
// 执行  nodemon express_server.js 启动简单的服务,并且在文件更改的同时重启服务.

// 定义简单的服务接收器.
const express_server = require('express');
// 启动命令: nodemon express_server.js
const app = express_server();
// 端口号
app.listen(8012, () => {
    console.log("服务已启动,8012端口监听中.....node")
})

// req 是对请求报文的封装
// res 是对响应报文的封装
app.get('/', (req, res) => {
    res.send("hello express.");
});

// get请求
app.get('/server', (req, res) => {

    //设置响应头 设置允许跨域
    res.setHeader('Access-Control-Allow-Origin','*');

    //设置响应体.
    res.send("server 路径, get响应是- hello server.");
});
//支持所有请求
app.all('/server', (req, res) => {

    //设置响应头 设置允许跨域
    res.setHeader('Access-Control-Allow-Origin','*');
    // 设置响应头的header信息可以是预定义的和自定义的请求头
    res.setHeader('Access-Control-Allow-Headers','*');

    const data = {
        name:"张三"
    }
    let dataStr = JSON.stringify(data);
    //设置响应体.
    // res.send("server 路径, post响应是- hello server.");
    res.send(dataStr);
});


