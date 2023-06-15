window.addEventListener('scroll',reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

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
