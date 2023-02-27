let pastEvent = "";
let cards = document.getElementById('cardEvent');
for (let event of data.events) {    
    let eventDate = new Date(event.date);
    if(eventDate < currentDate){
     pastEvent += createCard(event);
    }
    
}
console.log(pastEvent);
cards.innerHTML += pastEvent;