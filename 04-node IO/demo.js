/*
 * @Author: youjiaqi 2430284055@qq.com
 * @Date: 2022-07-25 10:08:38
 * @LastEditors: youjiaqi 2430284055@qq.com
 * @LastEditTime: 2022-07-25 10:26:56
 * @FilePath: /node/04-node IO/demo.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// const glob = require('glob')

const { glob } = require("glob")

// let result = null;

// result  =  glob.sync(__dirname + '/**/*')

// console.log(result)




let result = null 

glob(__dirname + '/**/*',(err,res)=>{
    result = res
    console.log('111')
})

console.log(1+1)