var http = require('http');
var exec = require('child_process').exec;
http.createServer(function(req,res){
	req.setEncoding('utf8');
	req.on('data',function(data){
		if(req.method==='post'){
			exec('cd /root/MyNodeBlog;git pull https://github.com/lcya86/MyNodeBlog.git master',function(error, stdout, stderr){
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