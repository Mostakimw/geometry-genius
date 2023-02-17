// ! function for taking innertext from html element
function titleInnerText(id) {
  const element = document.getElementById(id).innerText;
  return element;
}

// ! function for taking value from input
function valueOfInput(id) {
  const value = document.getElementById(id).value;
  return value;
}

let serial = 1;
// ! function for showing calculate data
function calculationDisplay(name, area) {
  const areaCalculationContainer = document.getElementById("show-data");
  const tr = document.createElement("tr");
  tr.innerHTML = `
      <td>${serial + ". " + name}</td>    
      <td>${area + "cm"}<sup>2</sup></td>
      <td>${centimeterToMeterBtn()}</td>
      `;
  areaCalculationContainer.appendChild(tr);
  serial += 1;
}

//! function for cm to m button function
function centimeterToMeterBtn() {
  const button = document.createElement("button");
  button.innerHTML = `Convert to m<sup>2</sup>`;
  button.classList.add(
    "btn-info",
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

// ! function for validation check
function validationCheck(value1, value2, geometricName, area) {
  if (value1 < 0 || value2 < 0 || value1 == "" || value2 == "") {
    alert("All Values should be a positive number.");
  } else {
    calculationDisplay(geometricName, area);
  }
}

// ! function for calculate triangle, Rhombus, Pentagon area
function calculateArea(nameId, value1Id, value2Id) {
  const name = document.getElementById(nameId).innerText;
  const value1 = document.getElementById(value1Id).value;
  const value2 = document.getElementById(value2Id).value;
  const area = 0.5 * value1 * value2;
  validationCheck(value1, value2, name, area);
}

// ! function for calculate rectangular, Parallelogram area
function calculateAreaForRecAndPara(nameId, value1Id, value2Id) {
  const name = document.getElementById(nameId).innerText;
  const value1 = document.getElementById(value1Id).value;
  const value2 = document.getElementById(value2Id).value;
  const area = value1 * value2;
  validationCheck(value1, value2, name, area);
}

// ! function for calculate ellipse area
function calculateAreaForEllipse(nameId, value1Id, value2Id) {
  const name = document.getElementById(nameId).innerText;
  const value1 = document.getElementById(value1Id).value;
  const value2 = document.getElementById(value2Id).value;
  const area = (3.14 * value1 * value2).toFixed(2);
  validationCheck(value1, value2, name, area);
}
