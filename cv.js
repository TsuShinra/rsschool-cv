$(document).ready(function () {
    $('.header__burger').click(function(event) {
        $('.header__burger, .menu, .header__burger::after').toggleClass('someActive');
    });
}); 


const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const blockID = anchor.getAttribute('href').substr(1);
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}


const line1 = "1. valid. checked. +10";
const line2 = "2. semantic. more than 10 different tags. +20";
const line3 = "3. many styles there are. +10";
const line4 = "4. is centered, backgroud color is there. +10";
const line5 = "5. is adaptive. spent most f the time on this one. +10";
const line6 = "6. burger is there! and anchor links are smooth +10";
const line7 = "7. Photo with the alt is there +10";
const line8 = "8. contacts and skills are ul-li +10";
const line9 = "9. all the info is there +10";
const line10 = "10. the code is highlighted, but highlight.js stopped working by the link, so I found another way +10";
const line11 = "11. The links are there. Not much, but hey, I'm just starting +10";
const line12 = "12. ENGLISH. OF COURSE! THIS ONE TOO! +10";
const line13 = "13. Pull Request is carefully done. +10";
const line14 = "14. no video, no points here. I'm a bit shy, but trying to overcome it";
const line15 = "15. Design is no lower than those CVs... Weeeeellll... IDK. 5 maybe? I'm in no way a designer :(";
const line16 = "TOTAL: 145";
console.log(
    `Self-check:\n${line1}\n${line2}\n${line3}\n${line4}\n${line5}\n${line6}\n${line7}\n${line8}\n${line9}\n${line10}\n${line11}\n${line12}\n${line13}\n${line14}\n${line15}\n${line16}`
);