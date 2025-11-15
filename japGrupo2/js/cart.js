document.addEventListener('DOMContentLoaded', function () {
  let Subtotal = document.getElementById('subtotal')
  let Total = document.getElementById('total')

  const container = document.querySelector("#container-carrito");
  document.querySelectorAll('input[name="envio"]').forEach(element => {
    console.log(element)
    
    element.addEventListener("click", () => displayCart())
  });
  
  // Mostrar el carrito
  function displayCart() {
    let items = extractCart() || []; //descarga el carrito
    convert(items);

    if (items.length === 0) {
      container.innerHTML = `<p class="text-center">Tu carrito está vacío.</p>`;
      
    }else {

    container.innerHTML = `
      <ul class="list-group mx-5">
        ${items.map(item => `
          <li class="list-group-item">
            <div class="row align-items-center w-100 justify-content-center">
              <img src="${item.image}" alt="" class="prod-img">
              <div class="col">
                <div class="row text-center align-items-center" id="dataCart">
                  <div class="col-md my-2 fw-bold">${item.name}</div>
                  <div class="col-md my-2 fst-italic">
                    Precio: ${item.currency} ${(item.cost).toLocaleString('de-DE')}
                  </div>
                  <div class="col-md my-2 justify-content-center d-flex">
                    <div class="btn-group" role="group">
                      <button type="button" class="btn btn-outline-secondary" data-action="decrement">-</button>
                      <input class="text-center w-50" id="${item.id}" name="cant"
                        type="number" value="${item.quantity}" min="1" max="69">
                      <button type="button" class="btn btn-outline-secondary" data-action="increment">+</button>
                    </div>
                  </div>
                  <div class="col-md my-2 fst-italic">
                    Subtotal:
                    <span>${item.currency} ${(item.quantity * item.cost).toLocaleString('de-DE')}</span>
                  </div>
                  <div class="col">
                    <button class="btn btn-danger remove" data-id="${item.id}">
                      <i class="bi bi-trash-fill"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </li>
        `).join("")}
      </ul>
    `};

    // funciones auxiliares
    amountControl();
    remove();
    updateCartDropdown();
    showSubtotal(calculateSubtotal())
  }

  displayCart();

  // Control de cantidad
 function amountControl() {
  const inputs = document.querySelectorAll('input[name="cant"]');

  inputs.forEach(element => {
    element.addEventListener('input', () => {
      if (element.value > 0 && element.value < 100) {
        updateQuantity(element.id, element.value);
        displayCart();
      }
    });

    
    element.nextElementSibling.addEventListener('click', () => {
      if (element.value > 0 && element.value < 100) {
        element.value++;
        updateQuantity(element.id, element.value);
        displayCart();
      }
    });

    
    element.previousElementSibling.addEventListener('click', () => {
      if (element.value > 1 && element.value < 100) { 
        element.value--;
        updateQuantity(element.id, element.value);
        displayCart();
      }
    });
  });
}

  //  Actualiza cantidad en el carrito
  function updateQuantity(idCart, newQuantity) {
    const items = JSON.parse(localStorage.getItem('cart')) || [];
    const newCart = items.map(item =>
      item.id == idCart ? { ...item, quantity: parseInt(newQuantity) } : item
    );
    localStorage.setItem('cart', JSON.stringify(newCart));
  }

  // Conversión de moneda
  function convert(items) {
     desiredCurrency = document.querySelector('input[name="moneyRadio"]:checked').value
    items.forEach(element => {
      console.log(element.name, element.currency, element.cost,  desiredCurrency == element.currency)
      if (element.currency !== desiredCurrency && desiredCurrency == "UYU") {
        element.cost = element.cost * 40
        console.log(element.cost)
        element.currency = "UYU"
      } else if (element.currency !== desiredCurrency && desiredCurrency == "USD") {
        element.cost = element.cost / 40
        console.log(element.cost)
        element.currency = "USD"
      }

    });
      localStorage.setItem("cart", JSON.stringify(items)) //guarda los valores convertidos de cada item en el carrito
  }

  // Eliminar productos
  function remove() {
    document.querySelectorAll('.remove').forEach(btn => {
      btn.addEventListener('click', e => {
        const id = e.currentTarget.dataset.id;
        removeProductCart(id); // esta funciion viene de navbar donde se encuentra el resto de la funcionalidad de carrito
        displayCart();
      });
    });
  }

  document.querySelectorAll('input[name="moneyRadio"]').forEach(radio => {
    radio.addEventListener('click', displayCart);
  });


 function calculateSubtotal(){  
  cart = extractCart()
  let opSelected = document.querySelector('input[name="envio"]:checked')
  let rawSubtotal = 0;
  let taxTotal = 0 ;

  
      cart.forEach(item => {
        
        rawSubtotal += item.cost * item.quantity
        console.log(rawSubtotal)
      })
    
    //agrega subtotal sin convertir al elemento subtotal

    switch (opSelected.value) {
      case "Standard":
         
          taxTotal = rawSubtotal * 1.05
          return  {taxTotal:taxTotal, rawSubtotal:rawSubtotal}
        break;
      
      case "Express":
        
          taxTotal = rawSubtotal * 1.07
          return  {taxTotal:taxTotal, rawSubtotal:rawSubtotal}
        break;
    
      case "Premium":
       
        taxTotal = rawSubtotal * 1.15
          return  {taxTotal:taxTotal, rawSubtotal:rawSubtotal}
        break;

      default:
        taxTotal = rawSubtotal * 1.05
          return {taxTotal:taxTotal, rawSubtotal:rawSubtotal}
        break;
    }

    
    
 }


 function showSubtotal(totals) {
  let selCurr = document.querySelector('input[name="moneyRadio"]:checked').value || [] 
  
  Total.innerHTML = selCurr + totals.taxTotal.toLocaleString('de-DE')
  Subtotal.innerHTML = selCurr + totals.rawSubtotal.toLocaleString('de-DE')

  
}
 
});



