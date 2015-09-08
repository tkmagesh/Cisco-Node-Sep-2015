/*Create a node.js program called "calculator.js"
in the calculator.js
    create an calculator object that has the following methods
        add(x,y)
        subtract(x,y)
        multiply(x,y)
        divide(x,y)
    call all the methods with sample data and print the result*/

var calculator = {
    add : function(x,y){
        return x + y;
    },
    subtract : function(x,y){
        return x - y;
    },
    multiply : function(x,y){
        return x * y;
    },
    divide : function(x,y){
        return x / y;
    }
}

module.exports = calculator;
