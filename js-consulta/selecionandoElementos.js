//SELECIONAR ELEMENTOS

//Selecionar e retornar elementos do DOM por ID
const animais = document.getElementById('animais');
console.log(animais);

//Selecionar por classe ou por tag
const classe = document.getElementsByClassName('.grid-section');
console.log(classe);

const tag = document.getElementsByTagName('ul');
console.log(tag);

//Seletor geral único
const seletorGeral = document.querySelector('#animais');
console.log(seletorGeral);

//Selecionar todos os elementos
const seletorGeralVarios = document.querySelectorAll('.introducao-animais-lista img');
console.log(seletorGeralVarios);

//Utilizando forEach em uam nodeList
seletorGeralVarios.forEach(function(item, index){
    console.log(item);
});

//Transformando em um Array
const arrayTag = Array.from(tag);
console.log(arrayTag);

//ForEach com array
arrayTag.forEach(function(item){
    console.log(item);
});

//Exercícios de fixação
//Retorne no console todas as imagens do site
const imagensSite = document.querySelectorAll('img');
console.log(imagensSite);

//Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensNome = document.querySelectorAll('img[src^="./img/imagem"]');
console.log(imagensNome);

//Selecione todos os links internos (onde o href começa com #)
const linksInterno = document.querySelectorAll('[href^="#"]');
console.log(linksInterno);

//Selecione o primeiro h2 dentro de .introducao-animais-descricao
const h2Introducao = document.querySelector('.introducao-animais-descricao h2');
console.log(h2Introducao);

//Selecione o último p do site
const todosParagrafosSite = document.querySelectorAll('p');
console.log(todosParagrafosSite[--todosParagrafosSite.length]);