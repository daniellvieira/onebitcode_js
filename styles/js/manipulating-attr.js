function verifyEnablement() {
  // pegar o valor 
  let selectedValue = document.querySelector("select[name='kind']").value
  let element = document.querySelector("input[name='some-text']")
  if (selectedValue == "disabled") {
    element.disabled = true
    let pElement = document.getElementById("message")
    pElement.innerText = "DESABILITADO"
    pElement.style.font = "white"
    pElement.style.backgroundColor = "red"
  } else {
    element.disabled = false
    let pElement = document.getElementById("message")
    pElement.innerText = ""
    pElement.style.font = "black"
    pElement.style.backgroundColor = "transparent"    
  }
}