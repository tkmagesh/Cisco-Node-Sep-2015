var uuid = require('node-uuid');
var sessionStore  = {}
var _timeout = 0;
module.exports = function(timeout){
    _timeout = timeout;
    setInterval(function(){
        for(var sessionId in sessionStore){
            var sessionObj = sessionStore[sessionId];
            var interval = new Date() - sessionObj.lastAccessTime;
            if (interval > _timeout){
                console.log("removing session with last accessed time = ", new Date(sessionObj.lastAccessTime).toString() , " and current time is ", new Date().toString());
                delete sessionStore[sessionId];
            }
        }
    }, 120000)
    return function(req, res, next){
        var sessionId = req.cookies['sessionid'];
        if (!sessionId || !sessionStore.hasOwnProperty(sessionId)){
            sessionId = createSession(req, res);
        }
        sessionStore[sessionId].lastAccessTime = new Date();
        req.session = sessionStore[sessionId].data;
        next();
    }
}

function createSession(req, res){
    var sessionId = uuid.v1();
    sessionStore[sessionId] = {
        data : {},
        lastAccessTime : new Date()
    };
    res.cookie("sessionid", sessionId);
    return sessionId;
}
