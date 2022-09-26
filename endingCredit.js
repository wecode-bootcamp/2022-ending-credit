let stars = 100;

for (let i = 0; i <= stars; i++) {
  let star = document.createElement("div");

  if (i % 2 === 0) {
    star.className = "whiteStar";
  } else {
    star.className = "yellowStar";
  }
  let position = getStarPosition();
  star.style.top = position.x + "px";
  star.style.left = position.y + "px";
  document.body.append(star);
}

function getStarPosition() {
  let bodyX = window.innerHeight;
  let bodyY = window.innerWidth;

  let randomX = Math.floor(Math.random() * bodyX);
  let randowY = Math.floor(Math.random() * bodyY);

  return { x: randomX, y: randowY };
}

window.speechSynthesis.cancel();
window.speechSynthesis.addEventListener("voiceschanged", () => {});

function textToSpeech() {
  const text = document.getElementsByClassName("thanks")[0].innerText;
  const speechMsg = new SpeechSynthesisUtterance(text);

  window.speechSynthesis.speak(speechMsg);
}

setTimeout(() => {
  textToSpeech();
}, 3000);
const body = document.getElementsByTagName("body")[0];
body.addEventListener("click", () => {
  textToSpeech();
});

const play = document.getElementsByClassName("audio")[0];
// setTimeout(() => play.play(), 1000);
