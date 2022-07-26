/*
 * @Author: youjiaqi 2430284055@qq.com
 * @Date: 2022-07-25 10:30:20
 * @LastEditors: youjiaqi 2430284055@qq.com
 * @LastEditTime: 2022-07-25 10:33:25
 * @FilePath: /node/04-node IO/IO的CallBack.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

 // 回调函数格式规范, error-first 格式



function  interView(callBack){
    setInterval(()=>{
        callBack('success')
        if(Math.random() < 0.8){
            callBack('success')
        }else {
            throw new Error('fail')
        }
    },5000)
}