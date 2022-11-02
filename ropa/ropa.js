displayProducts();

function displayProducts() {
  const productsSection = document.getElementById('products-container')

  data.forEach(product => {

    const card = document.createElement('article')
    card.classList.add('card')
    card.innerHTML = `
    <div class="card-image">
      <img class="card-inner-image" src="${product.ruta_img}">
      <div class="card-title iconos">
        <a href="#!" class="shoppingcartlink"><i class="material-icons iconshoppingcart">shopping_cart</i></a>
        <a href="#!" class="shoppingcartlink"><i class="material-icons iconshoppingcart">favorite</i></a>
      </div>
    </div>
    <div class="card-content">
      <a href="../detalle/detalle.html?nombre=${product.nombre}" class="nombre"><span class="card-title">${product.nombre}</span></a>
      <p><b>$ ${product.precio}</b></p>
    </div>
    `
    productsSection.append(card)
  });
}