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

//배경음악 재생 기능
const soundTrack = new Audio("theme.mp3");
setTimeout(() => {
  soundTrack.play();
}, 1000);
const body = document.getElementsByTagName("body")[0];
body.addEventListener("click", () => {
  soundTrack.play();
});

//콘텐츠 읽어주는 기능
window.speechSynthesis.cancel();

let isSpeaking = false;
function textToSpeech() {
  isSpeaking = !isSpeaking;
  const text = document.getElementsByClassName("thanks")[0].innerText;
  const speechMsg = new SpeechSynthesisUtterance(text);
  if (isSpeaking) {
    window.speechSynthesis.speak(speechMsg);
  } else {
    window.speechSynthesis.cancel();
  }
}

const mouth = document.getElementsByClassName("mouth")[0];
setTimeout(() => {
  mouth.style.opacity = 1;
}, 16000);
mouth.addEventListener("click", () => {
  textToSpeech();
});

const logo = document.getElementsByClassName("logo")[0];
logo.addEventListener("click", () => {
  window.open("https://wecode.co.kr/");
});
