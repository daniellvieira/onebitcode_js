class App {
  // chamado no momento que clicar no botao Salvar
  addProperty() {
    // impede que o evento recarregue a pagina
    event.preventDefault()

    let kind = document.querySelector("select[name='kind']").value
    let area = document.querySelector("input[name='area']").value
    let rented = document.querySelector("input[name='rented']").checked

    let property = new Property(kind, area, rented)
    this.addOnPropertiesList(property)
    this.cleanForm()
  }

  addOnPropertiesList(property) {
    let listElement = document.createElement("li")

    // adicionar a maraca de alugado - se SIM
    if (property.rented) {
      // vai retornar o elemento DOM
      let rentedMark = this.createdRentendMark()
      listElement.appendChild(rentedMark) ;;
    }

    // adiciona as informacoes do imovel
    let propertyInfo = "Tipo: " + property.kind + " (Área: " + property.area + "m²)"
    listElement.innerHTML += propertyInfo

    // criar o botao de remoção
    let buttonToRemove = this.createRemoveButton()
    listElement.appendChild(buttonToRemove)

    // adicionar o li na listagem
    this.addLiToUlList(listElement)
  }

  createdRentendMark() {
    let rentedMark = document.createElement("span")
    rentedMark.style.color = "white"
    rentedMark.style.backgroundColor = "red"
    rentedMark.innerText = "Alugado"
    return rentedMark
  }

  createRemoveButton() {
    let removeButton = document.createElement("button")
    removeButton.setAttribute("onclick", "app.remove()")
    removeButton.innerText = "Remover"
    return removeButton
  }

  addLiToUlList(li) {
    let ul = document.getElementById("properties")
    ul.appendChild(li)
  }

  cleanForm() {
    document.querySelector("form[name='new-property']").reset();
    // document.querySelector("input[name='area']").value = ""
    // document.querySelector("input[name='rented']").checked = false
  }

  remove() {
    // parentNode pega o elemento pai do bottao
    let liToRemove = event.target.parentNode
    document.getElementById("properties").removeChild(liToRemove)
  }
}