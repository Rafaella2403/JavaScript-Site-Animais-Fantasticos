//Criando o processo de navegação por tabs
const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabDescricao = document.querySelectorAll('.js-tabdescricao section');

//Verificando se os itens existe na tela

if(tabMenu.length > 0 && tabDescricao.length > 0){
    tabDescricao[0].classList.add('ativo');

    //Função responsável por adicionar a classe ativo ao elemento selecionar e remover dos demais elementos
    ativarTab = function(index){
        tabDescricao.forEach(section => {
            section.classList.remove('ativo');
        });
        tabDescricao[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', () => {
            ativarTab(index);
        })
    });
}