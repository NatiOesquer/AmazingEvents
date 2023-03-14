console.log([document]);
const queryString = location.search;
console.log(queryString);
const params = new URLSearchParams(queryString);
const eventDetail = params.get("id");
const eventos = data.events.find((event) => event._id == eventDetail);

let card = document.getElementById('nuevaDetail');
const cardDetalle = document.querySelector('.detalleCard');
cardDetalle.innerHTML = `<div class=" d-flex justify-content-center align-items-center p-4 card mb-3" style="max-width: 800px; height: 400px;">
<div class="row align-items-center justify-content-center " style="width:100% ; height:100% ;">
  <div class="col-md-4" style="width:50% ; height:80% ;">
    <img src="${eventos.image}" class="img-fluid rounded-start" alt="..." style="width:100% ; height:100% ;">
  </div>
  <div class="col-md-8" style="width:50% ; height:80% ;">
    <div class="card-body">
      <h5 class="card-title">${eventos.name}</h5>
      <p class="card-text">${eventos.description}</p>
      <p class="card-text">Date: ${eventos.date} /Category: ${eventos.category} /Place: ${eventos.place}</p>
      <p class="card-text">Capacity: ${eventos.capacity} /Assistance: ${eventos.assistance}</p>
      <p class="card-text">Price: $${eventos.price}</p>
    </div>
  </div>
</div>
</div>`;
