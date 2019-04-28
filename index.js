/*
TO DO:

(low priority)
--Actually useful sample decks

(final touches)
--Make UI look professional
--Fully responsive design

(theoretical second version)
--Better method for filling the dropdown list with decks

--side deck when making cards
--load more than one custom deck
--main mode can handle multiple decks

(other)
--Dice roller for FU/PbtA
*/

function setDeck(newDeck) {
  this.deck = decks[newDeck];
  this.resetDeck();
}

function resetDeck() {
  this.cards = [].concat(this.deck);
  this.drawn = [];
}

function drawCard() {
  if (this.cards.length > 0) {
    let randomNumber = Math.floor(Math.random() * this.cards.length);
    this.drawn.unshift(this.cards[randomNumber]);
    this.cards.splice(randomNumber, 1);
  }
}

function addCard(title, color, body) {
  let newCard = {
    title: document.getElementById("card-title-input").value,
    color: document.getElementById("card-color-input").value,
    body: document.getElementById("card-body-input").value
  };
  this.decks.customDeck.unshift(newCard);
}

function removeCard(index) {
  this.decks.customDeck.splice(index, 1);
}

function loadCard(index) {
    document.getElementById("card-title-input").value = this.decks.customDeck[index].title;
    document.getElementById("card-color-input").value = this.decks.customDeck[index].color;
    document.getElementById("card-body-input").value = this.decks.customDeck[index].body;
}

function changeMode() {
  if (this.viewMode === "main") {
    this.viewMode = "deckDisplay";
  }
  else if (this.viewMode === "deckDisplay") {
    this.viewMode = "maker";
  }
  else if (this.viewMode === "maker") {
    this.viewMode = "help";
  }
  else {
    this.viewMode = "main";
  }
}

function dropHandler(ev) {
  console.log("File(s) dropped");
  ev.preventDefault();
  let fileText = "";

  if (ev.dataTransfer.items) {
    if (ev.dataTransfer.items.length > 1) {
      alert("Cannot load multiple files.");
    }
    else {
      if (ev.dataTransfer.items[0].kind === "file") {
        let file = ev.dataTransfer.items[0].getAsFile();
        console.log("Item file.name = " + file.name);
        let reader = new FileReader();
        reader.onload = function (event) {
          fileText = event.target.result;
          console.log(fileText);
          decks.customDeck = JSON.parse(fileText);
        };
        reader.readAsText(file);
      }
    }
  }

  else {
    if (ev.dataTransfer.files.length > 1) {
      alert("Cannot load multiple files.");
    }
    else {

      console.log("... file.name = " + ev.dataTransfer.files[0].name);
      let file = ev.dataTransfer.files[0].getAsFile();
      console.log("Item file.name = " + file.name);
      let reader = new FileReader();
      reader.onload = function (event) {
        fileText = event.target.result;
        console.log(fileText);
        decks.customDeck = JSON.parse(fileText);
      };
      reader.readAsText(file);
    }
  }
}

function dragoverHandler(ev) {
  ev.preventDefault();
}

function exportToJsonFile() {
  let jsonData = this.decks.customDeck;
  let dataStr = JSON.stringify(jsonData);
  let dataUri = "data:application/json;charset=utf-8,"+ encodeURIComponent(dataStr);
  let exportFileDefaultName = "customDeck.json";
  let linkElement = document.getElementById("downloadThing");
  linkElement.setAttribute("href", dataUri);
  linkElement.setAttribute("download", exportFileDefaultName);
  linkElement.click();
}

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
];

let cthulhuDeck = [
  new Monster("Deep Ones"),
  new Monster("Ghouls"),
  new Monster("Mi-go"),
  new Monster("Shoggoth"),
  new Monster("Chthonian"),
  new Monster("Starspawn of Cthulhu"),
  new Monster("Dark Young"),
  new Monster("Gugs")
];

