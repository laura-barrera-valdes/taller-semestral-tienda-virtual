let swiper = new Swiper(".mySwiper", {
    /* spaceBetween: 30, es para poner espacio entre las imagenes*/
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

console.log(new URLSearchParams(window.location.search).get('nombre'));
console.log(data.id);
console.log(data);

const nameQueryParam = new URLSearchParams(window.location.search).get('nombre');
let product;
searchProduct();
renderProduct();

function searchProduct() {
    product = data.find((item) => nameQueryParam === item.nombre);
    console.log(product);
};

function renderProduct() {
    const title = document.getElementById('title');
    const price = document.getElementById('price');
    const img = document.getElementById('img');
    const img2 = document.getElementById('img2');
    const type = document.getElementById('type');
    const collection = document.getElementById('collection');

    title.textContent = product.nombre;
    price.textContent = product.precio;
    type.textContent = product.tipo_prenda;
    collection.textContent = product.coleccion;

    img.setAttribute('src', product.ruta_img);
    img2.setAttribute('src', product.ruta_img_hover);
};