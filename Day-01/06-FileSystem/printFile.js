var fs = require('fs');

//var fileContents = fs.readFileSync("./sample.txt", {encoding : 'utf8'});
//console.log(fileContents);

fs.readFile('./sample.txt', {encoding : 'utf8'}, function(err,fileContents){
    if (err){
        console.log(err);
        return;
    }
    console.log(fileContents);
});
