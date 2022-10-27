/* INICIO CARRUSEL */
let swiper = new Swiper(".mySwiper", {
  /* spaceBetween: 30, es para poner espacio entre las imagenes*/
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
/* FINAL CARRUSEL */

/* INICIO MODAL */
let modal = document.getElementById('popup-modal');
let span = document.getElementsByClassName("modal-close")[0];

span.onclick = function () {
  modal.style.display = "none";
}
window.onload = function () {
  setTimeout(function () {
    modal.style.display = 'block';
  }, 0);
}
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
/* FINAL MODAL */

/* INICIO ROPA */
displayProducts();

function displayProducts() {
  const productsSection = document.getElementById('products-continer')

  products.forEach(data => {

    const card = document.createElement('article')
    card.classList.add('card')
    card.innerHTML = `
    <div class="card-image">
      <img class="card-inner-image" src="${data.imgUrl}">
      <div class="card-title iconos">
        <a href="#!" class="shoppingcartlink"><i class="material-icons iconshoppingcart">shopping_cart</i></a>
        <a href="#!" class="shoppingcartlink"><i class="material-icons iconshoppingcart">favorite</i></a>
      </div>
    </div>
    <div class="card-content">
      <a href="./detalle/detalle.html/?nombre=${data.nombre}"><span class="card-title">${data.nombre}</span></a>
      <p><b>$ ${data.precio}}</b></p>
    </div>
    `
  });
}