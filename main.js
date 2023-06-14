
let links = document.querySelectorAll(".header .links ul li a");
let x = links.forEach(function(ele,inde){
    ele.onclick = function(){
        switch(inde){
            case 0 : window.scrollTo({
                top: 966,
                behavior: 'smooth',
              });break;
              case 1 : window.scrollTo({
                top: 1454,
                behavior: 'smooth',
              });break;
              case 2 : window.scrollTo({
                top: 2270,
                behavior: 'smooth',
              });break;
              case 3 : window.scrollTo({
                top: 2112,
                behavior: 'smooth',
              });break;
             
        }
    }
})
let up = document.querySelector(".swap")
up.onclick = function(){
window.scrollTo({
    top:0,
    behavior:"smooth"
})
}
