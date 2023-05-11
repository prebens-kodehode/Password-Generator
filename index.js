const upperAlphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const lowerAlphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols = [
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const generateBtn = document.getElementById("generate-btn");
const slider = document.getElementById("slider");
const sliderValue = document.getElementById("slidervalue-el");
const password1 = document.getElementById("passbox1-el");
const password2 = document.getElementById("passbox2-el");
const useCaps = document.getElementById("usecaps-el");
const useNumbers = document.getElementById("usenumbers-el");
const useSymbols = document.getElementById("usesymbols-el");
const copyBtn1 = document.getElementById("copy-btn1");
const copyBtn2 = document.getElementById("copy-btn2");

let characters = [lowerAlphabet];
let char = "";
password1.textContent = "";
password2.textContent = "";

// Generates one random character and stores it in the char variable
function randomCharacter() {
  if (useCaps.checked === true) {
    characters.push(upperAlphabet);
  }
  if (useNumbers.checked === true) {
    characters.push(numbers);
  }
  if (useSymbols.checked === true) {
    characters.push(symbols);
  }
  let randomCharacterNumber = Math.floor(Math.random() * characters.length);
  let randomNumber = Math.floor(
    Math.random() * characters[randomCharacterNumber].length
  );
  char = characters[randomCharacterNumber][randomNumber];

  characters = [lowerAlphabet];
}

// When "generate passwords" button is clicked one random character is added to each password until it matches the value of the "password length" slider
generateBtn.addEventListener("click", function () {
  let passwordLength = slider.value;
  password1.textContent = "";
  password2.textContent = "";
  for (let i = 0; i < passwordLength; i++) {
    if (i < passwordLength) {
      randomCharacter();
      password1.textContent += char;
      randomCharacter();
      password2.textContent += char;
    }
  }
});

// shows the value from the slider
slider.oninput = function () {
  sliderValue.textContent = this.value;
};

// copies password to clipboard
copyBtn1.addEventListener("click", function () {
  navigator.clipboard.writeText(password1.textContent);
});

copyBtn2.addEventListener("click", function () {
  navigator.clipboard.writeText(password2.textContent);
});
