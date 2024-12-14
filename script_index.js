document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".productos");
  const products = document.querySelectorAll(".producto");
  const productDetails = document.createElement("div");
  productDetails.classList.add("product-details");

  const overlay = document.createElement("div");
  overlay.classList.add("product-details-overlay");
  document.body.appendChild(overlay);

  document.body.appendChild(productDetails);

  const productData = [
    { names: "iPhone 15 Pro (128 GB)", description: "Smartphone con pantalla OLED, chip A17 Pro y cámaras avanzadas.", price: "$22,999 MXN", link: "tienda.html" },
    { names: "Sony WH-1000XM5", description: "Auriculares inalámbricos con cancelación de ruido y calidad de sonido premium.", price: "$8,999 MXN", link: "tienda.html" },
    { names: "Apple Watch Series 9 (41 mm)", description: "Reloj inteligente con funciones de salud y fitness avanzadas.", price: "$9,499 MXN", link: "tienda.html" },
    { names: "MacBook Air M2 (256 GB)", description: "Laptop ultraligera con procesador M2, ideal para productividad.", price: "$23,999 MXN", link: "tienda.html" },
    { names: "Samsung Galaxy Tab S9 (128 GB)", description: "Tableta premium con pantalla AMOLED y compatibilidad con S Pen.", price: "$19,499 MXN", link: "tienda.html" },
    { names: "PlayStation 5 (Standard Edition)", description: "Consola de videojuegos de última generación con gráficos 4K.", price: "$13,499 MXN", link: "tienda.html" },
    { names: "Samsung Neo QLED 55\" 4K (QN90B)", description: "Televisor QLED con HDR10+ y tasa de refresco de 120 Hz.", price: "$29,999 MXN", link: "tienda.html" },
    { names: "DJI Mini 4 Pro", description: "Drone compacto con cámara 4K y detección de obstáculos.", price: "$16,999 MXN", link: "tienda.html" },
    { names: "Google Nest Hub (2ª generación)", description: "Pantalla inteligente para el hogar con control por voz.", price: "$3,999 MXN", link: "tienda.html" },
    { names: "GoPro Hero 12 Black", description: "Cámara de acción resistente al agua con grabación 5.3K.", price: "$9,999 MXN", link: "tienda.html" },
  ];

  let interval = setInterval(() => {
    carousel.appendChild(carousel.firstElementChild);
  }, 3000);

  products.forEach((product, index) => {
    product.addEventListener("click", () => {
      const { names, description, price, link } = productData[index];

      productDetails.innerHTML = `
        <button class="close-button">X</button>
        <h3>${names}</h3>
        <p>${description}</p>
        <p>Precio: ${price}</p>
        <a href="${link}" target="_blank" class="buy-button">Ir a la tienda</a>
      `;

      // Mostrar la ventana modal y el fondo oscuro
      productDetails.style.display = "block";
      overlay.style.display = "block";

      const closeButton = productDetails.querySelector(".close-button");
      closeButton.addEventListener("click", () => {
        // Ocultar la ventana modal y el fondo oscuro cuando se cierra
        productDetails.style.display = "none";
        overlay.style.display = "none";
      });

      // También permitir cerrar la ventana modal al hacer clic en el fondo oscuro
      overlay.addEventListener("click", () => {
        productDetails.style.display = "none";
        overlay.style.display = "none";
      });
    });
  });
});
