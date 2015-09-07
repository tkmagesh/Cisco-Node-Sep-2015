var http = require('http');
var path = require('path');
var fs = require('fs');
var url = require('url');
var calculator = require('./calculator');
var qs = require('querystring');

//calculator?operation=add&n1=100&n2=300

var staticResourceExtns = [ '.html', '.css', '.js','.png','.ico','.txt','.json'];

function isStatic(resource){
    return staticResourceExtns.indexOf(path.extname(resource)) !== -1;
}

var server = http.createServer(function(req, res){
    req.url = url.parse(req.url, true);
    if (isStatic(req.url.pathname)){
        var resourcePath = path.join(__dirname, req.url.pathname);
        if (fs.existsSync(resourcePath)){
            fs.createReadStream(resourcePath).pipe(res);
        } else {
            res.statusCode = 404;
            res.end();
        }
    } else if (req.url.pathname === '/calculator' && req.method === 'GET'){
        console.log(req.url.query);
        var operation = req.url.query.operation,
            n1 = parseInt(req.url.query.n1, 10),
            n2 = parseInt(req.url.query.n2, 10);
        var result = calculator[operation](n1,n2);
        res.write(result.toString());
        res.end();
    } else if (req.url.pathname === '/calculator' && req.method === 'POST'){
        var reqData = '';
        req.on('data', function(chunk){
            reqData += chunk;
        });
        req.on('end', function(){
            var data = qs.parse(reqData);
            var operation = data.operation,
                n1 = parseInt(data.n1, 10),
                n2 = parseInt(data.n2, 10);
            var result = calculator[operation](n1,n2);
            res.write(result.toString());
            res.end();
        });
    } else {
        res.statusCode = 404;
        res.end();
    }
});
server.listen(8080);
