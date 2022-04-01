//Criando o processo de navegação por tabs
function navegacaoTab(){
    const ativoClass = 'ativo';
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabDescricao = document.querySelectorAll('.js-tabdescricao section');

    //Verificando se os itens existe na tela

    if(tabMenu.length > 0 && tabDescricao.length > 0){
        tabDescricao[0].classList.add(ativoClass);

        //Função responsável por adicionar a classe ativo ao elemento selecionar e remover dos demais elementos
        function ativarTab(index){
            tabDescricao.forEach(section => {
                section.classList.remove(ativoClass);
            });
            tabDescricao[index].classList.add(ativoClass);
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                ativarTab(index);
            })
        });
    }
}

//Configurando o accodion nav
function accordionNav(){ 
    const ativoClass = 'ativo';
    const accordionLista = document.querySelectorAll('.js-accordion dt');
    accordionLista[0].classList.add(ativoClass);
    accordionLista[0].nextElementSibling.classList.toggle(ativoClass);

    function ativarArccodion(){
        this.classList.toggle(ativoClass);
        this.nextElementSibling.classList.toggle(ativoClass);
    }

    accordionLista.forEach(item => {
        item.addEventListener('click', ativarArccodion);
    });
}

//Configurando o scroll suave para os links internos

function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
  
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
  
      // forma alternativa
      // const topo = section.offsetTop;
      // window.scrollTo({
      //   top: topo,
      //   behavior: 'smooth',
      // });
    }
  
    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollToSection);
    });
  }



//Ativando funções
navegacaoTab();
accordionNav();
initScrollSuave();