let playingDeck = [
  {"title":"Playing Card","color":"black","body":"King of Clubs"},{"title":"Playing Card","color":"black","body":"Queen of Clubs"},{"title":"Playing Card","color":"black","body":"Jack of Clubs"},{"title":"Playing Card","color":"black","body":"10 of Clubs"},{"title":"Playing Card","color":"black","body":"9 of Clubs"},{"title":"Playing Card","color":"black","body":"8 of Clubs"},{"title":"Playing Card","color":"black","body":"7 of Clubs"},{"title":"Playing Card","color":"black","body":"6 of Clubs"},{"title":"Playing Card","color":"black","body":"5 of Clubs"},{"title":"Playing Card","color":"black","body":"4 of Clubs"},{"title":"Playing Card","color":"black","body":"3 of Clubs"},{"title":"Playing Card","color":"black","body":"2 of Clubs"},{"title":"Playing Card","color":"black","body":"Ace of Clubs"},
  {"title":"Playing Card","color":"red","body":"King of Diamonds"},{"title":"Playing Card","color":"red","body":"Queen of Diamonds"},{"title":"Playing Card","color":"red","body":"Jack of Diamonds"},{"title":"Playing Card","color":"red","body":"10 of Diamonds"},{"title":"Playing Card","color":"red","body":"9 of Diamonds"},{"title":"Playing Card","color":"red","body":"8 of Diamonds"},{"title":"Playing Card","color":"red","body":"7 of Diamonds"},{"title":"Playing Card","color":"red","body":"6 of Diamonds"},{"title":"Playing Card","color":"red","body":"5 of Diamonds"},{"title":"Playing Card","color":"red","body":"4 of Diamonds"},{"title":"Playing Card","color":"red","body":"3 of Diamonds"},{"title":"Playing Card","color":"red","body":"2 of Diamonds"},{"title":"Playing Card","color":"red","body":"Ace of Diamonds"},
  {"title":"Playing Card","color":"red","body":"King of Hearts"},{"title":"Playing Card","color":"red","body":"Queen of Hearts"},{"title":"Playing Card","color":"red","body":"Jack of Hearts"},{"title":"Playing Card","color":"red","body":"10 of Hearts"},{"title":"Playing Card","color":"red","body":"9 of Hearts"},{"title":"Playing Card","color":"red","body":"8 of Hearts"},{"title":"Playing Card","color":"red","body":"7 of Hearts"},{"title":"Playing Card","color":"red","body":"6 of Hearts"},{"title":"Playing Card","color":"red","body":"5 of Hearts"},{"title":"Playing Card","color":"red","body":"4 of Hearts"},{"title":"Playing Card","color":"red","body":"3 of Hearts"},{"title":"Playing Card","color":"red","body":"2 of Hearts"},{"title":"Playing Card","color":"red","body":"Ace of Hearts"},
  {"title":"Playing Card","color":"black","body":"King of Spades"},{"title":"Playing Card","color":"black","body":"Queen of Spades"},{"title":"Playing Card","color":"black","body":"Jack of Spades"},{"title":"Playing Card","color":"black","body":"10 of Spades"},{"title":"Playing Card","color":"black","body":"9 of Spades"},{"title":"Playing Card","color":"black","body":"8 of Spades"},{"title":"Playing Card","color":"black","body":"7 of Spades"},{"title":"Playing Card","color":"black","body":"6 of Spades"},{"title":"Playing Card","color":"black","body":"5 of Spades"},{"title":"Playing Card","color":"black","body":"4 of Spades"},{"title":"Playing Card","color":"black","body":"3 of Spades"},{"title":"Playing Card","color":"black","body":"2 of Spades"},{"title":"Playing Card","color":"black","body":"Ace of Spades"}
]

let customDeck = [
  new Monster("Sample Monster"),
  new Treasure("Sample Treasure"),
  new Event("Sample Event"),
];

let decks = {
  cthulhuDeck: cthulhuDeck,
  sampleDeck: sampleDeck,
  playingDeck: playingDeck,
  customDeck: customDeck
};

let deck = decks.cthulhuDeck;

let data = {
  decks: decks,
  deck: deck,
  cards: [].concat(deck),
  drawn: [],
  viewMode: "main"
};

let app = new Vue({
  el: "#app",
  data: data,
  methods: {
    setDeck: setDeck,
    resetDeck: resetDeck,
    drawCard: drawCard,
    addCard: addCard,
    removeCard: removeCard,
    loadCard: loadCard,
    changeMode: changeMode,
    exportToJsonFile: exportToJsonFile,
    dropHandler: dropHandler,
    dragoverHandler: dragoverHandler
  }
});