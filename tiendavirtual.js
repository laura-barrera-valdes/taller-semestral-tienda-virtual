let swiper = new Swiper(".mySwiper", {
    /* spaceBetween: 30, es para poner espacio entre las imagenes*/
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  /* Inicio del Modal */

let modal = document.getElementById('popup-modal');
let span = document.getElementsByClassName("modal-close")[0];

span.onclick = function() {
modal.style.display = "none";
}
window.onload = function() {
setTimeout(function() {
modal.style.display = 'block';
}, 0);
}
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}

  /*Final del Modal */
