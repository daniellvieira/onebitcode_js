function sayMyFirstName(element) {
  alert("Meu primeiro nome é " + element.value)
}
function sayMyLastName() {
  // event armazena o ultimo evento que foi chamado no DOM
  // event é uma variavel global do navegador
  console.log(event)
  alert("Meu último nome é " + event.target.value)
}