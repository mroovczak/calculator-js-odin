function add(a,b) {return(parseFloat(a)+parseFloat(b))};
function subtract(a,b) {return(a-b)};
function multiply(a,b) {return(a*b)};
function divide(a,b) {return(a/b)};
//use new function instead of eval() for safety reasons
function operate(operator, a, b){
    return Function('"use strict";  return (' + operator + ')')()(
        a, b
      );
}
const display = document.querySelector("#numbers");
let displayValue = "";
let ans = 0;
let nextOperation = "";
const digits = document.querySelectorAll(".digits>*");

digits.forEach(digit => {
  digit.addEventListener("click",e => {
    displayValue == "0" ? displayValue ="" : displayValue=displayValue;
    displayValue += e.target.textContent;
    display.textContent = displayValue;
  });
});
const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click",() => {
  displayValue = "0";
  display.textContent = displayValue;
});
const operators = document.querySelectorAll(".operators > .math");
operators.forEach(operator => {
  operator.addEventListener("click",e => {
    nextOperation = e.target.id;
    ans = displayValue;
    displayValue = "";
    display.textContent = displayValue;
  })
});
const equal = document.querySelector("#equal");
equal.addEventListener("click", e =>{
  ans = operate(nextOperation,ans,displayValue);
  //fixed number after coma
  ans = +ans.toFixed(5);
  displayValue = ans;
  display.textContent = displayValue;
})
