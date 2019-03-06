let cards = [
    {title: "Yay", body: "Hi, how are you doing?", color: "blue"},
    {title: "Second", body: "This is boring.", color: "red"}
]

let data = {
    cards: cards,
}

let app = new Vue({
    el: "#app",
    data: data
  })