

let indexEvent = "";

for (let event of data.events) {
  indexEvent += createCard(event);
}
console.log(indexEvent);


document.querySelector('div.cardEvent').innerHTML += indexEvent;

