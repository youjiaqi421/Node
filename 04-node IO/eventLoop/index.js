/*
 * @Author: youjiaqi 2430284055@qq.com
 * @Date: 2022-07-25 11:00:37
 * @LastEditors: youjiaqi 2430284055@qq.com
 * @LastEditTime: 2022-07-25 11:10:28
 * @FilePath: /node/04-node IO/eventLoop/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const eventloop = {
    queue:[],
    loop(){
        while(this.queue.length){
             // push 数组末尾添加
             // pop 弹出数组末尾
             // unshift 添加数组前端
             // shift 弹出数组 
            let callback = this.queue.shift() 
            callback()
        }
        setTimeout(this.loop.bind(this),50)
    },
    add(callback){
        this.queue.push(callback)
    }
}

eventloop.loop()


setTimeout(()=>{
   eventloop.add(function(){console.log('1')})
},500)


setTimeout(()=>{
  eventloop.add(function(){console.log('2')})
},800)