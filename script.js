

var  generalBtn = document.getElementById('general-btn');
var  totalBtn = document.getElementById('total-btn');

generalBtn.addEventListener("click", function(evt) {
    console.log(evt.target);
    generalBtn.classList.toggle('inbox__switcher-button--active');
    totalBtn.classList.toggle('inbox__switcher-button--active');
});

totalBtn.addEventListener("click", function(evt) {
    console.log(evt.target);
    generalBtn.classList.toggle('inbox__switcher-button--active');
    totalBtn.classList.toggle('inbox__switcher-button--active');
});

// function changeClass() {
//     /* если кликнули по активному элменту, то ничего не происходит
//      if(evt.target !== !active) {
//      generalBtn.classList.toggle('inbox__switcher-button--active');
//     totalBtn.classList.toggle('inbox__switcher-button--active');
//        }
//     */
// }
// console.log('text');  это для проверки реакции в консоль