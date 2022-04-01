//TRABALHANDO COM EVENTOS

const img = document.querySelector('img');

// elemento.addEventListener(event, callback, options)
//O primeiro parâmetro do callback é referente ao evento que ocorreu. Geralmente utilizam e como nome do parâmetro
function callback(e) {
    //Referente ao item selecionado
    const currentTarget = e.currentTarget;
    //Onde o clique ocorreu
    const target = e.target; 
    //Tipo do evento
    const type = e.type;
    //É o caminho do elemento selecionado
    const path = e.path;
    console.log(currentTarget, target, type, path);
}

/*É boa prática separar a função de callback do addEventListener, 
ou seja, declarar uma função ao invés de passar diretamente uma função anônima*/

img.addEventListener('click', callback);

/*Existem diversos eventos como 
click, 
scroll, 
resize, 
keydown, 
keyup, 
mouseenter 
e mais. 
Eventos podem ser adicionados a diferentes elementos, como o window e document também. */

const h1 = document.querySelector('h1');

function callback(event) {
  console.log(event.type, event);
}

//Quando clica no elemento
h1.addEventListener('click', callback);
//Quando passa o mouse por cima do elemento
h1.addEventListener('mouseenter', callback);
//Quando utilizar o scroll
window.addEventListener('scroll', callback);
//Quando atualiza a pagina
window.addEventListener('resize', callback);
//Quando uma tecla é precionada
window.addEventListener('keydown', callback);

//Você pode adicionar atalhos para facilitar a navegação no seu site, através de eventos do keyboard.
function handleKeyboard(event) {
    if(event.key === 'a')
      document.body.classList.toggle('azul');
    else if(event.key === 'v')
      document.body.classList.toggle('vermelho');
}
  
window.addEventListener('keydown', handleKeyboard);

/*O método addEventListener é adicionado à um único elemento, 
então é necessário um loop entre elementos de uma lista, 
para adicionarmos à cada um deles.*/

const imgs = document.querySelectorAll('img');

function imgSrc(event) {
  const src = event.currentTarget.getAttribute('src');
  console.log(src);
}

imgs.forEach((img) => {
  img.addEventListener('click', imgSrc);
});

//EXERCÍCIOS DE FIXAÇÃO

/*Quando o usuário clicar nos links internos do site,
adicione a classe ativo ao item clicado e remova dos
demais itens caso eles possuam a mesma. Previna
o comportamento padrão desses links*/
const linksInternos = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
  event.preventDefault();
  linksInternos.forEach((link) => {
    link.classList.remove('ativo');
  });
  event.currentTarget.classList.add('ativo');
}

linksInternos.forEach((link) => {
  link.addEventListener('click', handleLink);
})


/*Selecione todos os elementos do site começando a partir do body,
ao clique mostre exatamente quais elementos estão sendo clicados*/
const todosElementos1 = document.querySelectorAll('body *');

function handleElemento(event) {
  console.log(event.currentTarget);
}

todosElementos1.forEach((elemento) => {
  elemento.addEventListener('click', handleElemento);
})

/*Utilizando o código anterior, ao invés de mostrar no console,
remova o elemento que está sendo clicado, o método remove() remove um elemento*/
const todosElementos2 = document.querySelectorAll('body *');

function handleElemento(event) {
  event.currentTarget.remove();
}

todosElementos2.forEach((elemento) => {
  elemento.addEventListener('click', handleElemento);
})

//Se o usuário clicar na tecla (t), aumente todo o texto do site. 
function handleClickT(event) {
    console.log(event.key);
    if(event.key === 't') {
        document.documentElement.classList.toggle('textomaior');
    }
}
  
window.addEventListener('keydown', handleClickT);