async function getData(){ 
  await fetch("https://mindhub-xj03.onrender.com/api/amazing")
  .then(respuesta => respuesta.json())
  .then(json => data = json)
  localStorage.setItem("data", JSON.stringify(data))
}
getData();


  function createCard(event){
    let cards = `<div class="col-sm-12 col-md-6 col-lg-3 p-2">
    <div class="card">
        <img src="${event.image}" alt="">
        <div class="card-body">
            <h5 class="card-title">${event.name}</h5>
            <p class="card-text">${event.description}</p>
        </div>
        <div class="card-footer">
          <div class="d-flex justify-content-between align-items-center">
            <small class="text-muted">Price: $${event.price}</small>
            <div class="btn-group">
            <a href="./details.html?id=${event._id}" class="btn btn-primary btn-sm">Ver Mas..</a>
            </div>
          </div>
        </div> 
    </div>
  </div>`;
  return cards;
  };
  
 



function createcheckbox(category){
  return `<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="check${category}" value="${category}" name="categoria">
  <label class="form-check-label" for="check${category}">${category}</label>
</div> `;
 
}

