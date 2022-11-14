//수업내용 O
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

// 수업내용 X
const logo = document.getElementById("logo");
logo.addEventListener("click", () => {
  window.open("https://wecode.co.kr/");
});

const startButton = document.getElementById("startButton");
startButton.addEventListener("click", () => getStarted());

window.speechSynthesis.cancel();

function getStarted() {
  startButton.remove();

  const soundTrack = new Audio("theme.mp3");
  soundTrack.play();

  const intro = document.getElementById("intro");
  intro.style.animation = "intro 2s ease-out 1s";

  const main = document.getElementById("main");
  main.style.animation = "main 4s ease-out 5s";

  //TODO: 모바일 버전 맞춰서 다시 계산
  const thanks = document.getElementById("thanks");
  let playTime = 0;
  if (thanks.clientWidth < 517) {
    playTime = ((thanks.clientHeight * thanks.clientWidth) / 28000 / 80) * 168;
  } else {
    playTime = (thanks.clientHeight * thanks.clientWidth) / 28000;
  }

  const text = document.getElementById("text");
  text.style.animation = `scroll ${playTime}s linear 12s`;

  function textToSpeech() {
    const text = document.getElementById("thanks").innerText;
    const speechMsg = new SpeechSynthesisUtterance(text);
    speechMsg.rate = 1.1;
    window.speechSynthesis.speak(speechMsg);
  }

  setTimeout(() => {
    textToSpeech();
  }, 14500);
}
