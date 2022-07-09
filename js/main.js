function add(a,b) {return(a+b)};
function subtract(a,b) {return(a-b)};
function multiply(a,b) {return(a*b)};
function divide(a,b) {return(a/b)};
//use new function instead of eval() for safety reasons
function operate(operator, a, b){
    return Function('"use strict";  return (' + operator + ')')()(
        a, b
      );
}