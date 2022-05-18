const botaoMenu = document.querySelector('.cabecalho__menu');
botaoMenu.addEventListener('click',() => {
    const menuLateral = document.querySelector('.menu-lateral');
    menuLateral.classList.toggle('menu-lateral--ativo');
});



const linksMenu = document.querySelectorAll('.menu-lateral__link');
console.log(linksMenu);
linksMenu.forEach((linkMenu) =>{
    linkMenu.addEventListener('click',()=>{
        linksMenu.forEach((element)=>{
           if(element == linkMenu){
                element.classList.add('menu-lateral__link--ativo');
           } else{
            element.classList.remove('menu-lateral__link--ativo');               
           }
        });
    });
});



