var request = require('request');
var url ='http://requestb.in/n6zzqan7'
request(url, function (error, response, body) {
  if (!error) {
    console.log(body);
  }
});