// initializing some values
let totalAttempts = 10;
let attemps = 0;
let totoalWons = 0;
let totoalLost = 0;
// find elements

const form = document.querySelector(".form");
const guessingNumber = form.querySelector("input[type=number]");
const btn = form.querySelector(".submit");
const resultText = form.querySelector(".jsrzlt");
const totalrzlt = form.querySelector(".totalrzlt");
const remainingtx = form.querySelector(".remainingtx");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  attemps++;
  if (attemps > 10) {
    guessingNumber.disabled = true;
    btn.disabled = true;
  } else {
    checkResult(guessingNumber.value);
    remainingtx.innerHTML = `remaining attempts: ${totalAttempts - attemps}`;
  }
  guessingNumber.innerHTML = "";
});

function checkResult(value) {
  const randomNumber = getRandomNumber(5);
  if (guessingNumber.value === randomNumber) {
    resultText.innerHTML = `you have won:`;
    totoalWons++;
  } else {
    resultText.innerHTML = `you have lost : random number was : ${randomNumber}`;
    totoalLost++;
  }
  totalrzlt.innerHTML = `Won: ${totoalWons} ❌ Lost: ${totoalLost}`;
}
function getRandomNumber(limit) {
  return Math.floor(Math.random() * limit) + 1;
}
