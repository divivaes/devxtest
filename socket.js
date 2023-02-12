const { db } = require('./config/db');
const http = require('http');
const { config } = require("dotenv");

config();

const app = require('./app');
const { json } = require('express');
const server = http.createServer(app);
const PORT = process.env.PORT || 2000;

const io = require('socket.io')(server);

server.listen(PORT, () => {
  console.log("Magic is happening on port " + PORT);
});

io.on('connection', (socket) => {
  console.debug('User entered to code editor =>', socket.conn.id);
  
  socket.on("disconnect", () => {
    console.log("User disconnected from code editor => " + socket.conn.id);
  });
 
  socket.on('saveProgress', ({ username, solution }) => {
    db.getConnection((err, connection) => {
      if (err) console.log(err);
      else {
        connection.query("INSERT INTO tasks SET?", {
          username,
          solution,
          attempts: 1
        }, (err, result) => {
          if (err) console.log(err);
          else {
            console.log("Progress saved");
          }
          connection.release();
        });
      }
    });
  });

  socket.on('updateProgress', ({ id, solution, attempts }) => {
    db.getConnection((err, connection) => {
      if (err) console.log(err);
      else {
        connection.query(`UPDATE tasks SET solution = "${solution}", attempts = ${attempts} WHERE id = ${id} `, (err, result) => {
          if (err) console.log(err);
          else {
            console.log("Progress updated");
          }
          connection.release();
        });
      }
    });
  });
});