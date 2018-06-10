let express = require('express');
let PORT = process.env.PORT || 3001;
let app = express();

let http = require('http').Server(app);
let io = require('socket.io')(http);

io.on('connection', () => {
  console.log('A User Connected');
})

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
