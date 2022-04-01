//TRABALHANDO COM DIMENSÕES E DISTÂNCIAS

const section = document.querySelector('.introducao-animais');

// height + padding
section.clientHeight;
// height + padding + border
section.offsetHeight; 
// height total, mesmo dentro de scroll
section.scrollHeight; 

// Distância entre o topo do elemento e o topo da página
section.offsetTop;

// Distância entre o canto esquerdo do elemento e o canto esquerdo da página
section.offsetLeft;

const rect = section.getBoundingClientRect();

// height do elemento
rect.height; 
// width do elemento
rect.width;
// distância entre o topo do elemento e o scroll 
rect.top; 

// width do janela
window.innerWidth; 
// soma dev tools também
window.outerWidth;
// height do janela
window.innerHeight; 
// soma a barra de endereço
window.outerHeight; 
// distância total do scroll vertical
window.pageYOffset; 
// distância total do scroll horizontal
window.pageXOffset; 

if(window.innerWidth < 600) {
  console.log('Tela menor que 600px');
}

const small = window.matchMedia('(max-width: 600px)');

if(small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}

//EXERCÍCIOS DE FIXAÇÃO 

// Verifique a distância da primeira imagem em relação ao topo da página
const img = document.querySelector('img');
const imgTop = img.offsetTop;
console.log(imgTop);

// Retorne a soma da largura de todas as imagens
//Obs.: Como pode acontecer do do js carregar antes da imagem é necessário colocar dentro do onload
function somaLarguraImagens(){
    let somaLargura = 0;
const imgs = document.querySelectorAll('img');
    imgs.forEach(item => {
        somaLargura += item.offsetWidth
    });
    console.log(somaLargura);
};

window.onload = function(){
    somaLarguraImagens();
}

/* Verifique se os links da página possuem o mínimo recomendado para telas utilizadas
com o dedo. (48px/48px de acordo com o google)*/
const links = document.querySelectorAll('a');
links.forEach(link => {
    if(link.offsetWidth < 48 && link.offsetHeight < 48)
        console.log("Link está abaixo dos padrões");
    else 
        console.log("Link dentro dos padrões");
});

// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu

const tamanhoTela = window.matchMedia('(max-width: 720px)');
const menu = document.querySelector('.header-menu');

if(tamanhoTela.matches)
    menu.classList.add('menu-mobile')

console.log(menu.classList);

menu.classList.remove('menu-mobile');