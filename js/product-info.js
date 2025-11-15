let current_ItemId = localStorage.getItem("ItemId");
let current_products_info = PRODUCT_INFO_URL + current_ItemId + EXT_TYPE;
let list = [];
let user =   JSON.parse(localStorage.getItem('usuario'))


document.addEventListener("DOMContentLoaded", function () {
  getJSONData(current_products_info).then(function (result) {
    if (result.status === "ok") {
      list = result.data; //descarga lso elementos y los agrega a  list

      listElements();//lista los elementos de list
      checkImg(); //marca la imagen seleccionada con un borde 
    }
  });
});

let listElements = () => {
  let name = list.name;
  let productCategory = list.category;
  let productDescription = list.description;
  let productCost = list.cost;
  let productCurrency = list.currency;
  let productImages = list.images;
  let productsoldCount = list.soldCount;
  cost = new Intl.NumberFormat('en-US',
    {
      style: 'currency',
      currency: productCurrency
    }).format(productCost) // le da formato al costo para que tenga puntos y comas

  document.getElementById('title').innerHTML = name
  document.getElementById('desc').innerHTML = productDescription
  document.getElementById('cat').innerHTML = productCategory
  document.getElementById('price').innerHTML = cost
  document.getElementById('sold').innerHTML = productsoldCount


  let counter = -1;

  for (img of productImages) {
    counter++
      // carga las imagenes al carousel
    document.getElementById("carousel-inner").innerHTML +=
      ` <div class="carousel-item" id="carousel${counter}">
            <img src="${img}" class="d-block w-100" alt="...">
        </div>`
    //agrega las imagenes como miniatura
    document.getElementById("imgSelectorsPlacer").innerHTML +=
      `<img src="${img}" type="radio" name="imgSelectors" id="img${counter}" role="button" style="width: 15rem;" data-bs-target="#imgcar" data-bs-slide-to="${counter}" 
                  aria-current="true" aria-label="Slide ${counter}" class="img-thumbnail" alt="..."  >`


  }
  document.getElementById("carousel0").classList.add("active") //agrega la primer imagen como seleccionada para que sea cargada en el carousel

  let relatedHTML = "";
  list.relatedProducts.forEach(rel => {
    relatedHTML += `
         <div id="${rel.id}" role="button" class="col grow col-md-3 col-6 col-sm-6">
      <div class="card h-100 shadow-lg">
        <img src="${rel.image}" class="card-img-top" alt="${rel.name}">
        <div class="card-body card">
          <h5 class="card-text fs-6 fs-md-5 fs-lg-4">${rel.name}</h5>
        </div>
      </div>
    </div>
    `;
  });
  document.getElementById("items").innerHTML = relatedHTML;
};

itemSet('items', '.col')//define la grid y permite tomar el valor de id de un item en particular (usada en los elementos recomendados)




function addComment(message, user, dateTime, score, pfp) {
 pfp = pfp || "img/img_perfil.png"
  document.getElementById('mensajes').innerHTML +=
    `<div class="card mb-4 mt-1 h-100 shadow-md card-coment">
          <div class="row g-4">
              <div class="col-md-2">
                  <div class="card-body">
                      <img src="${pfp}" alt="img/img_perfil.png" class="img-fluid start profileImg" alt="comentarios" style="width: 80px; height: 90px;">
                  </div>
              </div>
              <div class="col-md-6">
                  <div class="card-body">
                      <h5 class="card-title">${user}</h5>
                      <p class="card-text">${message}</p>
                      <p class="card-text"><small class="text-muted">${dateTime}</small></p>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="card-body text-end">
                      ${starCalculator(score)}
                  </div>
              </div>
          </div>
      </div>`

      
}



function starCalculator(score) { // toma un array que contiene elementos estrella y usando un valor del 1 al 5 les agrega la clase checked
  let stars_list = [`
             
                <label for="star-1" class="bi bi-star-fill"></label>`,

    `<label for="star-2" class="bi bi-star-fill"></label>`,

    `<label for="star-3" class="bi bi-star-fill"></label>`,

    `<label for="star-4" class="bi bi-star-fill"></label>`,

    `<label for="star-5" class="bi bi-star-fill"></label>
               `];

  for (let i = 0; i <= score - 1; i++) {  
    stars_list[i] = `<label for="star-1" class="bi bi-star-fill checked"></label>`
  }

  return stars_list.join("")


}

