// global variables
let firstNumber = 0;
let secondNumber = 0;
let value = 0;
let operator = "";
let changeNumber = false;
let newEquation = true;
let length = 1;
const operationBox = document.getElementById("operation-box");

// button elements
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
const buttonC = document.getElementById("C");
const buttonEqual = document.getElementById("=");
const buttonPlus = document.getElementById("+");
const buttonMinus = document.getElementById("-");
const buttonMultiply = document.getElementById("x");
const buttonDivide = document.getElementById("/");

// click events
button1.addEventListener("click", function () {
  const input = 1;
  populateFirstNumber(input);
});
button2.addEventListener("click", function () {
  const input = 2;
  populateFirstNumber(input);
});
button3.addEventListener("click", function () {
  const input = 3;
  populateFirstNumber(input);
});
button4.addEventListener("click", function () {
  const input = 4;
  populateFirstNumber(input);
});
button5.addEventListener("click", function () {
  const input = 5;
  populateFirstNumber(input);
});
button6.addEventListener("click", function () {
  const input = 6;
  populateFirstNumber(input);
});
button7.addEventListener("click", function () {
  const input = 7;
  populateFirstNumber(input);
});
button8.addEventListener("click", function () {
  const input = 8;
  populateFirstNumber(input);
});
button9.addEventListener("click", function () {
  const input = 9;
  populateFirstNumber(input);
});
button0.addEventListener("click", function () {
  const input = 0;
  populateFirstNumber(input);
});

buttonPlus.addEventListener("click", function () {
  const input = "+";
  setOperator(input);
});
buttonMinus.addEventListener("click", function () {
  const input = "-";
  setOperator(input);
});
buttonMultiply.addEventListener("click", function () {
  const input = "x";
  setOperator(input);
});
buttonDivide.addEventListener("click", function () {
  const input = "/";
  setOperator(input);
});
buttonEqual.addEventListener("click", function () {
  calculate(firstNumber, operator, secondNumber);
});
buttonC.addEventListener("click", function () {
  clearDisplay();
});

// functions
function populateFirstNumber(input) {
  if (changeNumber == false && newEquation == true) {
    if (length === 1) {
      firstNumber = input;
      operationBox.textContent += input;
      length += 1;
    } else if (length === 2) {
      firstNumber = firstNumber * 10 + input;
      operationBox.textContent += input;
      length += 1;
    } else if (length === 3) {
      firstNumber = firstNumber * 10 + input;
      operationBox.textContent += input;
      length += 1;
    } else if (length === 4) {
      firstNumber = firstNumber * 10 + input;
      operationBox.textContent += input;
      length += 1;
    }
  } else {
    populateSecondNumber(input);
    newEquation = false;
  }
}

function setOperator(input) {
    if (!changeNumber) {
      operator = input;
      operationBox.textContent += input;
      changeNumber = true;
      length = 1;
  
      if (!newEquation) {
        firstNumber = value;  
        newEquation = true;
      }
    }
  }
  

function populateSecondNumber(input) {
  if (changeNumber == true) {
    if (length === 1) {
      secondNumber = input;
      operationBox.textContent += input;
      length += 1;
    } else if (length === 2) {
      secondNumber = secondNumber * 10 + input;
      operationBox.textContent += input;
      length += 1;
    } else if (length === 3) {
      secondNumber = secondNumber * 10 + input;
      operationBox.textContent += input;
      length += 1;
    } else if (length === 4) {
      secondNumber = secondNumber * 10 + input;
      operationBox.textContent += input;
      length += 1;
    }
  }
}

function calculate(firstNumber, operator, secondNumber) {
    switch (operator) {
      case "+":
        value = firstNumber + secondNumber;
        break;
      case "-":
        value = firstNumber - secondNumber;
        break;
      case "x":
        value = firstNumber * secondNumber;
        break;
      case "/":
        value = firstNumber / secondNumber;
        break;
    }
  
    operationBox.textContent = `= ${value} `;
    console.log(`${firstNumber} ${operator} ${secondNumber} = ${value}`);
  
    firstNumber = value;
  
    secondNumber = 0;
    
    length = 1;
    changeNumber = false;
  
    newEquation = false;
  }

function clearDisplay() {
    operationBox.textContent = "";
    changeNumber = false;
    newEquation = true; 
    firstNumber = 0;
    secondNumber = 0;
    operator = "";
    value = 0;  
    length = 1;
}
