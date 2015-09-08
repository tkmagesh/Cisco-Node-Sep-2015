function f1(next){
    console.log("f1 is invoked");
    if (next) next();
}
function f2(next){
    console.log("f2 is invoked");
    if (next) next();
}
function f3(next){
    console.log("f3 is invoked");
    if (next) next();
}
function f4(next){
    console.log("f4 is invoked");
    if (next) next();
}

var fns = [f1,f2,f3,f4];
function exec(fns){
    var first = fns[0],
        remaining = fns.slice(1),
        next = function(){
            exec(remaining);
        };
    if (first){
        first(next);
    }
}
exec(fns
