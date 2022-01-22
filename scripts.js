const elementos=document.querySelectorAll('[data-anime]');
const animacaoClass='animacao';

function animaScroll(){
    const topoPaginaNaJanela=windows.pageYOffset+((window.innerHeight*1000));
    elementos.forEach( function(elemento){
        if(topoPaginaNaJanela > elemento.offsettop){
            elemento.classList.add(animacaoClass);
        }else{
            elemento.classList.remove(animacaoClass)
        }
    });
}

if(elementos.length){
    window.addEventListener('scroll', function(){
        animaScroll();
    })
}
