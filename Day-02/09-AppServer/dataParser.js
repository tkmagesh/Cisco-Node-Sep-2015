var url = require('url');
var qs = require('querystring');

module.exports = function(req, res, next){
    req.url = url.parse(req.url, true);
    req.field = function(attrName){
        return req.url.query[attrName] || req.body[attrName];
    };
    if (req.method === 'POST'){
        var reqData = '';
        req.on('data', function(chunk){
            reqData += chunk;
        });
        req.on('end', function(){
            var data = qs.parse(reqData);
            req.body = data;
            next();
        });
    } else {
        next();
    }
}
