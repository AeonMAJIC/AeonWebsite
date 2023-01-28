//Écrit par Florian Boireau


//CARROUSSEL
var slideIndex = 1;

function plusSlides(diapositiveNumber, diaporamaNumber)
{
    showSlides(slideIndex += diapositiveNumber, diaporamaNumber);
}

function currentSlide(diapositiveNumber, diaporamaNumber)
{
    showSlides(slideIndex = diapositiveNumber, diaporamaNumber);
}

function showSlides(diapositiveNumber, diaporamaNumber)
{
    var i;
    var slides    = document.querySelectorAll('.custom-slider[data-groupe="' + diaporamaNumber + '"]');
    var selectors = document.querySelectorAll('.selector[data-groupe="'      + diaporamaNumber + '"]');

    if (diapositiveNumber > slides.length)
        slideIndex = 1
    if (diapositiveNumber < 1)
        slideIndex = slides.length

    for (i = 0; i < slides.length; i++)
        slides[i].style.display = "none";
    for (i = 0; i < selectors.length; i++)
        selectors[i].className = selectors[i].className.replace(" active", "");

    slides[slideIndex-1].style.display = "block";
    selectors[slideIndex-1].className += " active";
}

function firstBar()
{
    //Mise a jour de la taille de la barre derriere la barre du haut pour que rien ne soit caché par celle-ci
    let barreTopHeight = document.getElementsByClassName("BarreTop")[0].clientHeight;
    document.getElementsByClassName("DerriereBarreTop")[0].style.height = barreTopHeight + "px";

    //Mise a jour de la taille des elements hyperlink vers les ancres pour tous match ensemble
    let hyperTopWidth = document.getElementById("top3").clientWidth;
    document.getElementById("top1").style.width = hyperTopWidth + "px";
    document.getElementById("top2").style.width = hyperTopWidth + "px";
    document.getElementById("top3").style.width = hyperTopWidth + "px"; //pour une raison inconnu la taille change quand on modifie les deux autres
}

function firstSelectors(diaporamaNumber)
{
    var slides    = document.querySelectorAll('.custom-slider[data-groupe="' + diaporamaNumber + '"]');
    var selectors = document.querySelectorAll('.selector[data-groupe="'      + diaporamaNumber + '"]');

    for (var i = 0; i < selectors.length; i++)
    {
        selectors[i].style.backgroundImage = 'url(' + slides[i].querySelector('.slide-img').src + ')';
    }



    showSlides(slideIndex, diaporamaNumber);
}

function firstDownloadButtons()
{
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
}

function firstUpdate()
{
    firstBar();
    firstDownloadButtons();
    firstSelectors(1);
    firstSelectors(2);
}

//Initialisation au prélancement
window.addEventListener("DOMContentLoaded", function()
{
    firstUpdate();
});