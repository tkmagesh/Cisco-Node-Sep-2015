var path = require('path');
var fs = require('fs');

var staticResourceExtns = [ '.html', '.css', '.js','.png','.ico','.txt','.json'];

function isStatic(resource){
    return staticResourceExtns.indexOf(path.extname(resource)) !== -1;
}

module.exports = function(req, res, next){
    if (isStatic(req.url.pathname)){
        var resourcePath = path.join(__dirname, req.url.pathname);
        if (fs.existsSync(resourcePath)){
            fs.createReadStream(resourcePath).pipe(res);
        } else {
            res.statusCode = 404;
            res.end();
        }

    } else {
        next()
    }
}
