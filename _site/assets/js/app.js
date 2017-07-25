$(document).foundation();


$(function() {
  setTimeout(function(){
        $('.loader').addClass('loaded');
    }, 1500); 
});

/*
$(function() {
var banner = document.getElementById('banner');
if (sessionStorage.getItem('set') === 'set') {
  banner.style.display = 'none';
} else {
  sessionStorage.setItem('set', 'set');
}
});
*/



// 1. Animate on Scroll
// --------------------

$(function() {
  AOS.init({ 
   offset: 64,
   easing: 'ease-in-out-quart', 
   duration: 600
   });   
});

$(function() {
window.addEventListener('load', AOS.refresh);
});