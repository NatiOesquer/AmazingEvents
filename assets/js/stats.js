let data = localStorage.getItem("data")
data = JSON.parse(data)

let containerStats = "";
listpast = [];
let tablaEvent = document.getElementById("statisticsEvent");

let categorias = [];
data.events.forEach(evento =>{
  if(!categorias.includes(evento.category)){
    categorias.push(evento.category);
  }
});
console.log(categorias);


for (let event of data.events) {    
    let currentDate = new Date(data.currentDate);
    let eventDate = new Date(event.date);
    if(eventDate < currentDate){
    
     listpast.push(event);
    }
    
}
console.log(listpast);

async function statsEvent(){
    let bodyTablaHTML = "";

    bodyTablaHTML +=`<tr>
    <td>${getHighest().name}</td>
    <td>${getLowest().name}</td>
    <td>${getLarger().name}</td>
  </tr>`;
  
  tablaEvent.innerHTML = bodyTablaHTML;

};
statsEvent();

function getHighest(pastEvent){
    return listpast.reduce((highest, current) =>{
        if((current.assistance/current.capacity)>(highest.assistance/highest.capacity)){
            return current;
        }else{
            return highest;
        }
    });
}
console.log(getHighest().name);

function getLowest(pastEvent){
    return listpast.reduce((lowest, current) => {
        if((current.assistance/current.capacity)< (lowest.assistance/lowest.capacity)){
            return current;
        }else{
            return lowest;
        }
    });
}
console.log(getLowest());

function getLarger(events){
    return data.events.reduce((larger, current) =>{
        if(current.capacity > larger.capacity){
            return current;
        }else{
            return larger;
        }
    });
}
console.log(getLarger());

let listaup = [];

for (let event of data.events) {    
    let currentDate = new Date(data.currentDate);
    let eventDate = new Date(event.date);
    if(eventDate > currentDate){
     listaup.push(event);
    }
    
}

let tablaUp = document.getElementById("statisticsUp");

function eventsCategory(category,events) {
    return events.filter(event => {
        if (event.category.includes(category)) {
            return true;
        } else {
            return false;
        }
    });
}

function Revenues(events){
    let sumaRevenues = 0;
    events.forEach(event => {
        if(event.assistance != null){
            sumaRevenues += (event.price * event.assistance);
        }else{
            sumaRevenues += (event.price * event.estimate);
        }
    });
    return sumaRevenues;
}

function PercentageAttendance(events){
    let sumaAttendance = 0;
    let sumaCapacidad = 0;
    events.forEach(event =>{
        if(event.assistance != null){
            (sumaAttendance += event.assistance) && (sumaCapacidad += event.capacity)
        }else{
            (sumaAttendance += event.estimate) && (sumaCapacidad += event.capacity)
        }
    });
    if(sumaAttendance === 0) {
        return "No hay datos de asistencia";
    } else {
        return Math.round((sumaAttendance/sumaCapacidad)*100) + "%";
    }
   
}

async function upEvent(){
    let bodyTablaHTML = "";
    categorias.forEach(category =>{
        let eventosFiltrados = eventsCategory(category, listaup);
        let revenues = Revenues(eventosFiltrados);
        let percentageAttendance = PercentageAttendance(eventosFiltrados);

        bodyTablaHTML += `<tr>
        <td>${category}</td>
        <td>${revenues}</td>
        <td>${percentageAttendance} </td>
    </tr>`;

    console.log(bodyTablaHTML);

    });

    tablaUp.innerHTML = bodyTablaHTML;

}
upEvent();

let tablaPast = document.getElementById("statisticsPast");

async function eventPast(){
    let bodyTablaHTML = "";
    categorias.forEach(category => {
        let eventosFiltrados = eventsCategory(category,listpast);
       // console.log(eventsCategory(category,listpast));
       let revenues = Revenues(eventosFiltrados);
       let percentageAttendance = PercentageAttendance(eventosFiltrados);

       bodyTablaHTML += `<tr>
       <td>${category}</td>
       <td>${revenues}</td>
       <td>${percentageAttendance} </td>
   </tr>`;

    });

    tablaPast.innerHTML = bodyTablaHTML;
}
eventPast();


