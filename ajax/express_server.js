// 定义简单的服务接收器.
const express_server = require('ajax/express_server');

const app = express_server();

// req 是对请求报文的封装
// res 是对响应报文的封装
app.get('/', (req, res) => {
    res.send("hello express.");
});

app.get('/server', (req, res) => {

    //设置响应头 设置允许跨域
    res.setHeader('Access-Control-Allow-Origin','*');

    //设置响应体.
    res.send("server 路径, 响应是- hello server.");
});

app.listen(8012, () => {
    console.log("服务已启动,8012端口监听中.....node")
})
