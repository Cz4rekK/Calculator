const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const zero = document.querySelector(".zero");
const add = document.querySelector(".add");
const sub = document.querySelector(".sub");
const mul = document.querySelector(".mul");
const div = document.querySelector(".div");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const dot = document.querySelector(".dot");
let x = false;
let firstNumber = "";
let secondNumber = "";
let operator = "";
let result = "";

one.addEventListener("click", function () {
  if (operator && x === true) {
    document.querySelector(".result").innerHTML = "";

    x = false;
  }
  if (result === "") {
    document.querySelector(".result").innerHTML += "1";
  } else if (result !== "") {
    document.querySelector(".result").innerHTML = "1";
    result = "";
  }
});

two.addEventListener("click", function () {
  if (operator && x === true) {
    document.querySelector(".result").innerHTML = "";

    x = false;
  }
  if (result === "") {
    document.querySelector(".result").innerHTML += "2";
  } else if (result !== "") {
    document.querySelector(".result").innerHTML = "2";
    result = "";
  }
});

three.addEventListener("click", function () {
  if (operator && x === true) {
    document.querySelector(".result").innerHTML = "";

    x = false;
  }
  if (result === "") {
    document.querySelector(".result").innerHTML += "3";
  } else if (result !== "") {
    document.querySelector(".result").innerHTML = "3";
    result = "";
  }
});

four.addEventListener("click", function () {
  if (operator && x === true) {
    document.querySelector(".result").innerHTML = "";

    x = false;
  }
  if (result === "") {
    document.querySelector(".result").innerHTML += "4";
  } else if (result !== "") {
    document.querySelector(".result").innerHTML = "4";
    result = "";
  }
});

five.addEventListener("click", function () {
  if (operator && x === true) {
    document.querySelector(".result").innerHTML = "";

    x = false;
  }
  if (result === "") {
    document.querySelector(".result").innerHTML += "5";
  } else if (result !== "") {
    document.querySelector(".result").innerHTML = "5";
    result = "";
  }
});

six.addEventListener("click", function () {
  if (operator && x === true) {
    document.querySelector(".result").innerHTML = "";

    x = false;
  }
  if (result === "") {
    document.querySelector(".result").innerHTML += "6";
  } else if (result !== "") {
    document.querySelector(".result").innerHTML = "6";
    result = "";
  }
});

seven.addEventListener("click", function () {
  if (operator && x === true) {
    document.querySelector(".result").innerHTML = "";

    x = false;
  }
  if (result === "") {
    document.querySelector(".result").innerHTML += "7";
  } else if (result !== "") {
    document.querySelector(".result").innerHTML = "7";
    result = "";
  }
});

eight.addEventListener("click", function () {
  if (operator && x === true) {
    document.querySelector(".result").innerHTML = "";

    x = false;
  }
  if (result === "") {
    document.querySelector(".result").innerHTML += "8";
  } else if (result !== "") {
    document.querySelector(".result").innerHTML = "8";
    result = "";
  }
});

nine.addEventListener("click", function () {
  if (operator && x === true) {
    document.querySelector(".result").innerHTML = "";

    x = false;
  }
  if (result === "") {
    document.querySelector(".result").innerHTML += "9";
  } else if (result !== "") {
    document.querySelector(".result").innerHTML = "9";
    result = "";
  }
});

zero.addEventListener("click", function () {
  if (operator && x === true) {
    document.querySelector(".result").innerHTML = "";

    x = false;
  }
  if (
    result === "" &&
    document.querySelector(".result").innerHTML !== "0" &&
    document.querySelector(".result").innerHTML !== ""
  ) {
    document.querySelector(".result").innerHTML += "0";
  }
});

dot.addEventListener("click", function () {
  if (operator && x === true) {
    document.querySelector(".result").innerHTML = "";

    x = false;
  }
  if (
    result === "" &&
    !document.querySelector(".result").innerHTML.includes(".") &&
    !x
  ) {
    document.querySelector(".result").innerHTML += ".";
  } else if (
    result !== "" &&
    !document.querySelector(".result").innerHTML.includes(".") &&
    !x
  ) {
    document.querySelector(".result").innerHTML = ".";
    result = "";
  }
});

add.addEventListener("click", function () {
  if (
    document.querySelector(".result").innerHTML !== "" &&
    firstNumber === ""
  ) {
    firstNumber = document.querySelector(".result").innerHTML;

    operator = "+";
    x = true;
    return x;
  } else if (firstNumber !== "") {
    secondNumber = document.querySelector(".result").innerHTML;
    operator = "+";
    x = true;
    return x;
  }
});

sub.addEventListener("click", function () {
  if (
    document.querySelector(".result").innerHTML !== "" &&
    firstNumber === ""
  ) {
    firstNumber = document.querySelector(".result").innerHTML;

    operator = "-";
    x = true;
    return x;
  } else if (firstNumber !== "") {
    secondNumber = document.querySelector(".result").innerHTML;
    operator = "-";
    x = true;
    return x;
  }
});

mul.addEventListener("click", function () {
  if (
    document.querySelector(".result").innerHTML !== "" &&
    firstNumber === ""
  ) {
    firstNumber = document.querySelector(".result").innerHTML;

    operator = "*";
    x = true;
    return x;
  } else if (firstNumber !== "") {
    secondNumber = document.querySelector(".result").innerHTML;
    operator = "*";
    x = true;
    return x;
  }
});

div.addEventListener("click", function () {
  if (
    document.querySelector(".result").innerHTML !== "" &&
    firstNumber === ""
  ) {
    firstNumber = document.querySelector(".result").innerHTML;

    operator = "/";
    x = true;
    return x;
  } else if (firstNumber !== "") {
    secondNumber = document.querySelector(".result").innerHTML;
    operator = "/";
    x = true;
    return x;
  }
});

equal.addEventListener("click", function () {
  if (operator === "+") {
    secondNumber = document.querySelector(".result").innerHTML;
    result = parseFloat(firstNumber) + parseFloat(secondNumber);
    document.querySelector(".result").innerHTML = result;
    firstNumber = result;
    secondNumber = "";
    operator = "";
  }
  if (operator === "-") {
    secondNumber = document.querySelector(".result").innerHTML;
    result = parseFloat(firstNumber) - parseFloat(secondNumber);
    document.querySelector(".result").innerHTML = result;
    firstNumber = result;
    secondNumber = "";
    operator = "";
  }
  if (operator === "*") {
    secondNumber = document.querySelector(".result").innerHTML;
    result = parseFloat(firstNumber) * parseFloat(secondNumber);
    document.querySelector(".result").innerHTML = result;
    firstNumber = result;
    secondNumber = "";
    operator = "";
  }
  if (operator === "/") {
    secondNumber = document.querySelector(".result").innerHTML;
    result = parseFloat(firstNumber) / parseFloat(secondNumber);
    result = result.toFixed(2);
    document.querySelector(".result").innerHTML = result;
    firstNumber = result;
    secondNumber = "";
    operator = "";
  }
});

clear.addEventListener("click", function () {
  document.querySelector(".result").innerHTML = "";
  firstNumber = "";
  secondNumber = "";
  operator = "";
  x = false;
});
