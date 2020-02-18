$(document).ready(function(){
    $('#slides').superslides({
        animation: "fade",
        play: 5000,
        pagination:false
    });
    
    var typed = new Typed(".typed",{
        strings: [ "Front End Developer.", "web developer","student"],
        typeSpeed: 100,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });
    
});