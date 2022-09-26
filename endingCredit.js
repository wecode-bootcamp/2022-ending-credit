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

function textToSpeech() {
  if (
    typeof SpeechSynthesisUtterance === "undefined" ||
    typeof window.speechSynthesis === "undefined"
  ) {
    alert("이 브라우저는 음성 합성을 지원하지 않습니다.");
    return;
  }
  window.speechSynthesis.cancel();

  const text = document.getElementsByClassName("thanks")[0].innerText;
  const speechMsg = new SpeechSynthesisUtterance();
  speechMsg.rate = 1;
  speechMsg.pitch = 1;
  speechMsg.text = text;

  window.speechSynthesis.speak(speechMsg);
}
setTimeout(textToSpeech, 18000);

const play = document.getElementsByClassName("audio")[0];
// setTimeout(() => play.play(), 1000);
