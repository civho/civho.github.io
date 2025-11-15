document.querySelector('nav').innerHTML = `
    <div class="container">
      <button class="navbar-toggler shadow-none bg-light" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon shadow-none bg-light"></span>
      </button>
      <div class="collapse navbar-collapse col-1" id="navbarNav">
        <ul class="navbar-nav w-100 justify-content-between">
          <li class="nav-item">
            <a class="nav-link fw-bold" href="index.html">Inicio</a>

          </li>
          <li class="nav-item">
            <a class="nav-link fw-bold" href="categories.html">Categorías</a>
          </li>
          <li class="nav-item">
            <a class="nav-link fw-bold" href="sell.html">Vender</a>
          </li>
          <div class="d-flex align-items-center gap-3 rounded-pill bg px-1">
           <img id="nav-profile-pic" src="img/img_perfil.png" alt="Foto de perfil" class="rounded-circle"width="30" height="30" />
            <li class="nav-item dropdown mb-0 d-flex d-row ">
            
              <a class="nav-link dropdown-toggle d-flex align-items-center" href="login.html" id="nickname"
                role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span id="nav-username"></span>
              </a>
              <ul class="dropdown-menu" aria-labelledby="nickname">
                <li><a class="dropdown-item" href="my-profile.html">configurar</a></li>
                <li><a class="dropdown-item" href="index.html" id="cerrar">Cerrar Sesion</a></li>
              </ul>
            </li>
            <select id="themeSwitch" class="d-none">
              <option value="auto">auto</option>
              <option value="light">lightmode</option>
              <option value="dark">darkmode</option>
            </select>
            <li class="nav-item dropdown mb-0"> <a class="nav-link" href="#" id="themeDropdown" role="button"
                data-bs-toggle="dropdown" aria-expanded="false">
                <span id="themeIcon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-highlights" viewBox="0 0 16 16">
                    <path
                      d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-8 5v1H4.5a.5.5 0 0 0-.093.009A7 7 0 0 1 3.1 13zm0-1H2.255a7 7 0 0 1-.581-1H8zm-6.71-2a7 7 0 0 1-.22-1H8v1zM1 8q0-.51.07-1H8v1zm.29-2q.155-.519.384-1H8v1zm.965-2q.377-.54.846-1H8v1zm2.137-2A6.97 6.97 0 0 1 8 1v1z" />
                  </svg>
                </span>
              </a>
              <ul class=" dropdown-menu dropdown-menu-end shadow-sm aria-labelledby=" themeDropdown">
                <li><button class="dropdown-item d-flex align-items-center justify-content-center" data-theme="auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="currentColor"
                      class="bi bi-highlights " viewBox="0 0 16 16">
                      <path
                        d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-8 5v1H4.5a.5.5 0 0 0-.093.009A7 7 0 0 1 3.1 13zm0-1H2.255a7 7 0 0 1-.581-1H8zm-6.71-2a7 7 0 0 1-.22-1H8v1zM1 8q0-.51.07-1H8v1zm.29-2q.155-.519.384-1H8v1zm.965-2q.377-.54.846-1H8v1zm2.137-2A6.97 6.97 0 0 1 8 1v1z" />
                    </svg>

                  </button>
                </li>
                <li><button class="dropdown-item d-flex align-items-center justify-content-center" data-theme="light">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                      class="bi bi-sun-fill" viewBox="0 0 16 16">
                      <path
                        d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                    </svg>

                  </button>
                </li>
                <li><button class="dropdown-item d-flex align-items-center justify-content-center" data-theme="dark">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" fill="currentColor"
                      class="bi bi-moon-stars-fill" viewBox="0 0 16 16"> \
                      <path
                        d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278" />
                      <path
                        d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.73 1.73 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.73 1.73 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.73 1.73 0 0 0 1.097-1.097zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
                    </svg>

                  </button>
                </li>
              </ul>
          </div>
          <li class="nav-item dropdown">
            <a class="nav-link position-relative" href="#" id="cart-dropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bag-heart"
                viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M14 14V5H2v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1M8 7.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
              </svg>
              <span id="cart-count"
                class="position-absolute top-1 start-100 translate-middle badge rounded-pill bg-light text-dark">
                9
                <span class="visually-hidden">items in cart</span>
              </span>
            </a>
            <ul class="dropdown-menu dropdown-menu-end p-3" style="min-width: 300px;">
              <div id="dropdown-menu"> </div>

            </ul>
          </li>
          </li>
        </ul>
      </div>
    </div>`


