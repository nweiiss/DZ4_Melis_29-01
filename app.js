

document.addEventListener('DOMContentLoaded', () => {
   const request = new XMLHttpRequest();
   request.open("GET", "people.json");
   request.setRequestHeader('Content-Type', 'application/json');
   request.send();
   console.log(request);

   request.onload = () => {
    const response = JSON.parse(request.response);
    var outputDiv = document.getElementById('output');
    response.forEach(person => {
        var card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <img src="${person.image}" alt="${person.name}">
        <h2>${person.name}</h2>
        <p>Возраст: ${person.age}</p>
        <p>Род занятий: ${person.occupation}</p>
        `;
        outputDiv.appendChild(card);
    });
   }
});




