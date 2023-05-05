let pl1 = document.getElementById('pl1');
let pl2 = document.getElementById('pl2');
window.onscroll = function(){
    let value = scrollY;
    pl1.style.top =value *3 +'px';
    pl2.style.left =value +'px';
}