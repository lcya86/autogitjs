var http = require('http');
http.createServer(function(req,res){
	res.setEncoding('utf8');
	res.on('data',function(data){
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
