var http = require('http');
var url = require('url');
var util = require('util');
var a;
function changeName(){
	a = 'close';
};

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
 
    // 解析 url 参数
    var params = url.parse(req.url, true).query;
	if(params.name == 'open')
	{
		a = params.name;
        res.write(a);
		setTimeout(changeName,10000);
		res.end();
	}
	else{
    res.write(a);
    res.end();
	}
 
}).listen(3000);

console.log('Server stated on ourspark.cn:3000; press Ctrl-C to terminate...')