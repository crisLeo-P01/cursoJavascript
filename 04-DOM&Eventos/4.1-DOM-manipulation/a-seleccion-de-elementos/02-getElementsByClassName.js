let cards = document.getElementsByClassName("card");
console.log(cards);

// Iterar sobre HTMLCollection
for (let i = 0; i < cards.length; i++) {
    console.log(cards[i].textContent);
}

// Convertir a array para usar métodos de array
const cardsArray = Array.from(cards);
cardsArray.forEach((card) => {
    console.log(card.textContent);
});
