function hamburguesa(){
    const hamb = document.getElementById("navbar-hamb")
    const open = document.getElementById("main-hamb")

    hamb.addEventListener("click",()=>{
        open.classList.toggle('desc')
    });
}
hamburguesa();