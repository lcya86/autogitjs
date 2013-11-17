var http = require('http');
http.createServer(function(req,res){
	req.setEncoding('utf8');
	req.on('data',function(data){
		console.log(req.method);
		console.log(data);
	});
	req.on('error',function(err){
		console.error(err);
	});
	req.on('end',function(){
		console.log("++++++++++++++++++");
	});
}).listen(3001,function(){
	console.log('listening port 3001');
});