function validateAddress() {
  const departamento = document.getElementById('departamento').value.trim();
  const localidad = document.getElementById('localidad').value.trim();
  const calle = document.getElementById('calle').value.trim();
  const numero = document.getElementById('numero').value.trim();
  const esquina = document.getElementById('esquina').value.trim();

  let valid = true;

  // validar cada campo por separado y aplicar/remover la clase is-invalid
  if (departamento === '') {
    document.getElementById('departamento').classList.add('is-invalid');
    valid = false;
  } else {
    document.getElementById('departamento').classList.remove('is-invalid');
  }

  if (localidad === '') {
    document.getElementById('localidad').classList.add('is-invalid');
    valid = false;
  } else {
    document.getElementById('localidad').classList.remove('is-invalid');
  }

  if (calle === '') {
    document.getElementById('calle').classList.add('is-invalid');
    valid = false;
  } else {
    document.getElementById('calle').classList.remove('is-invalid');
  }

  if (numero === '') {
    document.getElementById('numero').classList.add('is-invalid');
    valid = false;
  } else {
    document.getElementById('numero').classList.remove('is-invalid');
  }

  if (esquina === '') {
    document.getElementById('esquina').classList.add('is-invalid');
    valid = false;
  } else {
    document.getElementById('esquina').classList.remove('is-invalid');
  }
  if (!valid) {
    document.getElementById('collapseDireccion').classList.remove('collapse')
  }

  return valid;
}


function validateShipment() {
  const radio = document.querySelector('input[name="envio"]:checked');

  if (!radio) {
    collapseEnvio.classList.remove('collapse')
    alert('Seleccione un tipo de envío');
    return false;
  }
  return true;
}

function validateQuantity() {
  const items = JSON.parse(localStorage.getItem('cart')) || [];

  if (items.length === 0) {
 //   alert('El carrito está vacío');
    return false;
  }

  return true;
}


function validatePaymentMethod() {
  const formaPagoSeleccionada = document.querySelector('input[name="pago"]:checked');
  let tarjeta = document.getElementById('pago1')
  let transferencia = document.getElementById('pago2')
  let collapsePago =  document.getElementById('collapsePago')

  if (!formaPagoSeleccionada) {
 //   alert('Seleccione una forma de pago');
    collapsePago.classList.remove('collapse')
    tarjeta.classList.add('is-invalid')
    transferencia.classList.add('is-invalid')
    return false;
  }
  tarjeta.classList.remove ('is-invalid')
    transferencia.classList.remove ('is-invalid')
  return true;
}




document.querySelector('#buyBtn').addEventListener('click', (e) => {
      validatePaymentMethod ()
      validateAddress()
      validateShipment()
       validateQuantity()
       
  if (validateAddress() &&
      validateShipment() &&
     validateQuantity() &&
      validatePaymentMethod()) {

     window.location.href = "purchase-complete.html"   

  }
});

