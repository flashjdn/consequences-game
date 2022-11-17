const webSocket = new WebSocket("ws://51.141.52.52:1234")

// Connection opened
webSocket.addEventListener('open', (event) => {
  webSocket.send('Hello Server!');
});

webSocket.onmessage = (event) => {
  console.log(event.data);
}


