document.addEventListener('scroll', ()=>{
    const navbar = document.querySelector('.navbar')
    if(window.scrollY > 0){
        navbar.classList.add('scrolled')
    }else{
        navbar.classList.remove('scrolled')
    }
})

document.querySelector('.navbar-toggler').addEventListener("click",()=>{

    navbar = document.querySelector('.navbar');
    navLinks = document.querySelectorAll('.nav-link');
    togglerIcon = document.querySelector('.navbar-toggler-icon');
    ariaExpanded = document.getElementById("toggler").getAttribute('aria-expanded');

    if(ariaExpanded==="true")
    {
        togglerIcon.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`;

        navbar.style.transition = "background-color 0.7s ease-in-out";
        navbar.style.backgroundColor = "rgba(250, 250, 250, 0.89)";
        navbar.style.opacity="0.98";
        navbar.style.backdropFilter = "saturate(180%) blur(20px)";

        for(var i=0; i<navLinks.length; i++){
            navLinks[i].style.color = "black";
        }
    }
    else{
        if(window.scrollY >= 477){
            togglerIcon.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`;

        } else{
            togglerIcon.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`;

        }

        navbar.style.transition = "";
        navbar.style.backgroundColor = "";
        navbar.style.opacity="";
        navbar.style.backdropFilter = "";

        for(var i=0; i<navLinks.length; i++){
            navLinks[i].style.color = "white";
        }
    }
    
})