var express = require('express');
var router = express.Router();

var bugs = [
    {id : 1, name : "Stack overflow error", isClosed : false},
    {id : 2, name : "Object reference not set to an instance of an object", isClosed : false},
    {id : 3, name : "Undefined is not a function", isClosed : false}

]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('bugs/index', { list : bugs });
});

router.get('/new', function(req, res, next){
    res.render('bugs/new');
});

router.post('/new', function(req, res, nex){
    var newBugName = req.body.newBug;
    var newId = bugs.reduce(function(result, bug){
        return result > bug.id ? result : bug.id;
    }, 0) + 1;
    var newBug = {
        id : newId,
        name : newBugName,
        isClosed : false
    };
    bugs.push(newBug);
    console.log(bugs);
    res.redirect('/bugs');
});

router.get('/toggle/:id', function(req, res, next){
    var id = parseInt(req.params.id, 10);
    var bug = bugs.filter(function(bug){
        return bug.id === id;
    })[0];
    if (bug) bug.isClosed = !bug.isClosed;
    res.redirect('/bugs');
})

module.exports = router;
