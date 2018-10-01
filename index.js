const express = require('express');
const path = require('path'); 

const app = express();

const socketIO = require('socket.io');
const io = socketIO();

const {generateMessage} = require('./utils/message');
const {generateLocationMessage} = require('./utils/message');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
 
app.io = io;



// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Put all API endpoints under '/api'
app.get('/api/passwords', (req, res) => {
  const count = 5;

  // Generate some passwords
  const passwords = Array.from(Array(count).keys()).map(i =>
    generatePassword(12, false)
  )

  // Return them as json
  res.json(passwords);

  console.log(`Sent ${count} passwords`);
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));

	io.on('connection', (socket) =>{
		console.log('New user connected') 

		socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));
			
		socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

		socket.on('createMessage', (message, callback) => {
			console.log('createMessage', message);
			io.emit('newMessage', generateMessage(message.from, message.text))
			callback('This is from the server.'); 
		})
	
		socket.on('createLocationMessage', (coords) => {
			io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
		});

		socket.on('disconnect', function () {
			console.log('Disconnected from server');
		});
	}); 

});




const port = process.env.PORT || 5000;
app.listen(port);

console.log(`Chat app listening on ${port}`);