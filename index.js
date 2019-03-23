/*
TO DO:
(top priority)
--Add view to custom deck creator
--Only allow delete function on custom deck cards, in custom deck creator

(high priority)
--Import deck as JSON file
--Main mode can show multiple decks at once

(low priority)
--Formatting options as part of deck properties object
--Better method for filling the dropdown list with decks
--Fix display for many cards at once
--Actually useful sample decks
--Take functions out of Vue declaration, declare them ahead of time then copy in Vue like with the data
*/


function exportToJsonFile() {
  let jsonData = this.decks.customDeck;
  let dataStr = JSON.stringify(jsonData);
  let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
  
  let exportFileDefaultName = 'customDeck.json';
  
  let linkElement = document.getElementById('downloadThing');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', exportFileDefaultName);
  linkElement.click();
}

/*CHANGE THE DROPHANDLER AND JSONEXPORTER
********************************************************************************
********************************************************************************
********************************************************************************
********************************************************************************
********************************************************************************
********************************************************************************
********************************************************************************
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

let customDeck = [
  new Monster("Susie"),
  new Treasure("Dice"),
  new Treasure("Pie"),
  new Monster("Pumpkin"),
  new Event("Someone spilled grape juice"),
  new Event("Someone ate the dice")
]

let decks = {
  cthulhuDeck: cthulhuDeck,
  sampleDeck: sampleDeck,
  customDeck: customDeck
}

let deck = decks.cthulhuDeck;

let data = {
  decks: decks,
  deck: deck,
  cards: [].concat(deck),
  drawn: [],
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
        let newCard = {
          title: document.getElementById("card-title-input").value,
          color: document.getElementById("card-color-input").value,
          body: document.getElementById("card-body-input").value

        };
        this.decks.customDeck.unshift(newCard)
      },
      removeCard: function (index) { //removes custom card from deck
          this.decks.customDeck.splice(index, 1)
      },
      changeMode: function() {
        if (this.viewMode === "main") {
          this.viewMode = "maker"
        }
        else if (this.viewMode === "maker") {
          this.viewMode = "deckDisplay"
        }
        else {
          this.viewMode = "main"
        }
      },
      exportToJsonFile: exportToJsonFile
    }
})
