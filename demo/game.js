/*
 * @Author: youjiaqi421 2430284055@qq.com
 * @Date: 2022-07-22 10:44:12
 * @LastEditors: youjiaqi421 2430284055@qq.com
 * @LastEditTime: 2022-07-22 16:35:49
 * @FilePath: /Node/node/node/demo/game.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


const game = require('./lib')

// const playerAction = process.argv[process.argv.length - 1];

let count = 0 
process.stdin.on('data',e => {
    const playerAction = e.toString().trim();
    const result = game(playerAction)
    if(result === -1){count++}
    if(result ===  1){count--}
    console.log(count)
    if(count === 3){
        console.log('你牛逼');
        process.exit()
    }
})


// lib(playerAction)


