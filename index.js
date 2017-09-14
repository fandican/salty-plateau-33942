var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

app.get('/', function (req, res) {
  res.send('Hello World!')
});
app.get('/test/:text', function(req,res){
	res.send(`You entered ${req.params.text}`)
};

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});