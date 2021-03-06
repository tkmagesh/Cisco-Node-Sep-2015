var http = require('http');
var path = require('path');
var fs = require('fs');

var server = http.createServer(function(req, res){
    var resourcePath = path.join(__dirname, req.url);
    if (fs.existsSync(resourcePath)){
        fs.createReadStream(resourcePath).pipe(res);
    } else {
        res.statusCode = 404;
        res.end();
    }
});
server.listen(8080);