//devuelve la fecha en el momento de la creacion del mensaje
function dateCreator() {
    let date = new Date();

  let fullyear = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let min = date.getMinutes();
  let seconds = date.getSeconds();


  var fulldate = fullyear + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + seconds;
  return fulldate
}

document.getElementById('sendCom').addEventListener('click', () => { //al hacer click ejecuta la funcion addcoment 
  let message = document.getElementById('textarea').value

  addComment(message, logedName(), dateCreator(), paintStar(), extractUser().pfp) 

})


stars = document.querySelectorAll('.bi-star-fill')
for (star of stars) {
  star.addEventListener("mouseover", addStars)
  star.addEventListener("mouseout", removeaddStars)

}

function addStars(e) {
  let labelStar = e.currentTarget.getAttribute('for')
  let currentStar = document.getElementById(labelStar).value

  for (let i = 1; i <= currentStar; i++) {
    document.querySelector(`label[for="star-${i}"]`).classList.add('hover-star')

  }

  paintStar()
}

function removeaddStars() {

  for (star of stars) {

    star.classList.remove('hover-star');
  }
  paintStar()
}

function paintStar() {
  let stars = document.querySelectorAll('[name="star"]')
  let value
  for (star of stars) {

    if (star.checked) {
      for (let i = 1; i <= star.value; i++) {

        labelfor = `label[for="star-${i}"]`

        document.querySelector(labelfor).classList.add('hover-star')
      }
      value = star.value


    }

  }
  return value
}

document.addEventListener("DOMContentLoaded", function () {
  let commentsUrl = PRODUCT_INFO_COMMENTS_URL + current_ItemId + EXT_TYPE;

  getJSONData(commentsUrl).then(function (result) {
    if (result.status === "ok") {
      let comments = result.data;
      comments.forEach(comment => {
        addComment(
          comment.description,   // texto del comentario
          comment.user,          // usuario
          comment.dateTime,      // fecha
          comment.score          // calificación (1-5)
        );
      });
    }
  });
  addProfileImg()
});


//#########################
//  cambiador de imagenes del carrousel
//#########################
function checkImg() {
  let first = "true"
  let imgSelectors = document.querySelectorAll('[name="imgSelectors"]')
  imgSelectors.forEach((imgSelectors) => {
    if (first) {
      imgSelectors.classList.add("check")
    }
    first = false
    imgSelectors.addEventListener('click', choseImg)
  })

}

function choseImg(e) {

  for (imgs of imgSelectors) {
    if (imgs === e.currentTarget) {
      imgs.classList.add("check")
    } else {
      imgs.classList.remove("check")
    }

  }

}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('buy').addEventListener('click', () => window.location.href = 'cart.html')
  getJSONData(current_products_info).then(function (result) {
    if (result.status === "ok") {
      list = result.data;
      botonañadircar();
    }
  });
});

function botonañadircar() {
 let addbtn = document.querySelector("#save button");
 let amountInput = document.getElementById("amountInput");
 let buyBtn  = document.getElementById('buy')
  addbtn.addEventListener("click", addCartItem );
  buyBtn.addEventListener("click", addCartItem );  
  
    function addCartItem() {
   let quantity = parseInt(amountInput.value);
    if (!quantity || quantity <= 0) {
      return;
    }

   let product = {
      id: list.id,
      name: list.name,
      cost: list.cost,
      currency: list.currency,
      image: list.images[0],
      quantity: quantity,

    }

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Si el producto ya está en el carrito, solo aumenta la cantidad
   let existe = cart.find(item => item.id === product.id);
    if (existe) {
      existe.quantity += quantity;
      existe.subtotal = existe.quantity * existe.cost;
    } else {
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    if (typeof updateCartDropdown === "function") {
      updateCartDropdown();
    }

    amountInput.value = 1; // limpia el campo
  }

}



//agrega imagenes de perfil a los comentarios
function addProfileImg() {
  document.querySelectorAll(".profileImg").forEach(element => {

    element.src = user.pfp
    
  });
}

