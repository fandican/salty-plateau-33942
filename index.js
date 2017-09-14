var express = require('express');
var fetch = require('node-fetch');
var app = express();

app.set('port', (process.env.PORT || 5000));


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

app.get('/', function (req, res) {
  res.send('Hello World!')
});
app.get('/test/:inputStuff', function (req, res) {
  res.send(req.params.inputStuff)
});
app.get('/results',function(req,res){
	var results = fetch('https://api.datausa.io/api/?show=geo&sumlevel=nation&year=latest)')
	.then(function(res){
		return res;
	})
	res.send(results)
});

app.listen(5000, function () {
  console.log('Example app listening on port 5000!')
});