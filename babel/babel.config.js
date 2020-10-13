const presets = [
  [
    "@babel/preset-env",
    // core js é um pacote utilizado para importar
    // recursos que o ES5 nao tem nativamente
    {
      useBuiltIns: "usage",
      corejs: "3.3.2"
    }
  ]
]
module.exports = { presets }
