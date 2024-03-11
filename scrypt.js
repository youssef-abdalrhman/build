var nav =document.querySelector(".navbar")
var navL =document.querySelector(".nav-link")


window.onscroll =function(){
    if(scrollY >= 50){
        nav.style.backgroundColor=" #fff"
    }
    if(scrollY<=50){
        nav.style.backgroundColor="transparent"

    }
}
