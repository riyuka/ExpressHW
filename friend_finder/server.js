var mysql = require("mysql");
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var path = require("path");

app.use(express.static("app/public"));

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "friend_finder_db"
});

app.get('/questions', function(req, res){
    connection.query('SELECT * FROM questions', function (error, results, fields) {
      if (error) throw error;
      res.json(results);
    });

  });

  app.get('/new', function(req, res){
	res.sendFile(path.join(__dirname, "app/public/new.html"));
});

app.post('/create', function(req, res){
	var query = connection.query(
	  "INSERT INTO questions SET ?",
	  req.body, 
	  function(err, response) {
	    res.redirect('/result');
	  }
	);
})

app.get('/result', function(req, res){
	res.sendFile(path.join(__dirname, "app/public/result.html"));
});

app.listen(3000, function(){
	console.log('listening on 3000');
});