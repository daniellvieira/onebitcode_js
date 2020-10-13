/*
  NPM e Yarn

  - NPM e Yarn são duas gerenciadora de pacotes do Javascript NPM
  vem de Node Package Manager
  - O Yarn surgiu em contrapartida ao NPM, que apresentava problemas de performance
  - COm o surgimento do Yarn, o NPM melhororu e vários destes
  problemas foram resolvidos

  NPM:
  - Uma ferramenta de linha de comando para instalar pacotes
  - Repositório de pacotes Javascript ( quando executamos um comando 
    de instalação, o NPM busca no próprio repositório )
  - Site para pesquisas sobre as documentações de um pacote
  - Ex: https://www.npmjs.com/package/moment
*/

/*
  TRANSPILAÇÃO DO BABEL

  - Transpilar é converter o código que está numa linguagem para outra
  - Babel é utilizado para isso ( Converte o código numa versão do ECMA
  para outras verões anteriores )
  - Desenvolvido em Javascript
  - Utilizado para permitir compatibilidade com navegadores que ainda
  não suportam determinada versão

  @babel/core é a base para o babel funcionar
  @babel/cli é para o babel funcionar por linha de comando
  @babel/preset-env converter qualquer versao do ES6 ou superior para ES5
  --save-dev inclui apenas o pacote no package.json em development
  o babel nao precisa se utilizado em produção

  npm init -y 
  npm install @babel/core @babel/cli @babel/preset-env --save-dev
  npx babel testing-es8.js
  npx babel testing-es8.js -o compiled-script-es6.js
  npx babel testing-es8.js -o compiled-script-es5.js --presets=@babel/preset-env

  npx babel src --out-dir dist --presets=@babel/preset-env
*/

/*
  babel.config.js e .babelrc

  babel.config.js
  - É um arquivo Javascript
  - Configuramos os presets, plugins e etc
  - Lido no momento de converter os arquivos
  - É utilziado no Raiz do projeto para as configurações padrões

  .babelrc
  - É um arquivo JSON
  - Configuramos os presets, plugins e etc.
  - Lido no momento de converter os arquivos
  - É Utilizado em subdiretórios para sobrescrever os valores padrões que
  vem no babel.config.js

  Documentação: https://babeljs.io/docs/en/

  npx babel src --out-dir dist
  npm install core-js@3 --save
*/

/*
  NPX e NPM scripts

  Documentação: https://docs.npmjs.com/
  npm install @babel/core @babel/cli
  - os 2 comando abaixo fazer a mesma ação
  npx babel index.js -o transpiled.js
  ./node_modules/.bin/babel index.js -o transpiled.js

  npm install http-server --global

  - primeiramente vai em 
  npm run build
*/