let serial = 1;

// function for taking innerText from html element
function innerText(id) {
  const element = document.getElementById(id).innerText;
  return element;
}
// function for taking value from input
function inputValue(id) {
  document.getElementById(id).value;
}

// ! rectangular event handler
document.getElementById("rectangle-btn").addEventListener("click", function () {
  const rectangleName = innerText("rectangle-title");
  const rectangleWidth = inputValue("rectangle-width");
  const rectangleHeight = inputValue("rectangle-height");
  const area = rectangleWidth * rectangleHeight;
  console.log(area);
});

// ! triangle event handler
document.getElementById("triangle-btn").addEventListener("click", function () {
  const triangleName = document.getElementById("triangle-title").innerText;
  const triangleBase = document.getElementById("triangle-base").value;
  const triangleHeight = document.getElementById("triangle-height").value;
  const area = 0.5 * triangleBase * triangleHeight;
  console.log(area);

  // show data

  const areaCalculationContainer = document.getElementById("show-data");
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${1}</td>
    <td>${triangleName}</td>
    <td>${area + "cm"}</td>
    <td>${centimeterToMeterBtn()}</td>
    `;
  areaCalculationContainer.appendChild(tr);
});

//!  cm to m button function
function centimeterToMeterBtn() {
  const button = document.createElement("button");
  button.innerText = "Click me";
  button.classList.add(
    "bg-blue-500",
    "hover:bg-blue-700",
    "text-white",
    "font-bold",
    "py-1",
    "px-4",
    "rounded"
  );
  const buttonContainer = document.createElement("div");
  buttonContainer.appendChild(button);
  return buttonContainer.innerHTML;
}
