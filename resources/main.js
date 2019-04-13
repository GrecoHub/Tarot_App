//Card Variables

let numCards = 10;
let numLayout = 3;

let pile = document.getElementById("pile");

let cardDescription = document.getElementById("card_description");

let flippedCard1 = document.getElementById("image1");
let flippedCard2 = document.getElementById("image2");
let flippedCard3 = document.getElementById("image3");

fetch("http://www.mocky.io/v2/5cb1dc1333000073275720f4")
  .then(response => {
    return response.json();
  })
  .then(function(cards) {
    let layout = () => {
      let keys = Object.keys(cards).sort(() => 0.5 - Math.random());
      flippedCard1.src = cards[keys[0]].src;
      flippedCard2.src = cards[keys[1]].src;
      flippedCard3.src = cards[keys[2]].src;
      flippedCard1.onmouseover = () => {
        cardDescription.innerHTML = cards[keys[0]].description;
      };

      flippedCard2.onmouseover = () => {
        cardDescription.innerHTML = cards[keys[1]].description;
      };

      flippedCard3.onmouseover = () => {
        cardDescription.innerHTML = cards[keys[2]].description;
      };
    };

    pile.onclick = () => {
      layout();
      cardDescription.innerHTML = "Hover over each card to find out more!";
    };
  });

//Previous RandomCardGenorator using Math.floor(Math.random()
// selectedImages = [];
// for (let i = 0; i < 3; i++) {
//   let selectedImageIndex = randomCardGenerator();
//   selectedImages.push(cardImages[selectedImageIndex]);
// })

// Previous RandonCardGenorator
//let randomCardGenerator = () => {
//   console.log("You have created a random card!");
//   return Math.floor(Math.random() * numCards);
// };

//Sources
// Source for descriptions: https://www.biddytarot.com/tarot-card-meanings/major-arcana/
// Cards object can be found at: http://www.mocky.io/v2/5cabecdc300000a019103287
// In brackets: http://www.mocky.io/v2/5cabedf3300000781710328a
// Dave's original Link: https://www.mocky.io/v2/5ca7a19f520000b50b97b681

//Learnings
/* 

Read up on .Sort()
Terminal command `python -m SimpleHTTPServer`
url = http://localhost:8000/

Command + D selects duplicates

*/
