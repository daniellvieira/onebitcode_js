function setBlueBackground() {
  let element = document.getElementById("style-text")
  // backgroud-color in CSS -> backgroundColor in JS
  // camelcase
  element.style.backgroundColor = "blue"
}

function setTransparentBackground() {
  document.getElementById("style-text").style.backgroundColor = "transparent"
}


// Adicioanr ou removendo uma classe do objeto
function setRedColor() {
  let element = document.getElementById("style-text")
  element.classList.add("red-color")
}

function removeRedColor() {
  let element = document.getElementById("style-text")
  element.classList.remove("red-color")
}