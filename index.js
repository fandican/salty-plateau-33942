var express = require('express');
var fetch = require('node-fetch');
var app = express();
var info;
app.set('port', (process.env.PORT || 5000));


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
  fetch('https://api.github.com/users/github')
	  .then(function(res){
	  	info = res.json();
	  })
});

app.get('/', function (req, res) {
  res.send('Hello World!')
});
app.get('/test/:inputStuff', function (req, res) {
  res.send(req.params.inputStuff)
});
app.get('/results',function(req,res){
	var results2 = fetch('https://api.github.com/users/github')
		.then(function(ress){
			return ress.json();
		}).then(function(json){
			info = json;
			res.send(json);
		})
});
app.get('/resultsJSON',function(req,res){
	res.send(info)
})
/*
app.listen(5000, function () {
  console.log('Example app listening on port 5000!')
});
*/