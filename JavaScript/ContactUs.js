let BWbox = document.querySelector('#BWBox');

let navBG = document.querySelector('.bg-colour-bold');

let introText = document.querySelector('#contactUs-intro');

let footerBG = document.querySelector('.myFooter');

let footerRight = document.querySelectorAll('.right-side-footer a');

var k;

BWbox.addEventListener('click', function(){
    navBG.setAttribute('id','newNavBG');
    introText.setAttribute('id','newContentText');
    BWbox.setAttribute('id','newBWBox');
    footerBG.setAttribute('id','newFooterBG'); 
    for (k=0;k<footerRight.length;k++){
        footerRight[k].setAttribute('id','newFooterText');
        }
    }
);