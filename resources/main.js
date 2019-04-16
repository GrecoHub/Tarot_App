//Card Variables

let numCards = 10;
let numLayout = 3;

let pile = document.getElementById("pile");
let hiddenImages = document.getElementById("hidden_images");

let cardDescription = document.getElementById("card_description");

let flippedCard1 = document.getElementById("image1");
let flippedCard2 = document.getElementById("image2");
let flippedCard3 = document.getElementById("image3");

const faceDownImage = "./resources/assets/images/back_of_card.jpg";

hiddenImages.style.display = "none";

fetch("http://www.mocky.io/v2/5cb1dc1333000073275720f4")
  .then(response => {
    return response.json();
  })
  .then(cards => {
    let layout = () => {
      // #card_images appears showing 3 "face down cards"
      hiddenImages.style.display = "block";
      flippedCard1.src = faceDownImage;
      flippedCard2.src = faceDownImage;
      flippedCard3.src = faceDownImage;

      // Funtion to check if a card has been flipped

      // Why not card.src here??
      let isFlipped = card => {
        return card.getAttribute("src") !== faceDownImage;
      };

      //Instructions appear before any card is hovered over

      let keys = Object.keys(cards).sort(() => 0.5 - Math.random());

      // Cards are displayed when clicked.

      flippedCard1.onclick = () => {
        flippedCard1.src = cards[keys[0]].src;
      };
      flippedCard2.onclick = () => {
        flippedCard2.src = cards[keys[1]].src;
      };
      flippedCard3.onclick = () => {
        flippedCard3.src = cards[keys[2]].src;
      };

      cardDescription.innerHTML = "Click on cards to flip them over.";

      flippedCard1.onmouseover = () => {
        if (!isFlipped(flippedCard1)) {
          cardDescription.innerHTML = "Click on card to flip over";
        } else {
          cardDescription.innerHTML = cards[keys[0]].description;
        }
      };
      flippedCard2.onmouseover = () => {
        if (!isFlipped(flippedCard2)) {
          cardDescription.innerHTML = "Click on card to flip over";
        } else {
          cardDescription.innerHTML = cards[keys[1]].description;
          console.log(isFlipped(flippedCard2));
        }
      };
      flippedCard3.onmouseover = () => {
        if (!isFlipped(flippedCard3)) {
          cardDescription.innerHTML = "Click on card to flip over";
        } else {
          cardDescription.innerHTML = cards[keys[2]].description;
        }
      };

      // Description changes to "Hover over cards for meanings"

      flippedCard1.onmouseout = () => {
        if (isFlipped(flippedCard1)) {
          cardDescription.innerHTML = "Hover over cards for meanings";
        }
      };
      flippedCard2.onmouseout = () => {
        if (isFlipped(flippedCard2)) {
          cardDescription.innerHTML = "Hover over cards for meanings";
        }
      };
      flippedCard3.onmouseout = () => {
        if (isFlipped(flippedCard3)) {
          cardDescription.innerHTML = "Hover over cards for meanings";
        }
      };
    };

    pile.onclick = () => {
      layout();
    };
  });
