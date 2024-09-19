function addButtonClickListener(buttonId, displayId) {
  document.getElementById(buttonId).addEventListener("click", function () {
    const btn = document.getElementById(buttonId).innerHTML;
    document.getElementById(displayId).value += btn;

    console.log(document.getElementById("display").value);
  });
}

function clearOnce() {
  document.getElementById("clearOnce").addEventListener("click", function () {
    document.getElementById("display").value = document
      .getElementById("display")
      .value.slice(0, document.getElementById("display").value.length - 1);

    console.log(document.getElementById("display").value);
  });
}

function clearAll() {
  document.getElementById("c").addEventListener("click", function () {
    document.getElementById("display").value = "";

    console.log("clear all");
  });
}

function displayResult() {
  document.getElementById("equal").addEventListener("click", function () {
    try {
      const result = (document.getElementById("display").value = eval(
        document.getElementById("display").value
      ));

      document.getElementById("display").value = Number(result)
        .toFixed(3)
        .replace(/\.?0+$/, "");

      console.log(document.getElementById("display").value);
    } catch (error) {
      document.getElementById("display").value = "Invalid Syntax";
    }
  });
}

function displayPercentage() {
  document.getElementById("percentage").addEventListener("click", function () {
    let percentage = document.getElementById("display").value / 100;

    document.getElementById("display").value = percentage;

    console.log(percentage);
  });
}

function multiply() {
  document.getElementById("multiply").addEventListener("click", function () {
    document.getElementById("display").value += "*";

    console.log(document.getElementById("display").value);
  })
}

function addDot() {
  document.getElementById("dot").addEventListener("click", function () {
    if (!document.getElementById("display").value.includes(".")) {
      if (document.getElementById("display").value === "") {
        document.getElementById("display").value = "0.";
      } else {
        document.getElementById("display").value += ".";
      }
    }
    console.log(document.getElementById("display").value);
  })
}

function attachListeners() {
  const classes = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "zero",
    "doubleZero",
    "divide",
    "minus",
    "plus",
  ];
  // classes.forEach(e=>{
  //   addButtonClickListener(e, "display");
  // })

  for (let i = 0; i < classes.length; i++) {
    addButtonClickListener(classes[i], "display");
  }
}

addDot()
multiply()
displayPercentage();
displayResult();
clearAll();
clearOnce();
attachListeners();
