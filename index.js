const WebSocket = require("ws");
const prompt = require("prompt-sync")({ sigint: true });

// create new connection
var webSocket = new WebSocket("ws://51.141.52.52:1234");
var gameStarted = true;

// New game message
console.log(`
/============================/
| THE GAME IS ABOUT TO START |
/============================/\n`);

// Connection opened
webSocket.addEventListener("open", (event) => {
  webSocket.send("Hello Server!");
});

webSocket.onmessage = async (event) => {
  var response = await JSON.parse(event.data);
  var answer;

  // always print the event Message
  console.log(`----------\n${response.Message}`);

  // only run once to setup game at the beginning
  if (gameStarted) {
    let name = prompt('Enter your name: ');
    let room = prompt('Enter your room code: ');
    webSocket.send(JSON.stringify({"Name": name, "Room": room}));
    gameStarted = false;
    return;
  }

  // ask the question until there are no more questions
  if ('Question' in response) {
    answer = prompt(`${response.Question}: `);
    webSocket.send(JSON.stringify({"Answer": answer}));
  }
   
  // give us the result when it's ready
  if ('Results' in response) {
    for (result of response.Results) {
      console.log(`\n== Results ==\n${result}`);
    }

    // here temporarily, will ne to be moved once the user is allowed to start a new game
    webSocket.close();

    // because why not give us credit
    interfaceAuthors();
  }
};

function interfaceAuthors() {
  console.log(`\n
/========================/
| Game Interface Authors |
|------------------------|
| Fiona Kitchen          |
| Jordan Flash           |
| Alexander Rattray      |
| Carlos Alford          | 
/========================/\n`);
}