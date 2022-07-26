/*
 * @Author: youjiaqi421 2430284055@qq.com
 * @Date: 2022-07-25 21:58:10
 * @LastEditors: youjiaqi421 2430284055@qq.com
 * @LastEditTime: 2022-07-25 22:01:20
 * @FilePath: /Node/node/05-http/http.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Http = require('http')


Http.createServer((req,res)=>{
    res.writeHead(200)
    res.end('hello')
}).listen(3000)