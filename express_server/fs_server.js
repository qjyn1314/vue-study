// 引入 fs 模块
const fs = require('fs');
// 读取文件
// fs.readFile('../ajax/Ajax-02-原生.html', (err, data) => {
//     if (err) throw err;
//
//     console.log(data.toString());
//
// });

// 使用 Promise进行封装

const p = new Promise((resolve, reject) => {
    fs.readFile('../ajax/Ajax-02-原生.htmls', (err, data) => {
        //失败的时候调用  reject
        if (err) reject(err);
        // 成功的时候调用 resolve
        resolve(data);
    });
});

//当 Promise 对象 状态为成功时, 调用的 then方法的第一个函数
//当 Promise 对象 状态为失败时, 调用的 then方法的第二个函数
// 如果同时调用了 resolve函数和 reject函数 则仅仅执行 then方法的第一个函数
p.then((value) => {
    console.log("成功的值是-")
    console.log(value.toString())
}, (reason) => {
    console.error('失败的值是-' + reason)
})













