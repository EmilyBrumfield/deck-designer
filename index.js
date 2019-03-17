let deck = [
    {title: "Orcs!", body: "1d6 orcs appear!", color: "red"},
    {title: "Treasure!", body: "You find a potion of healing.", color: "green"},
    {title: "Event!", body: "The weather gets worse.", color: "blue"}
]

let data = {
  deck: deck,  
  cards: [].concat(deck),
  drawn: [],
}

let app = new Vue({
    el: "#app",
    data: data,
    methods: {
      resetDeck: function () {  //resets Cards to the default deck, clears Drawn cards
        this.cards = [].concat(this.deck);
        this.drawn = [];
      },
      drawCard: function () {  //draws a random card from Cards, adds it to Drawn
        let randomNumber = Math.floor(Math.random() * this.cards.length)
        this.drawn = this.drawn.concat(this.cards[randomNumber]);
        this.cards.splice(randomNumber, 1); //I prefer using immutable alternatives to splice, but this is much more efficient here
      }
    }
})

/*
reset deck function: use cards [].concat(deck)
drawing cards: move to drawn array; just show the latest drawn array entry and nothing else, at least for now

*/