document.addEventListener("DOMContentLoaded", () => {
  // Obtener datos guardados del usuario y su foto
  let user = extractUser();

   let navPFP = document.getElementById("nav-profile-pic");
  // Buscar los elementos dentro de la navbar
  let nameEl = document.getElementById("nav-username");

  // Mostrar el nombre completo (si existe)
  if (user && nameEl) {
    nameEl.textContent = `${user.nombre || ""} ${user.apellido || ""}`.trim() || "Usuario";
  } else if (nameEl) {
    nameEl.textContent = "Invitado";
  }

  // Mostrar la foto del perfil guardada

    navPFP.src = user.pfp || "img/img_perfil.png";
  

  // Funcionalidad de "Cerrar Sesión"
  let close = document.getElementById("cerrar");
  if (close) {
    close.addEventListener("click", () => {
      localStorage.removeItem("usuario");
      window.location.href = "login.html";
    });
  }

  updateCartDropdown();

});


function updateCartDropdown() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartCount = document.getElementById("cart-count");
  let cartDropdown = document.getElementById("dropdown-menu");

  // Mostrar número de productos totales
  let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;

  if (cart.length === 0) {
    cartDropdown.innerHTML = '<li> <p><em>carrito vacio </em></p></li> <li class="text-center"> <a href="cart.html"> <button id="btn-carrito" class="inset-shadow btn btn-primary"> Ir al carrito </button></a></li> ';
    return;
  }

  // Generar lista de productos
  let subtotalGeneral = 0;
  let itemscart = "";

  cart.forEach(item => {
    let subtotalItem = item.cost * item.quantity; 
    subtotalGeneral += subtotalItem;

    itemscart += ` 
    <li  class="mb-2">
      <div class="d-flex justify-content-between align-items-center">
      <img id="nav-product" class=img src="${item.image}" alt="${item.image}" width="50" height="50">
        <div>
          <strong>${item.name}</strong><br />
          <small>${item.currency} ${item.cost} x ${item.quantity}</small>
        </div>
        <button class="btn removeProduct" id='${item.id}'">x</button>
      </div>
      <li>
      <hr class="dropdown-divider"/>
    </li>
    </li>
    `;
  });

   // Mostrar subtotal y link al carrito completo
  cartDropdown.innerHTML = `
    ${itemscart}
          <dl class="row">
      <dt class="col-sm-3">Subtotal</dt>
      <dd class="col-sm-8 text-end" id="cart-total">${cart[0].currency} ${subtotalGeneral.toLocaleString("de-DE")}</dd>
          <li class="text-center"><a href="cart.html">
  <button id="btn-carrito" class="inset-shadow btn btn-primary">
    Ir al carrito
  </button></a>
</li>
  `;
document.querySelectorAll('.removeProduct').forEach(element => {
  element.addEventListener('click', (e) =>{
    e.stopPropagation();
    removeProductCart(element.id)})
  
});

}
function removeProductCart(id) {

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Filtrar el producto que no queremos más
  cart = cart.filter(item => item.id != id);

  // Guardar el nuevo carrito
  localStorage.setItem('cart', JSON.stringify(cart));

  updateCartDropdown();
}

document.addEventListener('DOMContentLoaded', () => {
  const btnCart = document.getElementById('btn-carrito');

  btnCart.addEventListener('click', () => {
    window.location.href = 'cart.html';
  });
});