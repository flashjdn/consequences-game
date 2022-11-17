const WebSocket = require("ws");
const prompt = require("prompt-sync")({ sigint: true });

webSocket = new WebSocket("ws://51.141.52.52:1234");

// Connection opened
webSocket.addEventListener("open", (event) => {
  webSocket.send("Hello Server!");
});

webSocket.onmessage = async (event) => {
  console.log(event.data.message);
  await helo(event);
};

function helo(event) {
  const question = prompt(event.data.message);
  webSocket.send(JSON.stringify({ Answer: question }));
}

webSocket.addEventListener("open", (event) => {
  let name = prompt("Enter your name please!  ");
  let room = prompt("and the room your tryna get into?  ");
  webSocket.send(JSON.stringify({ Name: name, Room: room }));
});


