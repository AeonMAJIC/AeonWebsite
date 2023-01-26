//Écrit par Florian Boireau

var slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("custom-slider");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

//Initialisation au prélancement
window.addEventListener("DOMContentLoaded", function()
{
    //Mise a jour de la taille de la barre derriere la barre du haut pour que rien ne soit caché par celle-ci
    let barreTopHeight = document.getElementsByClassName("BarreTop")[0].clientHeight;
    document.getElementsByClassName("DerriereBarreTop")[0].style.height = barreTopHeight + "px";

    //Mise a jour de la taille des elements hyperlink vers les ancres pour tous match ensemble
    let hyperTopWidth = document.getElementById("top3").clientWidth;
    document.getElementById("top1").style.width = hyperTopWidth + "px";
    document.getElementById("top2").style.width = hyperTopWidth + "px";
    document.getElementById("top3").style.width = hyperTopWidth + "px"; //pour une raison inconnu la taille change quand on modifie les deux autres

    //Mise a jour de la taille des boutons pour tous match ensemble
    let arrayBtn = [document.getElementById("btn1"), document.getElementById("btn2"), document.getElementById("btn3")]

    let widthmax  = 0;
    let heightmax = 0;
    for (let index = 0; index < arrayBtn.length; index++)
    {
        if(arrayBtn[index].clientWidth > widthmax)
            widthmax = arrayBtn[index].clientWidth;

        if(arrayBtn[index].clientHeight > heightmax)
            heightmax = arrayBtn[index].clientHeight;
    }

    document.getElementById("btn1").style.width = widthmax + "px";
    document.getElementById("btn2").style.width = widthmax + "px";
    document.getElementById("btn3").style.width = widthmax + "px";

    document.getElementById("btn1").style.height = heightmax + "px";
    document.getElementById("btn2").style.height = heightmax + "px";
    document.getElementById("btn3").style.height = heightmax + "px";
    
});

//Initialisation au lancement
window.addEventListener("load", function()
{
    showSlides(slideIndex);
});