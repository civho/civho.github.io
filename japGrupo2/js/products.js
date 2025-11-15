let current_catID = localStorage.getItem('catID')
let current_products = PRODUCTS_URL + current_catID + EXT_TYPE
let list = []
let filteredlist = []

//metodo de filtrado por costo 
function costSort(a, b) {

  return a.cost - b.cost

}
//metodo de filtrado por cantidad de ventas
function soldCountSort(a, b) {

  return a.soldCount - b.soldCount

}

//filtro costo menor-mayor
function sortListCostAsc() {
  filteredlist.sort(costSort)
  productList(filteredlist)
  search()
}

//filtro costo amyor=menor
function sortListCostDec() {
  filteredlist.sort(costSort)
  filteredlist.reverse()

  productList(filteredlist)
  search()
}

//filtro limpiar
document.getElementById('clearFilters').addEventListener('click', () => {
  document.getElementById('min').value = '';
  document.getElementById('max').value = '';
  sortListCostRange() 

});

//filtro relevancia
function sortListRel() {
  filteredlist.sort(soldCountSort)
  productList(filteredlist)
  search()
}

//filtro por rango 
function sortListCostRange() {
  let min = document.getElementById('min').value
  if (min == "") min = 0

  let max = document.getElementById('max').value
  if (max == "") max = 99999999

  filteredlist = list.filter(a => a.cost >= min && a.cost <= max)
  productList(filteredlist)
  search()
}

// busqueda por nombre o descripcion
function search() {

  let search = document.getElementById('search').value

  cards = document.getElementsByName('card')

  for (i = 0; i < cards.length; i++) {
     
    if (cards[i].getElementsByTagName('h5')[0].innerHTML.toLowerCase().indexOf(search) > -1 || cards[i].getElementsByTagName('p')[0].innerHTML.toLowerCase().indexOf(search) > -1) {

        cards[i].style.display = ''

      } else {
        cards[i].style.display = 'none'
      }

  }

}

//tomar id de producto seleccionado



//listar productos
 function productList(list) {


  let content = '';

  for (product of list) {
    let image = product.image
    let name = product.name
    let currency = product.currency
    let cost = product.cost
    let soldCount = product.soldCount
    let description = product.description
    let id = product.id
    content +=
      `<div class="col" id="${id}" name='card'>
          <div class="card shadow rounded-3 h-100 p-1">
            <img src="${image}" class="card-img-top" alt="...">
            <div class="card-body d-flex flex-column h-100">
              <h5 class="card-title">${name}</h5>
              <p  name = 'description'class="card-text" >${description}</p>
                <p class="mt-auto card-text text-end"><small class="text-muted ">vendidos ${soldCount}</small></p>
            </div>
            <div class='card-footer font-monospace text-center fs-4 fw-bold rounded shadow-sm'>
              <small class=''> ${currency}<label>${cost}</label> </small> 
            </div>
          </div>
        </div>`
  }

  document.getElementById('items').innerHTML = content

}
//bajar json
document.addEventListener("DOMContentLoaded", function (e) {
  getJSONData(current_products).then(function (result) {
    if (result.status === "ok") {
      list = result.data.products
      filteredlist = list
      productList(list)

    }
  });
})

//botones
document.getElementById('sortListCostDec').addEventListener('click', sortListCostDec);
document.getElementById('sortListCostAsc').addEventListener('click', sortListCostAsc);
document.getElementById('sortListRel').addEventListener('click', sortListRel);
document.getElementById('rangeValue').addEventListener('click', sortListCostRange);
document.getElementById('search').addEventListener('keyup', search);
document.getElementById('searchBtn').addEventListener('click', search);
document.getElementById('searchForm').addEventListener('keydown',(e) => {if(e.key === 'Enter'){e.preventDefault(); e.stopPropagation()}});
document.getElementById('min').addEventListener('keydown',(e) => {if(e.key === 'Enter'){e.preventDefault(); e.stopPropagation(); sortListCostRange(); console.log(e)}});
document.getElementById('max').addEventListener('keydown',(e) => {if(e.key === 'Enter'){e.preventDefault(); e.stopPropagation(); sortListCostRange()}});

itemSet('items', '.col')//define la grid y permite tomar el valor de id de un item en particular



