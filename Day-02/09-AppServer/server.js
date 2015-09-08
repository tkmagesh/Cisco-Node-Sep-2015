var http = require('http');
var dataParser = require('./dataParser');
var staticResourceServer = require('./staticResourceServer');
var calculatorProcessor = require('./calculatorProcessor');
var notFoundAction = require('./notFoundAction');
var app = require('./app');

app.use(dataParser);
app.use(staticResourceServer);
app.use(calculatorProcessor);
app.use(notFoundAction);


http.createServer(app.run()).listen(8080);
