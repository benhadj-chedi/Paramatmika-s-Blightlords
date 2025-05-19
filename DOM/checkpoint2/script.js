document.addEventListener("DOMContentLoaded", function () {
  var colorBox = document.getElementById("color-box");
  var changeColorBtn = document.getElementById("change-color-btn");

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  changeColorBtn.addEventListener("click", function () {
    var newColor = getRandomColor();
    colorBox.style.backgroundColor = newColor;
  });
});
