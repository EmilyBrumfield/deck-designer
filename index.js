let cards = [
    {title: "Orcs!", body: "1d6 orcs appear!", color: "red"},
    {title: "Treasure!", body: "You find a potion of healing.", color: "green"}
]

let data = {
    cards: cards,
}

let app = new Vue({
    el: "#app",
    data: data
  })