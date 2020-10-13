/*
  - Exceções ( Exceptions ) são erros que ocorrem no codigo
  - São capturadas em tempo de execução ( Runtime )
  - Podem ser tratadas para que o código não quebre
  - No JS, as exceções são lançadas pela classe Error
    ( Quando é instanciada e lançada, o interpretador entende que ocorreu um erro )
  - Então ele pára a execução e exibe o erro
  - Podemos utilziar o try e catch para poder trar estes errors
  - Assim como podemo lançar nosso próprios erros ( utilizando o throw )
*/

// Clausula throw
// Bloco try, catch e finally
class SpaceshipWeapon {
  constructor(identifier) {
    this.identifier = identifier
    this.shotsLeft = 5
  }
  shoot() {
    if (this.shotsLeft > 0) {
      console.log("Baang!")
      this.shotsLeft -= 1
    } else {
      // lançou um erro e parou o codigo
      throw new Error("Arma " + this.identifier + " sem munição.")
    }
  }

  reload() {
    this.shotsLeft = 5
  }
}
let fenixWeapon = new SpaceshipWeapon('fenix')
try {
  fenixWeapon.shoot()
  fenixWeapon.shoot()
  fenixWeapon.shoot()
  fenixWeapon.shoot()
  fenixWeapon.shoot()
  fenixWeapon.shoot()
} catch(e) {
  console.log(e.message)
  fenixWeapon.reload()
} finally {
  console.log("Arma deu bons tiros !")
}
console.log(fenixWeapon)

