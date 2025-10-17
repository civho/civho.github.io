const buscar =  document.getElementById('inputBuscar')
const contenedor = document.getElementById('contenedor')
document.getElementById('btnBuscar').addEventListener('click', search)

function search() { 
    text = buscar.value
    console.log();
    fetch ('https://images-api.nasa.gov/search?q=' + text).then(r => r.json()).then(ob => {
       
      console.log(ob)
   
      document.querySelector('.error').style.display = 'none';
      list(ob.collection)
    
    }).catch(er =>{

        document.querySelector('.error').style.display = 'block';
    })


}

function list(ob) { 
 contenedor.innerHTML = ''; 
  for(data of ob.items){ 
   const {data: [{
                  description, 
                  date_created, 
                  title
                }] , 
          links:[ { href } ] 
        } = data ;

         console.log(title)
    card = `
        <div class="col" id="" name='card'>
          <div class="card shadow rounded-3 h-100 p-1">
            <img src="${href}" class="card-img-top" alt="...">
            <div class="card-body d-flex flex-column h-100">
              <h5 class="card-title"> ${title}</h5>
              <p  name = 'description'class="card-text overflow-auto">${description}</p>
                <p class="mt-auto card-text text-end"><small class="text-muted ">${time(date_created)}</small></p>
            </div>
          </div>
        </div>`

        contenedor.innerHTML += card; 
  }

  
   
}


function time(time) { 
  date = new Date(time)
  newtime = new Intl.DateTimeFormat('es-UY', {dateStyle: 'long', timeStyle: 'short' , timezone: 'America/Montevideo'}).format(date);
  console.log(newtime)
  return newtime

}

