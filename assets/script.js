

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
let scroll=document.body.scrollTop;
let nav=document.querySelector("nav")
window.addEventListener('scroll',()=>{
    //scroll > 0 ? nav.classList.add("bgcolor") : nav.classList.remove("bgcolor");
    console.log(scroll);
    /* if(scroll > 0){
        nav.classList.add("bgcolor")
    } */
    if (scroll > 10) {
        nav.classList.remove("bgcolor")
    } else {
        nav.classList.add("bgcolor")
    }
    
    

})


