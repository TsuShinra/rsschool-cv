$(document).ready(function () {
    $('.header__burger').click(function(event) {
        $('.header__burger, .menu, .header__burger::after').toggleClass('someActive');
    });
}); 
const anchors = document.querySelectorAll('a[href*="#"]')

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
// const line1 = "1. valid. checked. +10";
// const line2 = "2. semantic. more than 10 different tags. +20"
// const line3 = "3. many styles there are. +10"
// const line4 = "4. is centered, backgroud color is there. +10"
// const line5 = "5. is adaptive. spent most f the time on this one. +10"
// const line6 = ""
// const line7 =
// const line8 =
// const line9 =
// const line10 =
// const line11 =
// const line12 =
// const line13 =
// const line14 =
// const line15 =
// const line16 =
// console.log(
//     "Self-check:\n 1. valid. checked. +10 \n 2."
// )