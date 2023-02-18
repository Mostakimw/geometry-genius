// ! triangle event handler
document.getElementById("triangle-btn").addEventListener("click", function () {
  calculateArea("triangle-title", "triangle-base", "triangle-height");
});

// ! rectangular event handler
document.getElementById("rectangle-btn").addEventListener("click", function () {
  calculateAreaForRecAndPara(
    "rectangle-title",
    "rectangle-width",
    "rectangle-length"
  );
});

// ! Parallelogram event handler
document
  .getElementById("parallelogram-btn")
  .addEventListener("click", function () {
    calculateAreaForRecAndPara(
      "parallelogram-title",
      "parallelogram-base",
      "parallelogram-height"
    );
  });

// ! Rhombus event handler

document.getElementById("rhombus-btn").addEventListener("click", function () {
  calculateArea("rhombus-title", "rhombus-base", "rhombus-height");
});

// ! pentagon event handler
document.getElementById("pentagon-btn").addEventListener("click", function () {
  calculateArea("pentagon-title", "pentagon-perimeter", "pentagon-apothem ");
});

// ! ellipse event handler
document.getElementById("ellipse-btn").addEventListener("click", function () {
  calculateAreaForEllipse("ellipse-title", "ellipse-x-axis", "ellipse-y-axis");
});

// redirect to blog page
document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "blog.html";
});
