//deck should eventually combine different arrays for different color values or titles or whatever
//so that only the contents need to be different each time, saving work

//creates a monster card
function Monster(body, title) {
  if (title === undefined) {
   this.title = "Monster";
  } else {
    this.title = title
  }

  if (body === undefined) {
    this.body = "Monsters appear!";
   } else {
     this.body = body
  }

  this.color = "red";
}


//creates an event card
function Event(body, title) {
  if (title === undefined) {
   this.title = "Event";
  } else {
    this.title = title
  }

  if (body === undefined) {
    this.body = "Something happens!";
   } else {
     this.body = body
  }

  this.color = "blue";
}

//creates a treasure card
function Treasure(body, title) {
  if (title === undefined) {
   this.title = "Treasure";
  } else {
    this.title = title
  }

  if (body === undefined) {
    this.body = "Found some treasure!";
   } else {
     this.body = body
  }

  this.color = "green";
}

let deck = [
  new Monster("8 bugbears approach."),
  new Treasure("You find a potion of healing."),
  new Event("The weather gets worse."),
  new Event("The weather gets better."),
  {title: "Quest", body: "You discover a map to the Temple of Skulls, along with a key to its secret entrance.", color: "orange"},
  new Monster("8 bugbears approach."),
  new Treasure("You find a potion of healing."),
  new Event("The weather gets worse."),
  new Event("The weather gets better."),
  new Monster("8 bugbears approach."),
  new Treasure("You find a potion of healing."),
  new Event("The weather gets worse."),
  new Event("The weather gets better."),
  new Monster("8 bugbears approach."),
  new Treasure("You find a potion of healing."),
  new Event("The weather gets worse."),
  new Event("The weather gets better."),
  new Monster("8 bugbears approach."),
  new Treasure("You find a potion of healing."),
  new Event("The weather gets worse."),
  new Event("The weather gets better."),
  new Monster("8 bugbears approach."),
  new Treasure("You find a potion of healing."),
  new Event("The weather gets worse."),
  new Event("The weather gets better."),
  new Monster("8 bugbears approach."),
  new Treasure("You find a potion of healing."),
  new Event("The weather gets worse."),
  new Event("The weather gets better."),
  new Monster("8 bugbears approach."),
  new Treasure("You find a potion of healing."),
  new Event("The weather gets worse."),
  new Event("The weather gets better."),
  new Monster("8 bugbears approach."),
  new Treasure("You find a potion of healing."),
  new Event("The weather gets worse."),
  new Event("The weather gets better."),
  new Monster("8 bugbears approach."),
  new Treasure("You find a potion of healing."),
  new Event("The weather gets worse."),
  new Event("The weather gets better."),
  new Monster("8 bugbears approach."),
  new Treasure("You find a potion of healing."),
  new Event("The weather gets worse."),
  new Event("The weather gets better."),
  new Monster("8 bugbears approach."),
  new Treasure("You find a potion of healing."),
  new Event("The weather gets worse."),
  new Event("The weather gets better.")
]

/*
let deck = [
  new Monster("Orcs!", "Bob"),
  new Monster("Bugbears!"),
  new Monster(),
  new Monster("Ogres!"),
  new Monster("Ninjas!"),
  new Treasure("You find a potion of healing."),
  new Event("The weather gets worse."),
  new Event("The weather gets better."),
  {title: "Unique", body: "This card is unique.", color: "purple"}
]
*/

/*
let deck = [
    {title: "Orcs!", body: "1d6 orcs appear!", color: "red"},
    {title: "Treasure!", body: "You find a potion of healing.", color: "green"},
    {title: "Event!", body: "The weather gets worse.", color: "blue"}
]
*/

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
        //this variant reverses the order drawn cards are displayed: this.drawn = this.drawn.concat(this.cards[randomNumber]);
        this.drawn.unshift(this.cards[randomNumber]) 
        this.cards.splice(randomNumber, 1); //I prefer using immutable alternatives to splice, but this is much more efficient here
      }
    }
})

/*
reset deck function: use cards [].concat(deck)
drawing cards: move to drawn array; just show the latest drawn array entry and nothing else, at least for now

*/