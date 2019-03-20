/*
TO DO:
--Better method for filling the dropdown list with decks
--Fix display for many cards at once
--Change mockup card creator to real one
--Card creator
--Export deck
--Import deck
--Combine and split decks
--Multiple decks
--Actually useful sample decks
*/

function Monster(body, title, color) {

  this.body = body;
  this.title = title;
  this.color = color;

  if (body === undefined) {
    this.body = "Monsters appear!";
  }

  if (title === undefined) {
   this.title = "Monster";
  }

  
  if (color === undefined) {
    this.color = "red";
  }
}

function Event(body, title, color) {

  this.body = body;
  this.title = title;
  this.color = color;

  if (body === undefined) {
    this.body = "Something happens!";
  }

  if (title === undefined) {
   this.title = "Event";
  }

  
  if (color === undefined) {
    this.color = "blue";
  }
}

function Treasure(body, title, color) {

  this.body = body;
  this.title = title;
  this.color = color;

  if (body === undefined) {
    this.body = "Found treasure!";
  }

  if (title === undefined) {
   this.title = "Treasure";
  }

  
  if (color === undefined) {
    this.color = "green";
  }
}


let sampleDeck = [
  new Monster("1d8 bugbears approach."),
  new Treasure("You find a potion of healing."),
  new Event("The weather gets worse."),
  new Event("The weather gets better.", undefined, "purple"),
  {title: "Quest", body: "You discover a map to the Temple of Skulls, along with a key to its secret entrance.", color: "orange"}
]

let cthulhuDeck = [
  new Monster("Cultists"),
  new Monster("Deep Ones"),
  new Monster("Ghouls"),
  new Monster("Mi-go"),
  new Monster("Shoggoth"),
  new Monster("Chthonian"),
  new Monster("Starspawn of Cthulhu"),
  new Monster("Dark Young"),
  new Monster("Gugs")
]

let decks = {
  cthulhuDeck: cthulhuDeck,
  sampleDeck: sampleDeck
}

let deck = decks.cthulhuDeck;

let data = {
  decks: decks,
  deck: deck,
  cards: [].concat(deck),
  drawn: [],
  newDeck: [],
  newCard: {
    title: "",
    color: "black",
    body: ""
  },
  viewMode: "maker"
}

let app = new Vue({
    el: "#app",
    data: data,
    methods: {
      setDeck: function (newDeck) {
        this.deck = decks[newDeck];
        this.resetDeck();
      },
      resetDeck: function () {  //resets Cards to the default deck, clears Drawn cards
        this.cards = [].concat(this.deck);
        this.drawn = [];
      },
      drawCard: function () {  //draws a random card from Cards, adds it to Drawn
        if (this.cards.length > 0) {
          let randomNumber = Math.floor(Math.random() * this.cards.length)
          //this variant reverses the order drawn cards are displayed: this.drawn = this.drawn.concat(this.cards[randomNumber]);
          this.drawn.unshift(this.cards[randomNumber]) 
          this.cards.splice(randomNumber, 1); //I prefer using immutable alternatives to splice, but this is much more efficient here
        }
      },
      addCard: function (title, color, body) { //adds custom card to deck
        this.newCard.title = document.getElementById("card-title-input").value;
        this.newCard.color = document.getElementById("card-color-input").value;
        this.newCard.body = document.getElementById("card-body-input").value;
        this.newDeck.unshift(this.newCard);
        this.decks.sampleDeck = this.newDeck.concat(this.decks.sampleDeck);
      },
      changeMode: function() {
        if (this.viewMode === "main") {
          this.viewMode = "maker"
        } else {
          this.viewMode = "main"
        }
      }
    }
})
