/*This changes site to B&W*/
let BWbox = document.querySelector('#BWBox');

let navBG = document.querySelector('.bg-colour-bold');

let introText = document.querySelector('#intro-para');
let mainTextHeader = document.querySelectorAll('.main-body h3');
let mainText = document.querySelectorAll('.main-balcony-content');

let plantsTextBG = document.querySelector('#plants-list');
let waterTextBG = document.querySelector('#water-list');
let compostTextBG = document.querySelector('#compost-list');

let footerBG = document.querySelector('.myFooter');
let footerRight = document.querySelectorAll('.right-side-footer a');

var i;
var j;
var k;

BWbox.addEventListener('click', function(){
        navBG.setAttribute('id','newNavBG');

        introText.setAttribute('id','newContentText');
        for (i=0;i<mainTextHeader.length;i++){
            mainTextHeader[i].setAttribute('id','newH3');
        }
        for (j=0;j<mainText.length;j++){
            mainText[j].setAttribute('id','newText');
        }

        plantsTextBG.setAttribute('id','newText');
        waterTextBG.setAttribute('id','newText');
        compostTextBG.setAttribute('id','newText');

        BWbox.setAttribute('id','newBWBox');
        footerBG.setAttribute('id','newFooterBG'); 
        for (k=0;k<footerRight.length;k++){
            footerRight[k].setAttribute('id','newFooterText');
        }
    }
);


