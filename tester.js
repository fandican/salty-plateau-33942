var fetch = require('node-fetch');

fetch("http://localhost:5000/record/",
{
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "POST",
    body: JSON.stringify({'hai':'adfad'})
})
.then(function(res){ console.log('success') });