let upcomingEvent = "";
let cards = document.getElementById('cardEvent');
for (let event of data.events) {    
    let eventDate = new Date(event.date);
    if(eventDate > currentDate){
     upcomingEvent += createCard(event);
    }
    
}
console.log(upcomingEvent);
cards.innerHTML += upcomingEvent;