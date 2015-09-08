var uuid = require('node-uuid');
var sessionStore  = {}
module.exports = function(req, res, next){
    var sessionId = req.cookies['sessionid'];
    if (!sessionId || !sessionStore.hasOwnProperty(sessionId)){
        sessionId = createSession(req, res);
    }
    req.session = sessionStore[sessionId];
    next();
}

function createSession(req, res){
    var sessionId = uuid.v1();
    sessionStore[sessionId] = {};
    res.cookie("sessionid", sessionId);
    return sessionId;
}
