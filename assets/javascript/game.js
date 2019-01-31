var game = {
  wins: 0,
  losses: 0,
  animals: [
    "lion",
    "mouse",
    "cat",
    "dog",
    "penguin",
    "bear",
    "armadillo",
    "fox",
    "zebra",
    "giraffe",
    "cobra",
    "tarantula",
    "monkey",
    "human",
    "donkey"
  ],

  blank: [],

  guesses: [],

  guessesLeft: 12,

  random: null,

  generateRandom: function() {
    this.random = this.animals[Math.floor(Math.random() * this.animals.length)];
    return this.random;
  },

  createBlanks: function(str) {
    for (var x in str) {
      this.blank.push("_ ");
      document.getElementById("text-field").textContent += "_ ";
    }
  },

  keyPressed: function(event) {
    if (game.guesses.includes(event.key)) {
      game.guessesLeft++;
    } else if (!game.random.includes(event.key)) {
      game.guesses.push(event.key);
      document.getElementById(
        "guessed-letters"
      ).textContent = game.guesses.toString();
    }

    if (game.random.includes(event.key)) {
      var index = game.random.indexOf(event.key);
      while (index != -1) {
        game.blank.splice(index, 1, event.key); //replace each blank in our array each time we guess a correct character
        index = game.random.indexOf(event.key, index + 1); //find the next occurence if there is any.
      }
      document.getElementById("text-field").textContent = game.blank.join(" ");
      if (!game.blank.includes("_ ")) {
        game.wins++;
        if (game.random.includes("lion")) {
          document.getElementById("curr-pic").src = "./assets/images/lion.jpg";
          document.getElementById("curr-pic").style.visibility = "visible";
        }
        if (game.random.includes("mouse")) {
          document.getElementById("curr-pic").src = "./assets/images/mouse.jpg";
          document.getElementById("curr-pic").style.visibility = "visible";
        }
        if (game.random.includes("armadillo")) {
          document.getElementById("curr-pic").src =
            "./assets/images/armadillo.jpg";
          document.getElementById("curr-pic").style.visibility = "visible";
        }
        if (game.random.includes("bear")) {
          document.getElementById("curr-pic").src = "./assets/images/bear.jpeg";
          document.getElementById("curr-pic").style.visibility = "visible";
        }
        if (game.random.includes("cat")) {
          document.getElementById("curr-pic").src = "./assets/images/cat.jpg";
          document.getElementById("curr-pic").style.visibility = "visible";
        }
        if (game.random.includes("cobra")) {
          document.getElementById("curr-pic").src = "./assets/images/cobra.jpg";
          document.getElementById("curr-pic").style.visibility = "visible";
        }
        if (game.random.includes("dog")) {
          document.getElementById("curr-pic").src = "./assets/images/dog.jpg";
          document.getElementById("curr-pic").style.visibility = "visible";
        }
        if (game.random.includes("donkey")) {
          document.getElementById("curr-pic").src =
            "./assets/images/donkey.jpeg";
          document.getElementById("curr-pic").style.visibility = "visible";
        }
        if (game.random.includes("fox")) {
          document.getElementById("curr-pic").src = "./assets/images/fox.jpeg";
          document.getElementById("curr-pic").style.visibility = "visible";
        }
        if (game.random.includes("giraffe")) {
          document.getElementById("curr-pic").src =
            "./assets/images/giraffe.jpeg";
          document.getElementById("curr-pic").style.visibility = "visible";
        }
        if (game.random.includes("human")) {
          document.getElementById("curr-pic").src =
            "./assets/images/human.jpeg";
          document.getElementById("curr-pic").style.visibility = "visible";
        }
        if (game.random.includes("monkey")) {
          document.getElementById("curr-pic").src =
            "./assets/images/monkey.jpg";
          document.getElementById("curr-pic").style.visibility = "visible";
        }
        if (game.random.includes("penguin")) {
          document.getElementById("curr-pic").src =
            "./assets/images/penguin.jpg";
          document.getElementById("curr-pic").style.visibility = "visible";
        }
        if (game.random.includes("tarantula")) {
          document.getElementById("curr-pic").src =
            "./assets/images/tarantula.jpg";
          document.getElementById("curr-pic").style.visibility = "visible";
        }
        if (game.random.includes("zebra")) {
          document.getElementById("curr-pic").src = "./assets/images/zebra.jpg";
          document.getElementById("curr-pic").style.visibility = "visible";
        }
        game.guesses = [];
        game.blank = [];
        game.guessesLeft = 12;
        document.getElementById("guesses-rem").textContent =
          "Guesses Remaining: " + game.guessesLeft;
        document.getElementById(
          "guessed-letters"
        ).textContent = game.guesses.toString();
        document.getElementById("wins").textContent = "Wins: " + game.wins;
        game.generateRandom();
        document.getElementById("text-field").textContent = "";
        game.createBlanks(game.random);
      }
    } else {
      game.guessesLeft--;
      if (game.guessesLeft <= 0) {
        game.losses++;
        game.guesses = [];
        game.blank = [];
        game.guessesLeft = 12;
        document.getElementById("guesses-rem").textContent =
          "Guesses Remaining: " + game.guessesLeft;
        document.getElementById(
          "guessed-letters"
        ).textContent = game.guesses.toString();
        document.getElementById("losses").textContent =
          "Losses: " + game.losses;
        game.generateRandom();
        document.getElementById("text-field").textContent = "";
        game.createBlanks(game.random);
      } else {
        document.getElementById("guesses-rem").textContent =
          "Guesses Remaining: " + game.guessesLeft;
      }
    }
  }
};

game.generateRandom();
game.createBlanks(game.random);
document.addEventListener("keyup", game.keyPressed);
