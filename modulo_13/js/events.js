/*
  EVENTOS NO HTML
  - Eventos são ações que ocorrem num sistema
    ( podem ocorrer por uma ação do usuário: como um clique de um 
      mouse ou mudança do valor de um campo )
    ( Ou simplesmete como um fluxo do próprio sistem: como a página
      concluir seu carregamento )
  - No HTML conseguimos mapear os eventos e definir ações

  - Entende mais sobre eventos em:
  https://developer.mozilla.org/pt-BR/docs/Web/Events
*/

function clickMe() {
  console.log("Fui clicado")
}
function focusMe() {
  console.log("Fui focado")
}
function blurMe() {
  console.log("Fui desfocado")
}
function changeMe() {
  console.log("Fui alterado")
}
function overMe() {
  console.log("Mouse aqui")
}