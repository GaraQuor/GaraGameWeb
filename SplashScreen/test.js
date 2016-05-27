var GaraWorldVersion = "v1.1"

var webSocket = new WebSocket("ws://192.168.1.192:15445/");

webSocket.onopen = function(e){
      webSocket.send(GaraWorldVersion);
  }

document.addEventListener('keydown', keyIsDown);
document.addEventListener('keyup', keyIsUp);

function keyIsDown(e){

  var key = e.keyCode;

  switch (key) {
    case 81:
        if (!Left)
        {
          webSocket.send('0' + '1');
          console.log(key);
        }
        Left = true;
      break;
    case 68:
        if (!Right)
        {
          webSocket.send('0' + '2');
          console.log(key);
        }
        Right = true;
      break;
    case 32:
        if (!Space)
        {
          webSocket.send('0' + '5');
          console.log(key);
        }
        Space = true;
      break;

    case 77:
        if (!Take)
        {
          webSocket.send('0' + '6');
          console.log(key);
        }
        Take = true;
      break;

    default:

  }
}

var Left = false;
var Right = false;
var Space = false;
var Take = false;

function keyIsUp(e){

  var key = e.keyCode;

  switch (key) {
    case 81:
        if (Left)
        {
          webSocket.send('1' + '1');
          console.log(key);
        }
        Left = false;
      break;
    case 68:
        if (Right)
        {
          webSocket.send('1' + '2');
          console.log(key);
        }
        Right = false;
      break;
    case 32:
        if (Space)
        {
          webSocket.send('1' + '5');
          console.log(key);
        }
        Space = false;
      break;

    case 77:
        if (Take)
        {
          webSocket.send('1' + '6');
          console.log(key);
        }
        Take = false;
      break;

    default:

  }
}
