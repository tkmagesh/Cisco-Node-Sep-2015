var _middlewares = [];

var app = {};

app.use = function(middleware){
    _middlewares.push(middleware);
};

app.run = function(){
    return function(req, res){
        function exec(req, res, middlewares){
            var first = middlewares[0],
                remaining = middlewares.slice(1),
                next = function(){
                    exec(req, res, remaining);
                };
            if (first){
                first( req, res, next);
            }
        }
        exec(req, res, _middlewares);
    }
}

module.exports = app;
