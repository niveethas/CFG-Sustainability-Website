let BWbox = document.querySelector('#BWBox');

let navBG = document.querySelector('.bg-colour-bold');

let introBox = document.querySelector('.Home-left-side');

let introText = document.querySelector('#intro-para');

let footerBG = document.querySelector('.myFooter');

let footerRight = document.querySelectorAll('.right-side-footer a');

var k;

BWbox.addEventListener('click', function(){
    navBG.setAttribute('id','newNavBG');
    introBox.setAttribute('id','newText');
    introText.setAttribute('id','newContentText');
    BWbox.setAttribute('id','newBWBox');
    footerBG.setAttribute('id','newFooterBG');  
    for (k=0;k<footerRight.length;k++){
        footerRight[k].setAttribute('id','newFooterText');
        }    
    }
);