var game = new Phaser.Game(640, 360, Phaser.CANVAS, 'game', {preload: fnPreload, create: fnCreate, update: fnUpdate});

function fnPreload() {
  // On charge les assets du jeu ici
  console.log("Game is loading");

  var path = 'img/';

  game.load.image('buttonA', path + 'lineLight34.png');
  game.load.image('buttonB', path + 'lineLight35.png');
  game.load.image('buttonS', path + 'lineLight33.png');
  game.load.image('gamepad', path + 'lineLight02.png');
  // game.load.image('left', path + 'yellow_sliderLeft.png');
  // game.load.image('right', path + 'red_sliderRight.png');
  // game.load.image('up', path + 'blue_sliderUp.png');
  // game.load.image('down', path + 'grey_sliderDown.png');
}

var gamepad,
    buttonA,
    buttonB,
    buttonS,
    textScore,
    score = {
      label : 'Score : ',
      value : 0
    };


function fnCreate() {
  game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

  gamepad = game.add.button(100,game.height/2,'gamepad',butClick);
  gamepad.anchor.setTo(0.5, 0.5);
  buttonA = game.add.button(game.width -80,game.height/2 -40,'buttonA',butClick);
  buttonA.anchor.setTo(0.5, 0.5);
  buttonB = game.add.button(game.width-160,game.height/2 +40,'buttonB',butClick);
  buttonB.anchor.setTo(0.5, 0.5);
  buttonS = game.add.button(game.width/2,game.height/2,'buttonS',butClick);
  buttonS.anchor.setTo(0.5, 0.5);

  textScore = game.add.text(game.width/2, 50, score.label + score.value, {font: '64px Orbitron', fill: '#fff'} );
  textScore.anchor.setTo(.5,.5);


}

function fnUpdate() {

}

function butClick() {
  console.log("click");
  score.value ++;
  textScore.text = '' + score.label + score.value;
}
