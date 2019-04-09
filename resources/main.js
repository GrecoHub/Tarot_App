// Step 1  Create action that fires the pile using console.log
// Step 2 link the action with the flipped cards
// step 3 grab card names and turn them into strings

//Card Variables

let numCards = 10;
let numLayout = 3;

let pile = document.getElementById("pile");

let cardDescription = document.getElementById("card_description");

let flippedCard1 = document.getElementById("image1");
let flippedCard2 = document.getElementById("image2");
let flippedCard3 = document.getElementById("image3");

let cards = () => {
  fetch("https://www.mocky.io/v2/5ca7a19f520000b50b97b681")
    .then(response => {
      return response.json();
    })
    .then(function(myJson) {
      console.log(JSON.stringify(myJson));
    });
};

let layout = () => {
  // Read up on Sort
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

//Command + D selects duplicates

pile.onclick = () => {
  layout();
  cardDescription.innerHTML = "Hover over each card to find out more!";
};

// When hovering over card in layout, key.description appears in cardDescription.innerHTML

// let changeWords = () => {
//   cardDescription.innerHTML = 'Thanks for clicking the pile!!';
// }

// let returnWords = () => {
//   cardDescription.innerHTML = 'This Works!!!';
// }

//   if (cardDescription.innerHTML === 'Thanks for clicking the pile!!') {
//     returnWords();
//     console.log('You have clicked the pile!');
//   } else {
//     changeWords();
//     console.log('You are trying to change the words...');
//   }
// }

//revious RandomCardGenorator using Math.floor(Math.random()
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
