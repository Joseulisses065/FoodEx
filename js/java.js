const header = document.querySelector("header");


//adicionando uma classe ao header para quando o scroll for maior que 0
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 0);
})
function menu(){
   const nav = document.querySelector("nav")
    if(getComputedStyle(nav).top!='62px'){
        nav.style.transition = '0.6s'
        nav.style.top="62px";
    }else{
        nav.style.transition = '0.6s'
        nav.style.top="-200vh";
    }
}





