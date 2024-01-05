

/* function bg(){
    
    var scroll=window.scrollY;
    console.log(scroll);
}
window.addEventListener('scroll',  bg */ /* ()=>{
    
    
    if(window.scrollY > 0){
        nav.classList.add("bgcolor")
    }
    else{
        nav.classList.remove("bgcolor")
    }
} *///);
/* let scroll=document.body.scrollTop;
let nav=document.querySelector("nav")
window.addEventListener('scroll',()=>{
    
    console.log(scroll);

    if (scroll > 10) {
        nav.classList.remove("bgcolor")
    } else {
        nav.classList.add("bgcolor")
    }
    
    

}) */

/* window.addEventListener('scroll', ()=> {
     navbar = document.getElementsByClassName('navbar');
    if (window.scrollY > 100) {
    navbar.style.backgroundColor = '#333';
    navbar.style.padding = '10px 0';
    } else {
    navbar.style.backgroundColor = 'transparent';
    navbar.style.padding = '20px 0';
    }
});
 */
let navbar = document.querySelector(".navbar");
window.addEventListener('scroll', ()=> {
    if (window.scrollY > 100) {
      console.log(window.scrollY)
      navbar.classList.add("bgcolor");
    } else {
      
      navbar.classList.remove("bgcolor");
    }
  });

