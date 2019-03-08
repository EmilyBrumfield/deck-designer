let deck = [
    {title: "Orcs!", body: "1d6 orcs appear!", color: "red"},
    {title: "Treasure!", body: "You find a potion of healing.", color: "green"}
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
      resetDeck: function () {
        this.cards = [].concat(this.deck);
        this.drawn = [];
      },
      drawCard: function () {
        this.drawn = this.drawn.concat(this.cards[0]);
        this.cards = this.cards.slice(1);
      }
    }
})

/*
reset deck function: use cards [].concat(deck)
drawing cards: move to drawn array; just show the latest drawn array entry and nothing else, at least for now

*/