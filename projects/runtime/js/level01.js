var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:600,y:groundY},
                {type: 'sawblade',x:900,y:groundY},
                {type: 'box',x:900,y:groundY},
                {type: 'enemy',x:1200,y:groundY-110},
                {type: 'reward',x:1200,y:groundY-175}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        function createSawBlade(x,y) {
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
        var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
        myObstacle.x = x;
        myObstacle.y = y;
        game.addGameItem(myObstacle);
        var obstacleImage = draw.bitmap('img/sawblade.png');
       myObstacle.rotationalVelocity = -10
        myObstacle.addChild(obstacleImage);
        obstacleImage.x = -25;
        obstacleImage.y = -25;
        game.addGameItem(myObstacle);
         myObstacle.onPlayerCollision = function() {
                    game.changeIntegrity(-30);
                    myObstacle.fadeOut();
                };
        }
        
      
 
    
   function createBox(x,y) {
        var hitZoneSize = 50;
        var damageFromObstacle;
        var myObstacle = game.createObstacle(hitZoneSize, damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
        var obstacleImage = draw.bitmap('img/ball.jpg');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -46;
            obstacleImage.y = -50;
            game.addGameItem(myObstacle);
        myObstacle.onPlayerCollision = function() {
            game.changeIntegrity(-20);
            myObstacle.fadeOut();
            };
        }
        
        

    
        function createEnemy (x,y) {
          var enemy =  game.createGameItem('enemy',25);
          var redSquare = draw.rect(50,50,'red');
          redSquare.x = -25;
          redSquare.y = -25;
          enemy.addChild(redSquare);
          enemy.x = x;
          enemy.y = y;        
          enemy.velocityX = -1;
          enemy.rotationalVelocity = 10;
          game.addGameItem(enemy);
          enemy.onPlayerCollision = function() {
          game.changeIntegrity(-100);
          enemy.fadeOut();
          };
          enemy.onProjectileCollision = function() {
                game.increaseScore(50);
                enemy.fadeOut();
            };
        }
        
        function createReward(x,y) {
            var bonusItem = game.createGameItem('reward',50);
            var bonusItemImage = draw.bitmap('img/victory.png');
            bonusItemImage.x = -75;
            bonusItemImage.y = -115;
            bonusItem.addChild(bonusItemImage);
            bonusItem.x = x;
            bonusItem.y = y;
            game.addGameItem(bonusItem);
            bonusItem.velocityX = -2;
            bonusItem.onPlayerCollision = function(){
            game.changeIntegrity(100);
            game.increaseScore(10000);
            bonusItem.fadeOut();
            };
        
}
            for (var i = 0; i < levelData.gameItems.length; i++) {
            var gameItem = levelData.gameItems[i];
            
            if (gameItem.type === 'sawblade') {
                createSawBlade(gameItem.x,gameItem.y);
            } else if (gameItem.type === 'box') {
                createBox(gameItem.x,gameItem.y);
            } else if (gameItem.type === 'enemy') {
                createEnemy(gameItem.x,gameItem.y);
            } else if (gameItem.type === 'reward') {
                createReward(gameItem.x,gameItem.y);
            }
}

    };
};   
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}