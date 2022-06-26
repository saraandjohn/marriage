// Utilities
var arrayHandler = {
  shuffle: function (array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there are elements to shuffle
    while (0 !== currentIndex) {
      // Pick an element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  },
};

// Back to top
const backToTop = () => {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
};

const backToTopElements = document.getElementsByClassName("back-to-top");
for (let i = 0; i < backToTopElements.length; i++) {
  backToTopElements[i].addEventListener("click", backToTop, false);
}

// Navbar Handler
const navbarHandler = () => {
  const navigationAnchorPointCollection = document.getElementsByClassName(
    "navigation-anchor-point"
  );
  const navLinkCollection = document.getElementsByClassName(
    "lbn-navbar-link-block"
  );
  let activeSectionIndex = 0;

  for (let i = 0; i < navigationAnchorPointCollection.length; i++) {
    if (
      navigationAnchorPointCollection[i].getBoundingClientRect().top <
      window.innerHeight / 4
    ) {
      activeSectionIndex = i;
    }
  }

  // Make last section active if bottom is reached
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    activeSectionIndex = navigationAnchorPointCollection.length - 1;
  }

  for (let i = 0; i < navLinkCollection.length; i++) {
    if (i === activeSectionIndex) {
      navLinkCollection[i].classList.add("active");
    } else {
      navLinkCollection[i].classList.remove("active");
    }
  }
};

// Game
const gameData = [
  {
    id: "s",
    it: {
      question: "Chi ha fatto irruzione in un liceo di notte?",
      answer: "Jon non ci andava né di giorno né di notte",
    },
    fr: {
      question: "Qui est entré dans le lycée la nuit?",
      answer: "Jon n'y allait ni la journée ni la nuit",
    },
  },
  {
    id: "s",
    it: {
      question: "Chi parlava con i peluche al centro commerciale?",
      answer: "Sara è ormai bandita dai centri commerciali",
    },
    fr: {
      question: "Qui parlait avec les peluche dans le centre commerciale?",
      answer: "Sara est désormais interdite de centre commercial",
    },
  },
  {
    id: "s",
    it: {
      question: "Chi dorme 9 ore a notte?",
      answer: "Jon ritiene che la notte sia fatta per guardare l’NBA",
    },
    fr: {
      question: "Qui doit dormir 9 heures par nuit?",
      answer: 'Jon: "La nuit est faite pour regarder la NBA"',
    },
  },
  {
    id: "s",
    it: {
      question:
        "Chi è partito per un viaggio portandosi dietro la valigia sbagliata?",
      answer: "Grazie papà per avermi poi portato la valigia giusta",
    },
    fr: {
      question: "Qui est parti en voyage en se trompant de valise?",
      answer: "Merci papa de m'avoir ramener la bonne valise",
    },
  },
  {
    id: "s",
    it: {
      question: "Chi è stato morso da una scimmia?",
      answer: "E no, la scimmia non era Jonathan",
    },
    fr: {
      question: "Qui a été mordu par une singe?",
      answer: "Ce n'était pas Jon le singe",
    },
  },
  {
    id: "j",
    it: {
      question: "Chi ha fatto un buco nel muro con un pugno?",
      answer: "Papà, mamma, scusate",
    },
    fr: {
      question: "Qui a fait un trou dans le mur?",
      answer: "Papa maman désolé",
    },
  },
  {
    id: "j",
    it: {
      question: "Chi ha un tatuaggio?",
      answer: "Spetta a te scoprire dove",
    },
    fr: {
      question: "Qui a un tatouage?",
      answer: "À toi de découvrir ou",
    },
  },
  {
    id: "j",
    it: {
      question:
        "Chi, giocando a nascondino, si è nascosto così bene che è stato necessario chiamare la polizia per trovarlo?",
      answer: "Un vero nemico pubblico",
    },
    fr: {
      question: "Qui a fait un cache cache qui a nécessité l'aide de la police",
      answer: "Ennemi public numero 1",
    },
  },
  {
    id: "j",
    it: {
      question: "Chi detiene il record di 7 pinte bevute in una sera sola?",
      answer: "Sara al massimo si è fermata alla quarta",
    },
    fr: {
      question: "Qui a bu 7 pintes?",
      answer: "Sara n'en est qu'à 4",
    },
  },
  {
    id: "j",
    it: {
      question:
        "Chi ha perso il pullman per ritornare a casa dopo un weekend nella città dell’altro?",
      answer:
        "Da quel giorno Sara controlla sempre in anticipo i biglietti di Jonathan",
    },
    fr: {
      question: "Qui a raté le bus pour rentrer dans son pays?",
      answer: "Sara contrôle désormais tout les billets pour Jon",
    },
  },
];
const game = {
  shuffledGameData: arrayHandler.shuffle(gameData),
  currentIndex: 0,
  score: 0,
  lang: document.documentElement.lang,
  getQuestion: (index) => {
    document.getElementById("game-counter").innerHTML = game.currentIndex + 1;
    document.getElementById("game-start").classList.add("d-none");
    document.getElementById("game-question").classList.remove("d-none");
    document.getElementById("game-answer").classList.add("d-none");
    document
      .getElementById("game-face-sara")
      .classList.remove("disabled", "selected", "correct", "wrong");
    document
      .getElementById("game-face-jonathan")
      .classList.remove("disabled", "selected", "correct", "wrong");
    document.getElementById("game-correct").classList.add("d-none");
    document.getElementById("game-wrong").classList.add("d-none");
    document.getElementById("game-next").classList.add("d-none");

    document.getElementById("game-question").innerText =
      game.shuffledGameData[index][game.lang].question;
    document.getElementById("game-answer").innerText =
      game.shuffledGameData[index][game.lang].answer;
  },
  start: () => {
    game.getQuestion(0);
  },
  checkAnswer: (id) => {
    document.getElementById("game-face-sara").classList.add("disabled");
    document.getElementById("game-face-jonathan").classList.add("disabled");

    if (id === "s") {
      document.getElementById("game-face-sara").classList.add("selected");
    } else {
      document.getElementById("game-face-jonathan").classList.add("selected");
    }

    if (game.shuffledGameData[game.currentIndex].id === "s") {
      document.getElementById("game-face-sara").classList.add("correct");
      document.getElementById("game-face-jonathan").classList.add("wrong");
    } else {
      document.getElementById("game-face-sara").classList.add("wrong");
      document.getElementById("game-face-jonathan").classList.add("correct");
    }

    if (game.shuffledGameData[game.currentIndex].id === id) {
      game.score += 1;
      document.getElementById("game-correct").classList.remove("d-none");
    } else {
      document.getElementById("game-wrong").classList.remove("d-none");
    }
    document.getElementById("game-answer").classList.remove("d-none");

    if (game.currentIndex < game.shuffledGameData.length - 1) {
      document.getElementById("game-next").classList.remove("d-none");
    } else {
      document.getElementById("game-score").innerText = game.score;
      if (game.score >= 8) {
        document
          .getElementById("game-score-comment-3")
          .classList.remove("d-none");
      } else if (game.score >= 6) {
        document
          .getElementById("game-score-comment-2")
          .classList.remove("d-none");
      } else if (game.score >= 4) {
        document
          .getElementById("game-score-comment-1")
          .classList.remove("d-none");
      } else {
        document
          .getElementById("game-score-comment-0")
          .classList.remove("d-none");
      }
      document.getElementById("game-score-label").classList.remove("d-none");
    }
  },
  next: () => {
    game.currentIndex += 1;
    game.getQuestion(game.currentIndex);
  },
};

document
  .getElementById("game-start")
  .addEventListener("click", game.start, false);

document
  .getElementById("game-next")
  .addEventListener("click", game.next, false);

document
  .getElementById("game-face-sara")
  .addEventListener("click", () => game.checkAnswer("s"), false);
document
  .getElementById("game-face-jonathan")
  .addEventListener("click", () => game.checkAnswer("j"), false);

// Best moments swiper
const initBestMomentsSwiper = () => {
  new Swiper("#best-moments-swiper", {
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 0,
    loop: true,
    breakpoints: {
      767: {
        slidesPerView: 3,
        spaceBetween: 35,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};

// Scroll events handler
const scollEventsHandler = () => {
  navbarHandler();
};

// DOM Loaded events handler
DOMLoadedEventsHandler = () => {
  console.log("~ ᔕᗩᖇᗩ 👰💕🤵 ᒍOᑎᗩTᕼᗩᑎ ~"); // ;)
  navbarHandler();
  initBestMomentsSwiper();
};

// Scroll event
document.addEventListener("scroll", scollEventsHandler);

// DOM Loaded event
document.addEventListener("DOMContentLoaded", DOMLoadedEventsHandler, false);
