//TRABALHANDO COM CLASSES E ATRIBUTOS

//Selecionado a classe menu

const menu = document.querySelector('.header-menu');
//Retorna uma string
console.log(menu);

//Retorna uma lista de classes
console.log(menu.classList);

//Adiciona uma classe
menu.classList.add('azul');
console.log(menu.classList);

//O toggle pode remover ou adicionar a lista
menu.classList.toggle('teste');

console.log(menu.classList);

//Remover classe
menu.classList.remove('teste');
console.log(menu.classList);

//Verificando se tem a classe
if(menu.classList.contains('azul'))
    console.log("Tem a classe azul");

//Retorna uma string
console.log(menu.className);

//OUTRAS FORMAS DE ADICIONAR OU REMOVER CLASSES
//Alterando o valor da string
menu.className = "header-menu";
console.log(menu.className);

//Adcionando classe por string

menu.className = menu.classList + " teste";
console.log(menu.className);

menu.className += " teste";
console.log(menu.className);


//ATTRIBUTES retorno um array de atributos do elemento selecionado

const animais = document.querySelector('.introducao-animais');
console.log(animais);
console.log(animais.attributes);
console.log(animais.attributes[1]);

//getAttribute e setAttribute
const imagem = document.querySelector('img');
console.log(imagem.getAttribute('src'));

//Alterando valor do alt
imagem.setAttribute('alt', 'Raposa');
console.log(imagem.getAttribute('alt'));

//Verifica se tem retornando um verdadeiro ou falso
let temAlt = imagem.hasAttribute('alt');
console.log(temAlt);

//Remover um atributo
imagem.removeAttribute('alt');
temAlt = imagem.hasAttribute('alt');
console.log(temAlt);

//SEMPRE VERIFICAR SE O A PROPRIEDADE É read only OU Writable


//EXERCÍCIOS DE FIXAÇÃO

//Adicione a classe ativo em todos os itens do menu
const itensMenu = document.querySelectorAll('.header-menu a');
itensMenu.forEach(item => item.classList.add('ativo'));
console.log(itensMenu);

//Remover a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach(item => item.classList.remove('ativo'));
itensMenu[0].classList.add('ativo');
console.log(itensMenu);

//Verifique se as imagens possuem o atributo alt
const atrImagens = document.querySelectorAll('img');
let possuiAlt;
atrImagens.forEach(item =>{
    possuiAlt = item.hasAttribute('alt')
    console.log(possuiAlt)
    
});