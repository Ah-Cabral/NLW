//Dentro do index html, não são colocados 
//os elementos html diretamente,
//o documento serve apenas como base.

//Ao se usar uma biblioteca de construção de interfaces,
//tudo o que é visual é criado a partir do JAVASCRIPT

//Como o JS roda pelo lado do client, os elementos na tela
//só aparecem após o carregamento do JS.

//Importação do React
import React from 'react';

//Importando ReactDOM, forma que o react tem de trabalhar com o browser
import ReactDOM from 'react-dom'; //DOM = Document Object Model

//Importando App (Componente no React)
//Componente é tudo que a gente consegue separar, tudo que geralmente se repetirá.
import App from './App';

//Utilizando método render do ReactDOM
ReactDOM.render( 
    <App />, //JSX --> JS (JavaScript) X --> XML
             //JSX --> Escrever uma sintaxe muito próxima do HTML dentro do JavaScript
  document.getElementById('root') //Aqui é feito pedido de busca de qualquer elemento que tenha o id root.
                                  //e dentro ele, insira os componentes acima.
);

