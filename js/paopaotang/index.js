// // 泡泡堂游戏 1 v 1 
// function Player(name){
//     this.name = name;
//     this.enemy = null;
// }

// // enemy 实例 instanceof => new Player
// // 赢与输
// // win
// // lose

// // 输与赢的方法
// Player.prototype.win = function(){
//     console.log(`${this.name} win!`);
// }
// Player.prototype.lose = function(){
//     console.log(`${this.name} lose!`);
// }

// // 判断输赢的方法
// Player.prototype.die = function(){
//     this.lose();
//     this.enemy.win();
// }

// // 创建两个角色
// const player1 = new Player('皮蛋');
// const player2 = new Player('小乖');

// // 上线了，互成敌人，匹配到一局去了
// player1.enemy = player2;
// player2.enemy = player1;
// player2.die();



// 泡泡堂游戏 4 v 4 

function Player(name,teamColor){
    this.name = name;
    this.enemies = [];
    this.partners = [];
    this.state = 'live';
    this.teamColor = teamColor;   //队伍的颜色
    this.enemy = null;
}

// 输与赢的方法
Player.prototype.win = function(){
    console.log(`${this.name} win!`);
}
Player.prototype.lose = function(){
    console.log(`${this.name} lose!`);
}

// 判断输赢的方法
Player.prototype.die = function(){
    this.lose();
    // 假设游戏结束
    let all_dead = true;
    for(let i = 0; i < this.partners.length; i++){
        if(this.partners[i].state === 'live'){
            all_dead = false;
            break;
        }
    }

    if(all_dead){
        this.lose();
        for(let i = 0; i < this.partners.length; i++){
            this.partners[i].lose();
        }
        for(let i = 0; i < this.enemies.length; i++){
            this.enemies[i].win();
        }
    }
    // 判断是否游戏结束？  state live | dead
    // for循环  this.parters  4个 dead   游戏结束 我方输，对方赢
}

// 流程 太多了  有一定的规律  red一个队 blue一个队
// 工厂模式
const players = [];

function playerFactory(name,teamColor){
    // 实例化，分配队伍
    var newPlayer = new Player(name,teamColor);
    for(var i = 0; i < players.length; i++){
        const player = players[i];
        if(player.teamColor === newPlayer.color){
            player.partners.push(newPlayer);
            newPlayer.partners.push(player);
        } else{
            player.enemies.push(newPlayer);
            newPlayer.enemies.push(player);
        }
    }
    players.push(newPlayer);
    return newPlayer;
}

const player1 = playerFactory('皮蛋','red');
const player2 = playerFactory('小乖','red');
const player3 = playerFactory('宝宝','red');
const player4 = playerFactory('小强','red');
const player5 = playerFactory('黑妞','blue');
const player6 = playerFactory('葱头','blue');
const player7 = playerFactory('胖墩','blue');
const player8 = playerFactory('海盗','blue');

player1.die();
player2.die();
player3.die();
player4.die();