var GaraWorldVersion = "v1.1"

var webSocket;
var isConnected;

// webSocket.readyState
// 0 = the connection has not yet been established
// 1 = the connection is established and communication is possible
// 2 = the connection is going through the closing handshake
// 3 = the connection has been closed or could not be opened
// console.log(webSocket.readyState);


function startGame() {
  webSocket = new WebSocket("ws://192.168.1.192:15445/");

  webSocket.onopen = function(e){
        webSocket.send(GaraWorldVersion);

    }

  document.addEventListener('keydown', keyIsDown);
  document.addEventListener('keyup', keyIsUp);

  $(".state").html("Connected ...<br>Watch the playScreen please");

}

function stopGame() {

    webSocket.close(1000);

    document.removeEventListener('keydown', keyIsDown);
    document.removeEventListener('keyup', keyIsUp);

    $(".state").html("Disconnected");

}

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
