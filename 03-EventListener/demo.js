/*
 * @Author: youjiaqi 2430284055@qq.com
 * @Date: 2022-07-25 09:47:43
 * @LastEditors: youjiaqi 2430284055@qq.com
 * @LastEditTime: 2022-07-25 09:55:06
 * @FilePath: /node/03-EventListener/demo.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const EventsEmitter = require('events').EventEmitter;



class Geektime extends EventsEmitter {
    constructor(){
         super()
         setInterval(()=>{
            this.emit('newlesson',{price:Math.random()  *  100})
         },3000)
    }
}

const geekTime = new Geektime;



geekTime.addListener('newlesson',()=>{
    console.log('this.ok')
})