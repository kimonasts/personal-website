window.addEventListener('scroll',reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    var navbarTogglerIcon = document.querySelector('.navbar-toggler-icon');

    if (window.scrollY >= 477){
        navbarTogglerIcon.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`;
    }
    else{
        navbarTogglerIcon.style.backgroundImage = `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e")`;
    }
    for(var i=0; i<reveals.length; i++){
        var windowHeight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint=50;
        if(revealtop < windowHeight - revealpoint){
            reveals[i].classList.add('active');

        }else{
            reveals[i].classList.remove('active');
        }
    }
}

window.addEventListener('scroll',revealProgress);
    function revealProgress(){
        var progressBars = document.querySelectorAll('.progress-bar');
        var percentages = ["75%","75%","68%","64%","64%","64%","62%","60%","60%","55%","55%","55%"]

        for(var i=0; i<progressBars.length; i++){
            var windowHeight = window.innerHeight;
            var revealtop = progressBars[i].getBoundingClientRect().top;
            if(revealtop < windowHeight){
                progressBars[i].classList.add('active');
                progressBars[i].style.setProperty("--width",percentages[i])
            }else{
                progressBars[i].classList.remove('active');
                progressBars[i].style.setProperty("--width","0%")
            }
        }
    }
