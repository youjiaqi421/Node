/*
 * @Author: youjiaqi 2430284055@qq.com
 * @Date: 2022-07-21 09:22:28
 * @LastEditors: youjiaqi 2430284055@qq.com
 * @LastEditTime: 2022-07-21 15:47:42
 * @FilePath: /Node/01-模块的读写/fs.js
 * @Description:
 */
const fs = require('fs')

/*  readFile
 *  参数1:文件路径
 *  参数2:输出文字格式
 *  参数3:callback()=>void 可以拿到错误和成功的信息
*/  //111

fs.readFile('./文本/read.txt','UTF-8',(error,data)=>{
    console.log(data)
})

/*  writeFile
 *  参数1:文件路径
 *  参数2:写入数据
 *  参数3:callback()=>void 可以拿到错误和成功的信息
*/ 
fs.writeFile('./文本/write.txt','youjiaqi',()=>{
    console.log('111')
})