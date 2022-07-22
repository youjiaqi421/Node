/*
 * @Author: youjiaqi421 2430284055@qq.com
 * @Date: 2022-07-22 16:13:36
 * @LastEditors: youjiaqi421 2430284055@qq.com
 * @LastEditTime: 2022-07-22 16:30:42
 * @FilePath: /Node/node/node/demo/lib.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = function(playerAction){

    let computerAction ; 

    const random =(Math.random() * 3).toFixed(3)


    if(random < 1 ){
        computerAction = 'rock'
     
    }else if(random > 2){
        computerAction = 'scissor'
    } else {
        computerAction = 'paper'
    }


    if(computerAction === playerAction){
        console.log('平局')
        return 0
    } else if(
        (computerAction === 'rock' && playerAction === 'paper') ||
        (computerAction === 'paper' && playerAction === 'scissor') ||
        (computerAction === 'scissor' &&  playerAction === 'rock')
    ){
        console.log('你赢了')
        return 1
    }else { 
         return -1
        console.log('你输了')
    }
}