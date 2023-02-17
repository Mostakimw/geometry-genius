let serial = 1;

// function for taking innerText from html element
function innerText(id) {
  const element = document.getElementById(id).innerText;
  return element;
}
// function for taking value from input
function valueOfInput(id) {
  const value = document.getElementById(id).value;
  return value;
}

// ! rectangular event handler
document.getElementById("rectangle-btn").addEventListener("click", function () {
  const rectangleName = innerText("rectangle-title");
  const rectangleWidth = valueOfInput("rectangle-width");
  const rectangleLength = valueOfInput("rectangle-length");
  const area = rectangleWidth * rectangleLength;
  validationCheck(rectangleWidth, rectangleLength, rectangleName, area);
});

// ! triangle event handler
document.getElementById("triangle-btn").addEventListener("click", function () {
  const triangleName = document.getElementById("triangle-title").innerText;
  const base = document.getElementById("triangle-base").value;
  const height = document.getElementById("triangle-height").value;
  const area = 0.5 * base * height;
  validationCheck(base, height, triangleName, area);
});

// function for validation check
function validationCheck(value1, value2, geometricName, area) {
  if (value1 < 0 || value2 < 0 || value1 == "" || value2 == "") {
    alert("Value should be a positive number.");
  } else {
    calculationDisplay(geometricName, area);
  }
}

// function for showing calculate data
function calculationDisplay(name, area) {
  const areaCalculationContainer = document.getElementById("show-data");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${serial}</td>
    <td>${name}</td>
    <td>${area + "cm"}</td>
    <td>${centimeterToMeterBtn()}</td>
    `;
  areaCalculationContainer.appendChild(tr);
  serial += 1;
}

//! function for cm to m button function
function centimeterToMeterBtn() {
  const button = document.createElement("button");
  button.innerText = "Convert to m";
  button.classList.add(
    "bg-blue-500",
    "hover:bg-blue-700",
    "text-white",
    "font-bold",
    "py-1",
    "px-2",
    "rounded"
  );
  const buttonContainer = document.createElement("div");
  buttonContainer.appendChild(button);
  return buttonContainer.innerHTML;
}
