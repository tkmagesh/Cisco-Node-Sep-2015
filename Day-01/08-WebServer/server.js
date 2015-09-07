var http = require('http');

var server = http.createServer(function(req, res){
    console.log('A new connection is established for ', req.url);
    res.write('<h1>Welcome to the node world</h1>');
    res.end();
});

server.listen(8080);
console.log('server listeninig on port 8080');
