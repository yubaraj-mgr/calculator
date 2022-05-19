//Grab all the buttons as in array
// loop through the array and add event listener to each button
// when a button is clicked, grab the button's value and store in a variable
// grab the display element
// add the value to the display element

// get all the button
const button = document.querySelectorAll(".box");
const displayElement = document.querySelector(".display");

const buttonArg = Array.from(button);

let strToDisplay = "";

const operator = ["+", "-", "/", "*"];

let lastOperator = "";

buttonArg.map((btn) => {
  btn.addEventListener("click", () => {
    const val = btn.innerText;
    if (val === "AC") {
      strToDisplay = "";
      display();
      return;
    }

    if (val === "=") {
      const lastChar = strToDisplay[strToDisplay.length - 1];
      if (operator.includes(lastChar)) {
        strToDisplay = strToDisplay.slice(0, -1);
      }
      return total();
    }

    if (val === "C") {
      strToDisplay = strToDisplay.slice(0, -1);
      return display(strToDisplay);
    }

    if (operator.includes(val)) {
      lastOperator = val;
      const lastChar = strToDisplay[strToDisplay.length - 1];
      if (operator.includes(lastChar)) {
        strToDisplay = strToDisplay.slice(0, -1);
        strToDisplay += val;
        return display(strToDisplay);
      }
    }

    if (val === ".") {
      if (lastOperator) {
        const operatorIndex = strToDisplay.lastIndexOf(lastOperator);
        const lastNumberSet = strToDisplay.slice(operatorIndex + 1);
        if (lastNumberSet.includes(".")) {
          return;
        }
      }
      if (!lastOperator && strToDisplay.includes(".")) {
        return;
      }
    }
    strToDisplay += val;
    display(strToDisplay);
  });
});

const display = (str) => {
  displayElement.innerText = str || "0.00";
};

const total = () => {
  const ttl = eval(strToDisplay);
  display(ttl);
  //   strToDisplay = "" to reset
  strDisplay = ttl.toString();
};
