var http = require('http');
var querystring = require('querystring');
var exec = require('child_process').exec;
http.createServer(function(req,res){
	var result = '';
	req.setEncoding('utf8');
	req.on('data',function(data){
		result += data;
});
	req.on('end',function(){
		console.log('execing.....');
		var payload;
		result = querystring.parse(result);
		if(req.method==='POST'){
			payload = JSON.parse(result.payload);
			var url = payload.repository.url;
			var strs = new Array();
			strs = url.split('/');
			var dir = strs[strs.length-1];
			console.log('dir:'+dir);
			console.log('url:'+url);
			console.log('strs:'+strs);
			exec('cd /root/'+dir+';git pull '+url+' master',function(error, stdout, stderr){
				console.log('stdout: ' + stdout);
		    console.log('stderr: ' + stderr);
		    if (error !== null) {
		      console.log('exec error: ' + error);
		    }
			});
		}
	})
}).listen(3001,function(){
        console.log('listening port 3001');
});
