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

let cards = {
  fool: {
    description:
      "The Fool is numbered 0 – the number of unlimited potential – and so does not have a specific place in the sequence of the Tarot cards. The Fool can be placed either at the beginning of the Major Arcana or at the end. The Major Arcana is often considered the Fool’s journey through life and as such, he is ever present and therefore needs no number. <br /><br /> On the Fool Tarot card, a young man stands on the edge of a cliff, without a care in the world, as he sets out on a new adventure.He is gazing upwards toward the sky(and the Universe) and is seemingly unaware that he is about to skip off a precipice into the unknown.Over his shoulder rests a modest knapsack containing everything he needs – which isn’t much(let’s say he’s a minimalist).The white rose in his left hand represents his purity and innocence.And at his feet is a small white dog, representing loyalty and protection, that encourages him to charge forward and learn the lessons he came to learn.The mountains behind the Fool symbolise the challenges yet to come.They are forever present, but the Fool doesn’t care about them right now; he’s more focused on starting his expedition. <br /><br /> NOTE: The Tarot card meaning description is based on the Rider Waite cards.",

    src: "./resources/assets/images/fool_0.jpg"
  },
  magician: {
    description:
      "The Magician card is numbered One – the number of new beginnings and opportunities – and associates with the planet of Mercury. He stands with one arm stretched upwards towards the Universe, and the other pointing down to the earth. His positioning represents his connection between the spiritual realms and the material realms. The Magician uses this relationship to create and manifest his goals in the physical realm. He is the conduit that converts energy into matter. The Magician’s robe is white, symbolising purity, and his cloak is red, representing worldly experience and knowledge. <br /><br /> On the table in front of him are the four symbols of the Tarot suits – a cup, pentacle, sword and wand – each symbolising one of the four elements – water, earth, air and fire.It is also a sign that he has all the tools(and elements) he needs to manifest his intentions into being.Above his head is the infinity symbol, and around his waist is a snake biting its own tail – both of which signal that he has access to unlimited potential.And in the foreground is an array of foliage and flowers, symbolising the blossoming and fruition of his ideas and aspirations. <br /><br /> NOTE: The Tarot card meaning description is based on the Rider Waite cards.",

    src: "./resources/assets/images/magician_1.jpg"
  },
  high_priestess: {
    description:
      "The High Priestess sits in front of a thin veil decorated with pomegranates. The veil represents the separate conscious and subconscious realms, the seen and the unseen, and serves to keep casual onlookers out. Only the initiated may enter. The pomegranates on the veil are a symbol of abundance, fertility and the divine feminine, and are sacred to Persephone who ate a pomegranate seed in the underworld and was forced to return every year. <br /><br /> On either side of the High Priestess stand two pillars, marking the entrance to this sacred, mystical temple(also associated with the Temple of Solomon).One pillar is black with the letter B(Boaz, meaning ‘in his strength’) and the other is white with the letter J(Jachin, meaning ‘he will establish’).The black and white colours of the pillars symbolise duality – masculine and feminine, darkness and light – stating that knowledge and acceptance of duality are required to enter this sacred space. <br /><br /> The High Priestess wears a blue robe with a cross on her chest and a horned diadem(or crown), both a symbol of her divine knowledge and her status as a divine ruler.In her lap, she holds a scroll with the letter TORA, signifying the Greater Law(according to A.E.Waite).It is partly covered, signifying that this sacred knowledge is both explicit and implicit, it will only be revealed when the student is ready to look beyond the material realm.The crescent moon at her feet symbolises her connection with the divine feminine, her intuition and subconscious mind, and the natural cycles of the moon. \n NOTE: The Tarot card meaning description is based on the Rider Waite cards.",

    src: "./resources/assets/images/high_priestess_2.jpg"
  },
  empress: {
    description:
      "The Empress is a beautiful, full-figured woman with blonde hair and a peaceful aura about her. On her head, she wears a crown of twelve stars, showing her connection with the mystical realm and the cycles of the natural world (the twelve months of the year and the twelve planets). Her robe is patterned with pomegranates, symbolic of fertility, and sits upon a luxurious array of cushions and flowing red velvet. One cushion features the symbol of Venus, the planet of love, creativity, fertility, beauty and grace – the essence of the Empress. <br /><br /> A beautiful, lush forest and winding stream surround the Empress, signifying her connection with Mother Earth and life itself.She draws her sense of peace from the trees and the water and is rejuvenated by the energy of nature.In the foreground, golden wheat springs from the soil, reflecting abundance from a recent harvest. <br /><br /> NOTE: The Tarot card meaning description is based on the Rider Waite cards.",
    src: "./resources/assets/images/empress_3.jpg"
  },
  hierophant: {
    description:
      "The Hierophant is the masculine counterpart to the High Priestess.He is also known as the Pope or the Teacher in other Tarot decks and is ruled by Taurus. <br /><br /> The Hierophant is a religious figure sitting between two pillars of a sacred temple – though this temple differs from the one in which the High Priestess sits.He wears three robes – red, blue and white – and a three- tiered crown, both representing the three worlds over which he rules(the conscious, sub- conscious and super- conscious).In his left hand, he holds the Papal Cross, a triple sceptre that signifies his religious status.He raises his right hand in a religious blessing, with two fingers pointing towards Heaven and two towards Earth.<br /><br />Before him kneel two followers.The Hierophant’s task is to pass down his spiritual wisdom and initiate the two into the church so they can take up their appointed roles.This imagery speaks to a shared group identity and a rite of passage to enter the next level.The crossed keys at the Hierophant’s feet represent the balance between the conscious and subconscious minds and the unlocking of mysteries, which only he can teach.<br /><br /> NOTE: The Tarot card meaning description is based on the Rider Waite cards.",

    src: "./resources/assets/images/hierophant_5.jpg"
  },
  lovers: {
    description:
      "The Lovers card shows a naked man and woman standing beneath the angel, Raphael, whose name means ‘God heals’ and represents both physical and emotional healing.The angel blesses the man and woman and reminds them of their union with the Divine. <br /><br /> The couple stands in a beautiful, fertile landscape, reminiscent of the Garden of Eden.Behind the woman stands a tall apple tree, with a snake winding its way up the trunk.The serpent and apple tree represent the temptation of sensual pleasures that may take one’s focus away from the Divine.Behind the man is a tree of flames, which represent passion, the primary concern of the man.The twelve flames suggest the twelve zodiac signs, the symbol of time and eternity.The man looks to the woman, who watches the angel, showing the path of the conscious to the subconscious to the super-conscious, or from physical desire to emotional needs to spiritual concerns. <br /><br /> The volcanic mountain in the background is rather phallic and represents the eruption of passion that happens when man and woman meet in full frontal nudity. <br /><br /> NOTE: The Tarot card meaning description is based on the Rider Waite cards.",

    src: "./resources/assets/images/lovers_6.jpg"
  },
  chariot: {
    description:
      "The Chariot Tarot card shows a brave warrior standing inside a chariot. He wears armour decorated with crescent moons (representing what is coming into being), a tunic with a square (the strength of will) and other alchemical symbols (spiritual transformation). The laurel and star crown signals victory, success and spiritual evolution. Although he appears to be driving the chariot, the charioteer holds no reins – just a wand like the Magician’s – symbolising that he controls through the strength of his will and mind. <br /><br /> The charioteer stands tall – there’s no sitting down for this guy, as he’s all about taking action and moving forward.Above his head is a canopy of six- pointed stars, suggesting his connection to the celestial world and the Divine will.In front of the vehicle sit a black and a white sphinx, representing duality, positive and negative and, at times, opposing forces.Note how the sphinxes are pulling in opposite directions, but the charioteer uses his willpower and sheer resolve to steer the chariot forward in the direction he wants. <br /><br /> Behind the chariot flows a wide river, symbolic of the need to be ‘in flow’ with the rhythm of life while also charging ahead toward your goals and intentions. <br /><br /> NOTE: The Tarot card meaning description is based on the Rider Waite cards.",

    src: "./resources/assets/images/chariot_7.jpg"
  },

  strength: {
    description:
      "In the Strength Tarot card, a woman gently strokes a lion on its forehead and jaw. Even though it is known for its ferociousness, the woman has tamed this wild beast with her calming, loving energy. The lion is a symbol of raw passions and desires, and in taming him, the woman shows that animal instinct and raw passion can be expressed in positive ways when inner strength and resilience are applied. She doesn’t use force or coercion; she channels her inner strength to subdue and subtly control the lion. <br /><br /> The woman wears a white robe, showing her purity of spirit, and a belt and crown of flowers that represent the fullest, most beautiful expression of nature.Over her head is the symbol of infinity, representing her infinite potential and wisdom. <br /><br />NOTE: The Tarot card meaning description is based on the Rider Waite cards.",

    src: "./resources/assets/images/strength_8.jpg"
  },
  hermit: {
    description:
      "The Hermit stands alone on the top of a mountain. The snow-capped range symbolises his spiritual mastery, growth and accomplishment. He has chosen this path of self-discovery and, as a result, has reached a heightened state of awareness. <br /><br /> In his right hand, he holds a lantern with a six- pointed star inside; it is the Seal of Solomon, a symbol of wisdom.As the Hermit walks his path, the lamp lights his way – but it only illuminates his next few steps rather than the full journey.He must step forward to see where to go next, knowing that not everything will be revealed at once.In his left hand, the side of the subconscious mind, the Hermit holds a long staff(a sign of his power and authority), which he uses to guide and balance him. <br /><br />NOTE: The Tarot card meaning description is based on the Rider Waite cards.",

    src: "./resources/assets/images/hermit_9.jpg"
  },
  fortune: {
    description:
      "The Wheel of Fortune card shows a giant wheel, with three figures on the outer edges.Four Hebrew letters – YHVH(Yod Heh Vau Heh), the unpronounceable name of God – are inscribed on the wheel’s face.There are also the letters TORA, thought to be a version of the word Torah, meaning ‘law’, or TAROT, or even ROTA(Latin for ‘wheel’).The middle wheel has the alchemical symbols for mercury, sulphur, water and salt – the building blocks of life and the four elements – and represents formative power. <br /><br /> On the outer circle is a snake, the Egyptian god Typhon(the god of evil), descending on the left side.The snake also represents the life force plunging into the material world.On the right side rises the Anubis, the Egyptian God of the dead who welcomes souls to the underworld.And on top of the wheel sits the Sphinx, representing knowledge and strength. <br /><br />In the corners of the Wheel of Fortune card are four winged creatures, each associated with the four fixed signs of the Zodiac: the angel is Aquarius, the eagle is Scorpio, the lion is Leo, and the bull is Taurus.Their wings signify stability amidst movement and change, and each holds the Torah, representing wisdom. <br /><br /> NOTE: The Tarot card meaning description is based on the Rider Waite cards.",

    src: "./resources/assets/images/wheel_of_fortune_10.jpg"
  }
};

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
