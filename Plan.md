# PLAN

- Set global variable 'gameStarted' and set to false ✅

**Inside the 'open' event listener**
- Send a generic message to start the game ✅

**Inside the 'message' event listener**
- Create 'response' variable ✅
- Parse the event object and store it in 'response' var ✅
- create var 'answer' ✅

- if event 'Message' contains Error at the start then ✅
  - alert the user with the event 'Message' ✅
- else ✅
  - log the event 'Message' ✅

- if gameStarted false ✅
  - create var 'name' and 'room' ✅
  - prompt the user for their name and store it in 'name' var ✅
  - prompt the user for the room code and store it in 'room' var ✅
  - stringify and send {name, room} to server ✅
  - set gameStarted to true ✅
  - exit function ✅

- if event contains 'Question' property ✅
  - prompt user with the 'Question' storing their input in 'answer' var ✅
  - send the answer to the server ✅

- if event contains 'Results' ✅
  - loop through the results and log each index ✅

**Future goals**
- Allow players to restart the game
- Hanldes this message that occurs when the players presses cancel on the prompt
`ERROR: No 'answer' was sent with your message. Please answer your question.`