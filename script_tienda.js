const carrito = [];
const agregarBtns = document.querySelectorAll('.agregar-btn');
const carritoContainer = document.createElement('div');
carritoContainer.classList.add('carrito');
document.body.appendChild(carritoContainer);

agregarBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const producto = btn.parentElement;
    const nombre = producto.querySelector('p').textContent;
    const precio = parseInt(producto.querySelector('.precio').textContent);
    const imagen = producto.querySelector('img').src;

    const productoCarrito = { nombre, precio, imagen };
    carrito.push(productoCarrito);
    actualizarCarrito();
  });
});

function actualizarCarrito() {
  carritoContainer.innerHTML = `
    <div class="carrito-contenido">
      <h3>Carrito de Compras</h3>
      <div class="productos-en-carrito">
        ${carrito.map(item => `
          <div class="producto-en-carrito">
            <img src="${item.imagen}" alt="${item.nombre}">
            <p>${item.nombre}</p>|||
            <p>${item.precio} MXN</p>
          </div>
        `).join('')}
      </div>
      <div class="total">
        <p>Total: ${calcularTotal()} MXN</p>
      </div>
      <div class="acciones-carrito">
        <button class="vaciar-btn">Vaciar Carrito</button>
        <button class="comprar-btn">Comprar</button>
      </div>
    </div>
  `;

  const vaciarBtn = carritoContainer.querySelector('.vaciar-btn');
  const comprarBtn = carritoContainer.querySelector('.comprar-btn');
  vaciarBtn.addEventListener('click', () => {
    carrito.length = 0;
    actualizarCarrito();
    alert('El carrito ha sido vaciado');
  });
  comprarBtn.addEventListener('click', () => {
    carrito.length = 0;
    actualizarCarrito();
    alert('Gracias por tu compra');
  });

  if (carrito.length === 0) {
    carritoContainer.style.display = 'none';
  } else {
    carritoContainer.style.display = 'block';
  }
}

function calcularTotal() {
  return carrito.reduce((total, item) => total + item.precio, 0);
}
