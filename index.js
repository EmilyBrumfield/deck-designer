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
    this.viewMode = "maker";
  }
  else if (this.viewMode === "maker") {
    this.viewMode = "deckDisplay";
  }
  else {
    this.viewMode = "main";
  }
}

function dropHandler(ev) {
  console.log('File(s) dropped');
  ev.preventDefault();

  if (ev.dataTransfer.items) {    
    if (ev.dataTransfer.items.length > 1) {
      alert("Cannot load multiple files.");
    }
    else {   
      if (ev.dataTransfer.items[0].kind === 'file') {
        let fileText = "";
        var file = ev.dataTransfer.items[0].getAsFile();
        console.log('Item file.name = ' + file.name);
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
      alert("Cannot load multiple files.")
    }
    else {
      let fileText = "";
      console.log('... file.name = ' + ev.dataTransfer.files[0].name);
      var file = ev.dataTransfer.files[0].getAsFile();
      console.log('Item file.name = ' + file.name);
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
  let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr); 
  let exportFileDefaultName = 'customDeck.json';
  let linkElement = document.getElementById('downloadThing');
  linkElement.setAttribute('href', dataUri);
  linkElement.setAttribute('download', exportFileDefaultName);
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
})
