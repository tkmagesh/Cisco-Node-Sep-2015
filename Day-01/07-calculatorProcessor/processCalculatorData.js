var fs = require('fs')
    calculator = require('./calculator')();

fs.readFile("calculator.dat", {encoding : 'utf8'}, function(err, fileContents){
    if (err) return;
    fileContents.split('\n').forEach(function(line){
        var data = line.split(',');
        calculator[data[0]](parseInt(data[1]));
    });
    console.log(calculator.getResult());
});
