function save() {
  // impede que o evento recarregue a pagina
  event.preventDefault()
  
  let name = document.querySelector("input[name='name']").value
  let programmingLang = document.querySelector("select[name='programming-lang']").value
  alert("Nome: " + name + "\nPrograma em: " + programmingLang)
}