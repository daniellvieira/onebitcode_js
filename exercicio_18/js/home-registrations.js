function saveHouse() {
  // https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
  
  // pega os valores informados no formulario
  let area = document.querySelector("input[name='area']")
  let number = document.querySelector("input[name='number']")
  let neighborhood = document.querySelector("input[name='neighborhood']")
  let city = document.querySelector("input[name='city']")
  // cria o li que sera inserido no DOM  
  let newListValue = document.createElement("li")
  newListValue.innerText = area.value + "m², número " + number.value + " (" + 
  neighborhood.value + " - " + city.value + ")"
  // criar o botao de remover
  let removeButton = document.createElement("button")
  removeButton.type = "button"
  removeButton.innerText = "Remover"
  removeButton.setAttribute("onclick", "removeHouse(this)")
  // adicionar o botao criado dentro do li criado
  newListValue.appendChild(removeButton)
  // adicionar tudo que foi criado na arvore do DOM
  document.getElementById("house-list").appendChild(newListValue)
  // zerar os valores informados no formulario
  area.value = ""
  number.value = ""
  neighborhood.value = ""
  city.value = ""
}

function removeHouse(button) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
  // https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode
  // identificar o pai do button
  let liToRemove = button.parentNode
  // remover o li do ul selecionado
  document.getElementById("house-list").removeChild(liToRemove)
}