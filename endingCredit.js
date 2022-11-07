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
const logo = document.getElementsByClassName("logo")[0];
logo.addEventListener("click", () => {
  window.open("https://wecode.co.kr/");
});

const startButton = document.getElementsByClassName("startButton")[0];
startButton.addEventListener("click", () => getStarted());

window.speechSynthesis.cancel();

function getStarted() {
  startButton.remove();

  const soundTrack = new Audio("theme.mp3");
  soundTrack.play();

  const intro = document.getElementsByClassName("intro")[0];
  intro.style.animation = "intro 2s ease-out 1s";

  const main = document.getElementsByClassName("main")[0];
  main.style.animation = "main 4s ease-out 5s";

  //TODO: 모바일 버전 맞춰서 다시 계산
  const thanks = document.getElementsByClassName("thanks")[0];
  let playTime = 0
  if (thanks.clientWidth < 517 ) {
    playTime = thanks.clientHeight * thanks.clientWidth / 28000 / 80 * 168 
  } else {
    playTime = thanks.clientHeight * thanks.clientWidth / 28000;
  }
  console.log(thanks.clientHeight);
  console.log(thanks.clientWidth)
  console.log(playTime);
  console.log('velocity: ', thanks.clientHeight * thanks.clientWidth / playTime)
  // console.log((playTime / 100) * 1.1);
  const text = document.getElementsByClassName("text")[0];
  text.style.animation = `scroll ${playTime}s linear 12s`;

  function textToSpeech() {
    const text = document.getElementsByClassName("thanks")[0].innerText;
    const speechMsg = new SpeechSynthesisUtterance(text);
    speechMsg.rate = 1.1;
    window.speechSynthesis.speak(speechMsg);
  }

  setTimeout(() => {
    textToSpeech();
  }, 14500);
}
