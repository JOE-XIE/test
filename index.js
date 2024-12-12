const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');
const app = express();
const PORT = 3000;


// // 创建一个写入日志文件的流
// const logFile = fs.createWriteStream('/tmp/app.log', { flags: 'a' });
// const logStdout = process.stdout;

// // 重写 console.log 方法
// console.log = function () {
//   logFile.write(util.format.apply(null, arguments) + '\n');
//   logStdout.write(util.format.apply(null, arguments) + '\n');
// }

// function isValidFormat(str) {
//     // 定义正则表达式，匹配"aa-bb"形式的字符串
//     const regex = /^[^-]+-[^-]+$/;
//     return regex.test(str);
// }

// function isDashBBFormat(str) {
//     // 使用正则表达式检测是否以"-"开头，后面跟着任意字符串
//     const regex = /^-.+/;
//     return regex.test(str);
// }


// 中间件：禁止 Range 请求
// app.use((req, res, next) => {
//     const ver = req.query.ver;
//     if (req.headers.range && !ver) {
//       res.status(416).send('Range requests are not supported');
//     } else {
//       next();
//     }
//   });

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

// // 下载文件的路由
// app.get('/download/:filename', (req, res) => {
//     const filename = req.params.filename;
//     const file = path.join(__dirname, 'public', filename);

//     fs.stat(file, (err, stats) => {
//         if (err) {
//             console.error('Error finding file:', err);
//             return res.status(404).send('File not found');
//         }
//         let range = req.headers.range;
//         const fileSize = stats.size;
//         const MIN_RANGE_SIZE = Math.max(Math.round(fileSize * 0.001),5000);
//         // console.log(MIN_RANGE_SIZE);
//         console.log(range);
//         // if (range) {
//         //     range = range.replace(/bytes=/, "")
//         //     if (isValidFormat(range)) {
//         //         const [a, b] = range.split('-');
//         //         if (b - a < MIN_RANGE_SIZE) {  // 防止解析包尾
//         //             console.log('Range request received, but ignoring it3');
//         //             res.writeHead(416, {
//         //                 'Content-Range': `bytes */${fileSize}`,
//         //                 'Content-Type': 'text/plain'
//         //             });
//         //             return res.end(`Requested range not satisfiable: Range size must be at least ${MIN_RANGE_SIZE} bytes.`);
//         //         }
//         //     }
//         //     if (isDashBBFormat(range)) { // 防止解析包尾
//         //         console.log('Range request received, but ignoring it2');
//         //         res.writeHead(416, {
//         //             'Content-Range': `bytes */${fileSize}`,
//         //             'Content-Type': 'text/plain'
//         //         });
//         //         return res.end(`Requested range not satisfiable: Range size must be at least ${MIN_RANGE_SIZE} bytes.`);
//         //     }
//         // }

//         res.setHeader('Content-Disposition', `attachment;`);
//         // res.setHeader('Accept-Ranges', 'none');
//         res.setHeader('Content-Length', stats.size);
//         res.setHeader('Content-Type', 'application/vnd.android.package-archive');

//         res.sendFile(file, (err) => {
//             if (err) {
//                 console.error('Error sending file:', err);
//                 if (!res.headersSent) {
//                     return res.status(500).send('Error sending file');
//                 }
//             }
//         });
//     });
// });

// app.get('/tmp/:filename', (req, res) => {
//     const filename = req.params.filename;
//     const file = path.join(__dirname, '.', filename);

//     fs.stat(file, (err, stats) => {
//         if (err) {
//             console.error('Error finding file:', err);
//             return res.status(404).send('File not found');
//         }
//         res.sendFile(file, (err) => {
//             if (err) {
//                 console.error('Error sending file:', err);
//                 if (!res.headersSent) {
//                     return res.status(500).send('Error sending file');
//                 }
//             }
//         });
//     });
// });

// app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
