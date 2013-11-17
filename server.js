var http = require('http');
var exec = require('child_process').exec;
http.createServer(function(req,res){
	var result = '';
	res.setEncoding('utf8');
	res.on('data',function(data){
		result += data;
	})
	res.on('end',function(){
		console.log(result);
	})
}).listen(3001,function(){
	console.log('node server listening on port 3001');
});
