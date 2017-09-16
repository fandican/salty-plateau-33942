var express = require('express');
var fetch = require('node-fetch');
var app = express();
var records;
var cipID;
var recordBook;
class CIPRecords{
    constructor(data){
        this.grads_total = data.get("grads_total");
        this.grads_men = data.get("grads_men");
        this.grads_women = data.get("grads_women");
        this.grads_native = data.get("grads_native");
        this.grads_native_men = data.get("grads_native_men");
        this.grads_native_women = data.get("grads_native_women");
        this.grads_asian = data.get("grads_asian");
        this.grads_asian_men = data.get("grads_asian_men");
        this.grads_asian_women = data.get("grads_asian_women");
        this.grads_black = data.get("grads_black");
        this.grads_black_men = data.get("grads_black_men");
        this.grads_black_women = data.get("grads_black_women");
        this.grads_hispanic = data.get("grads_hispanic");
        this.grads_hispanic_men = data.get("grads_hispanic_men");
        this.grads_hispanic_women = data.get("grads_hispanic_women");
        this.grads_hawaiian = data.get("grads_hawaiian");
        this.grads_hawaiian_men = data.get("grads_hawaiian_men");
        this.grads_hawaiian_women = data.get("grads_hawaiian_women");
        this.grads_white = data.get("grads_white");
        this.grads_white_men = data.get("grads_white_men");
        this.grads_white_women = data.get("grads_white_women");
        this.grads_multi = data.get("grads_multi");
        this.grads_multi_men = data.get("grads_multi_men");
        this.grads_multi_women = data.get("grads_multi_women");
        this.grads_unknown = data.get("grads_unknown");
        this.grads_unknown_men = data.get("grads_unknown_men");
        this.grads_unknown_women = data.get("grads_unknown_women");
        this.grads_nonresident = data.get("grads_nonresident");
        this.grads_nonresident_men = data.get("grads_nonresident_men");
        this.grads_nonresident_women = data.get("grads_nonresident_women");
        this.year = data.get("year");
        this.grads_rank = data.get("grads_rank");
        this.cip = data.get("cip");
        this.name = data.get("name");
    }

}

class CIPRecordBook{
    constructor(headers){
        this.book = new Map();
        this.recordHeaders = headers;
        this.newkey = 0;
    }
    add(ciprecord){
        this.book.set(this.newkey,ciprecord);
        this.newkey += 1;
    }
    update(index,ciprecord){
        if(this.book.has(index))
            this.book.set(index,ciprecord);
    }
    remove(index){
        if(this.book.has(index))
            this.book.delete(index)
    }
    getCIPRecord(index){
        return this.book.get(index)
    }
}

/*
fetch('https://api.datausa.io/api/?show=cip&sumlevel=all')
    .then(function(res){
        return res.json();
    }).then(function(json){
    records = json;
    fetch('https://api.datausa.io/attrs/cip/')
        .then(function(res){
            return res.json();
        }).then(function(json){
        cipID = json;
        let nameIndex = cipID.headers.indexOf('name');
        let idIndex = cipID.headers.indexOf('id');
        //console.log(`nameIndex = ${nameIndex} idIndex = ${idIndex}`);
        let idToName = new Map();
		for(var i of cipID.data){
			//console.log(i[1]);
			//console.log(`Name: ${i[nameIndex]}  ID: ${i[idIndex]}`);
			idToName.set(i[idIndex],i[nameIndex]);
		}
        let cipHeader = records['headers'];
		var recBook = new CIPRecordBook(cipHeader);
		for(var i of records['data']){
			let cipRecordInfo = new Map();
			for(var j in i){
				cipRecordInfo.set(cipHeader[j],i[j]);
				if(cipHeader[j] === 'cip'){
					//console.log(i[j]);
					cipRecordInfo.set('name',idToName.get(i[j]));
				}
			}
			//console.log(cipRecordInfo);
			recBook.add(new CIPRecords(cipRecordInfo));
			//console.log(recordBook);
		}
		//console.log(recordBook);
        console.log('Done');
        return recBook;
    }).then(function(recBook){
    	recordBook = recBook;
	});

});
*/
app.set('port', (process.env.PORT | 5000));


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/test/:inputStuff', function (req, res) {
  res.send(req.params.inputStuff);
});

app.get('/records',function(req,res){
	res.send(records);
});
app.get('/cipID',function(req,res){
    res.send(cipID);
});
app.get('/recordbook',function(req,res){
	console.log(recordBook);
	res.send(recordBook);
})