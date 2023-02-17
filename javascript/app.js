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
  calculationDisplay(rectangleName, area);
});

// ! triangle event handler
document.getElementById("triangle-btn").addEventListener("click", function () {
  const triangleName = document.getElementById("triangle-title").innerText;
  const triangleBase = document.getElementById("triangle-base").value;
  const triangleHeight = document.getElementById("triangle-height").value;
  const area = 0.5 * triangleBase * triangleHeight;
  calculationDisplay(triangleName, area);
});

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

//!  cm to m button function
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
