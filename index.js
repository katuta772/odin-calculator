let firstNumber;
let secondNumber;
let operator;
let changeNumber = false;

const button1 = document.getElementById("1");
const button2 = document.getElementById("2");
const button3 = document.getElementById("3");
const button4 = document.getElementById("4");
const button5 = document.getElementById("5");
const button6 = document.getElementById("6");
const button7 = document.getElementById("7");
const button8 = document.getElementById("8");
const button9 = document.getElementById("9");
const button0 = document.getElementById("0");
const buttonC = document.getElementById("0");
const buttonEqual = document.getElementById("=");
const buttonPlus = document.getElementById("=");
const buttonMinus = document.getElementById("-");
const buttonDivide = document.getElementById("/");

button1.addEventListener("click", function(){
    const input = 1;
    populateFirstNumber(input);
});
button2.addEventListener("click", function(){
    const input = 2;
    populateFirstNumber(input);
});
button3.addEventListener("click", function(){
    const input = 3;
    populateFirstNumber(input);
});
button4.addEventListener("click", function(){
    const input = 4;
    populateFirstNumber(input);
});
button5.addEventListener("click", function(){
    const input = 5;
    populateFirstNumber(input);
});
button6.addEventListener("click", function(){
    const input = 6;
    populateFirstNumber(input);
});
button7.addEventListener("click", function(){
    const input = 7;
    populateFirstNumber(input);
});
button8.addEventListener("click", function(){
    const input = 8;
    populateFirstNumber(input);
});
button9.addEventListener("click", function(){
    const input = 9;
    populateFirstNumber(input);
});
button0.addEventListener("click", function(){
    const input = 0;
    populateFirstNumber(input);
});

const operationBox = document.getElementById("operation-box");

function populateFirstNumber(input) {
  if (changeNumber == false) {
    firstNumber += input;
    operationBox.textContent += input;
  } else populateSecondNumber(input);
}

function populateSecondNumber(input) {
  if (changeNumber == false) {
    secondNumber += input;
  }
}

function calculate(firstNumber, operator, secondNumber) {
  switch (operator) {
    case "+":
      return firstNumber + secondNumber;
      break;
    case "-":
      return firstNumber - secondNumber;
      break;
    case "x":
      return firstNumber * secondNumber;
      break;
    case "/":
      return firstNumber / secondNumber;
      break;
  }
}
