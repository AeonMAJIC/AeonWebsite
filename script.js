/*
    Écrit par Florian Boireau
    https://github.com/Skulls23
*/

var aSlideIndex = []; //array of index, every diaporama get a case

/**
 * Show the next slide.
 * @param {*} diapositiveNumber The diapositive number to be shown.
 * @param {*} diaporamaNumber The diaporama (Theme) number.
 */
function plusSlide(diapositiveNumber, diaporamaNumber)
{
    showSlides(aSlideIndex[diaporamaNumber] += diapositiveNumber, diaporamaNumber);
}

/**
 * Show the current slide and put the number of the slide hit inside the array.
 * @param {*} diapositiveNumber The diapositive number to be shown.
 * @param {*} diaporamaNumber The diaporama (Theme) number.
 */
function currentSlide(diapositiveNumber, diaporamaNumber)
{
    showSlides(aSlideIndex[diaporamaNumber] = diapositiveNumber, diaporamaNumber);
}

/**
 * Show the current slide.
 * @param {*} diapositiveNumber The diapositive number to be shown.
 * @param {*} diaporamaNumber The diaporama (Theme) number.
 */
function showSlides(diapositiveNumber, diaporamaNumber)
{
    var i;
    var slides    = document.querySelectorAll('.custom-slider[data-groupe="' + diaporamaNumber + '"]');
    var selectors = document.querySelectorAll('.selector[data-groupe="'      + diaporamaNumber + '"]');

    if (diapositiveNumber > slides.length)
        aSlideIndex[diaporamaNumber] = 1;
    if (diapositiveNumber < 1)
        aSlideIndex[diaporamaNumber] = slides.length;

    for (i = 0; i < slides.length; i++)
        slides[i].style.display = "none";
    for (i = 0; i < selectors.length; i++)
        selectors[i].className = selectors[i].className.replace(" active", "");

    slides[aSlideIndex[diaporamaNumber]-1].style.display = "block";
    selectors[aSlideIndex[diaporamaNumber]-1].className += " active";
}

/** 
 * Initialize the size of the bar behind the top bar to avoid image to hide behind it.
 * Initalize the hyperlink elements in the top bar to match together.
 */
function firstBar()
{

    //Hyperlink elements
    let hyperTopWidth = document.getElementById("top4").clientWidth;
    document.getElementById("top1").style.width = hyperTopWidth + "px";
    document.getElementById("top2").style.width = hyperTopWidth + "px";
    document.getElementById("top3").style.width = hyperTopWidth + "px";
    document.getElementById("top4").style.width = hyperTopWidth + "px"; //For an unknown reason, size change when we modify the others
}

/**
 * Initialize the images inside the diaporama selectors.
 * @param {*} diaporamaNumber The diaporama (Theme) number.
 */
function firstSelectors(diaporamaNumber)
{
    aSlideIndex[diaporamaNumber] = 1; //this allow every diapo to get it own slideIndex number to move between diapositive

    var slides    = document.querySelectorAll('.custom-slider[data-groupe="' + diaporamaNumber + '"]');
    var selectors = document.querySelectorAll('.selector[data-groupe="'      + diaporamaNumber + '"]');

    for (var i = 0; i < selectors.length; i++)
    {
        selectors[i].style.backgroundImage = 'url(' + slides[i].querySelector('.slide-img').src + ')';
    }

    showSlides(aSlideIndex[diaporamaNumber], diaporamaNumber);
}

/** 
 * Initialize the size of download button to match together.
 */
function firstDownloadButtons()
{
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

/**
 * Launch all the elements.
 */
function firstUpdate()
{
    firstBar();

    firstSelectors(0);
    firstSelectors(1);
    firstSelectors(2);

    firstDownloadButtons();
}

//Prelaunch initialization
window.addEventListener("DOMContentLoaded", function()
{
    firstUpdate();
});