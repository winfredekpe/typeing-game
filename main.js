//  getting elements

word = document.querySelector(".word");
timer = document.querySelector(".timerz");
input = document.querySelector("input");
start = document.querySelector(".btn");
score = document.querySelector(".scorenum");
popup = document.querySelector(".poping");
// pop = document.querySelector(".pop");

// adding event listeners
start.addEventListener("click", play);
// other stuffs

// word for the game
wordlist = [
  "eat",
  "food",
  "bath",
  "explain",
  "time",
  "wonderful",
  "lonely",
  "happy",
  "silly",
  "godness",
  "battery",
  "nice",
  "nothing",
  "greet",
  "food",
  "ghana",
  "funly",
  "boldly",
  "hate",
  "goat",
  "popular",
  "kind",
  "girl",
  "manly",
];

// finctions

function random(min, max) {
  number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
}

function play() {
  word.innerText = wordlist[random(0, wordlist.length)];
  timer.innerText = 5;
  input.focus();

  timecount = setInterval((x) => {
    time = parseInt(timer.innerText);
    --time;
    timer.innerText = time + "s";
  }, 1000);

  //
  setTimeout((x) => {
    if (input.value === word.innerText) {
      userscore = parseInt(score.innerText);
      ++userscore;
      score.innerText = userscore;

      //   displaying popup mssage
      popup.innerText = "you got it";
      popup.style.background = "rgba(7, 185, 117, 0.849)";
      popup.style.display = "flex";

      //
      setTimeout((wait) => {
        clearInterval(timecount);
        timer.innerText = 5;
        input.value = "";
        popup.style.display = "none";
        play();
      }, 1000);

      //
    } else {
      popup.innerText = `You loss.
      you got ${score.innerText} points
       `;
      popup.style.background = "red";
      popup.style.display = "flex";

      //
      setTimeout((wait) => {
        clearInterval(timecount);
        timer.innerText = "";
        input.value = "";
        word.innerText = "";
        popup.style.display = "none";
        score.innerText = 0;
      }, 900);
    }
  }, 5000);
}
