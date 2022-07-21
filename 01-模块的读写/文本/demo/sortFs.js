/*
 * @Author: youjiaqi 2430284055@qq.com
 * @Date: 2022-07-21 10:09:51
 * @LastEditors: youjiaqi 2430284055@qq.com
 * @LastEditTime: 2022-07-21 10:52:52
 * @FilePath: /Node/01-模块的读写/文本/demo/sortFs.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const fs = require('fs')

fs.readFile('./data.txt','UTf-8',(error,data)=>{
    if(error){
        return console.log('读取文件数据失败')
    }

    const dataParams = data.split(' ')
    const newData = []
    dataParams.forEach(element => {
        newData.push(element.split('='))
    })
    newData.sort((a,b)=>a[1]-b[1])
    newData.forEach((element,index) => {
        newData[index] = element.join(':')
    })
    console.log(newData)
    const str = newData.join('\r\n')
    fs.writeFile('./sortData.txt',str,()=>{
      console.log('1')
    })
})
