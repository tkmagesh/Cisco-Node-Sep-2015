var fs = require('fs');

//var fileContents = fs.readFileSync("./sample.txt", {encoding : 'utf8'});
//console.log(fileContents);

/*fs.readFile('./sample.txt', {encoding : 'utf8'}, function(err,fileContents){
    if (err){
        console.log(err);
        return;
    }
    console.log(fileContents);
});*/

var stream = fs.createReadStream('./sample.txt', {encoding : 'utf8'});
var readCount = 0;
stream.on('data', function(chunk){
    console.log(chunk);
    ++readCount;
});
//stream.pipe(process.stdout);

stream.on('end', function(){
    console.log('File read with ' + readCount + ' reads');
});
