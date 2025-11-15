document.addEventListener('DOMContentLoaded', ()=>{
    let container =  document.querySelector('#container-carrito-final');
    let items = extractCart();

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
                      <input class="text-center w-50" id="${item.id}" name="cant"
                        type="number" value="${item.quantity}" min="1" max="69" readonly>
                    </div>
                  </div>
                  <div class="col-md my-2 fst-italic">
                    Subtotal:
                    <span>${item.currency} ${(item.quantity * item.cost).toLocaleString('de-DE')}</span>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        `).join("")}
      </ul>
    `;

            




});