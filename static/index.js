console.log("Script is running!");
const navbar = document.querySelector("#navbar");
window.addEventListener("scroll",()=>{
    if(window.pageYOffset>0){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }

})



