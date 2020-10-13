class App {
  constructor() {
    this.spaceship = null
  }
  // conectar todas as funcoes criadas
  start() {
    this.enrollSpaceship()
    let chosenOption
    do {
      chosenOption = this.showInitialMenu()
      this.redirectFeature(chosenOption)
    } while( chosenOption != "3")
    this.printAndExit()
  }
  // responsavel por fazer o cadastrar da nave
  enrollSpaceship() {
    let spaceshipName = prompt("Qual o nome da nave ?")
    let crewQuantity = prompt("Qual quantidade de tripulantes ?")
    let spaceshipKind = this.askForSpaceshipKind()
    if (spaceshipKind == "1") {
      let weaponsQuantity = prompt("Quantas armas a nave possui ?")
      this.spaceship = new BattleSpaceship(spaceshipName, crewQuantity, weaponsQuantity)
    } else {
      let sitsQuantity = this.askForSitsQuantity(crewQuantity)
      this.spaceship = new TransportSpaceship(spaceshipName, crewQuantity, sitsQuantity)      
    }
  }
  askForSitsQuantity(crewQuantity) {
    let sitsQuantity = 0
    while (sitsQuantity < crewQuantity ) {
      sitsQuantity = Number( prompt("Quantos lugares a nave possui ?") )
      if (sitsQuantity < crewQuantity) {
        alert("A capacidade da nave deverá ser maior que " + crewQuantity + ".")
      }
    }
    return sitsQuantity
  }
  askForSpaceshipKind() {
    const promptMessage = "Qual o tipo da nave ?" + 
                          "\n1- Batalha" + 
                          "\n2 - Transporte"
    let chosenOption
    while( !["1", "2"].includes(chosenOption) ) {
      chosenOption = prompt(promptMessage)
    }
    return chosenOption
  }
  showInitialMenu() {
    const promptMessage = "O que você deseja fazer ?" +
                          "\n1 - Acelerar a nave" +
                          "\n2 - Trocar a nave" +
                          "\n3 - Imprimir e sair"
    let chosenOption
    while( !["1", "2", "3"].includes(chosenOption) ) {
      chosenOption = prompt(promptMessage)
    }
    return chosenOption
  }
  // essa funcao vai analisar o que showInitialMenu e redirecionar para o metodo correto
  redirectFeature(chosenOption) {
    switch (chosenOption) {
      case "1":
        this.accelerateSpaceship()
        break;
      case "2":
        this.changeSpaceship()
        break;
      default:
        break;
    }
  }
  changeSpaceship() {
    let chosenOption = this.confirmChanged()    
    if (chosenOption == "1") {
      this.enrollSpaceship()
    }
  }
  confirmChanged() {
    const promptMessage = "Dados da nave atual:" +
                          "\nNome: " + this.spaceship.name +
                          "\nQuantidade de tripulantes: " + this.spaceship.crewQuantity +
                          "\nVelocidade atual: " + this.spaceship.currentVelocity +
                          "\nVocê deseja excluir essa nave ?" +
                          "\n1 - Sim" +
                          "\n2 - Não"
    let chosenOption
    while( !["1", "2"].includes(chosenOption) ) {
      chosenOption = prompt(promptMessage)
    }
    return chosenOption
  }
  accelerateSpaceship() {
    let acceleration = Number( prompt("Quanto gostaria de acelerar ?") )
    this.spaceship.speedUp(acceleration)
  }
  printAndExit() {
    let finalMessage = "Nome: " + this.spaceship.name +
                       "\nQuantidade de tripulantes: " + this.spaceship.crewQuantity +
                       "\nVelocidade atual: " + this.spaceship.currentVelocity
    alert(finalMessage)
  }
}