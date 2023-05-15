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
const password1El = document.getElementById("passbox1-el");
const password2El = document.getElementById("passbox2-el");
const useCaps = document.getElementById("usecaps-el");
const useNumbers = document.getElementById("usenumbers-el");
const useSymbols = document.getElementById("usesymbols-el");
const copyBtn1 = document.getElementById("copy-btn1");
const copyBtn2 = document.getElementById("copy-btn2");

//characters variable contains lowerAlphabet array as default
let characters = [lowerAlphabet];

let randomChar = "";

// Generates one random character and stores it in the randomChar variable
function randomCharacter() {

  //pushes arrays to the characters variable if they are checked
  if (useCaps.checked === true) {
    characters.push(upperAlphabet);
  }
  if (useNumbers.checked === true) {
    characters.push(numbers);
  }
  if (useSymbols.checked === true) {
    characters.push(symbols);
  }

  // randomly picks one of the arrays stored in characters
  let randomArray = Math.floor(Math.random() * characters.length);

  //randomly picks a number within the length of the chosen array
  let randomNumber = Math.floor(Math.random() * characters[randomArray].length);

  //uses the random number to pick a character in the chosen array
  randomChar = characters[randomArray][randomNumber];

  //resets characters to only contain the default array
  characters = [lowerAlphabet];
}

// generates two random passwords when "generate passwords" button is clicked
generateBtn.addEventListener("click", function () {
  let passwordLength = slider.value;
  let randomPassword1 = "";
  let randomPassword2 = "";

  //adds a random character to each password until their length matches passwordLength
  for (let i = 0; i < passwordLength; i++) {
    if (i < passwordLength) {
      randomCharacter();
      randomPassword1 += randomChar;
      randomCharacter();
      randomPassword2 += randomChar;
    }
  }
  password1El.textContent = randomPassword1
  password2El.textContent = randomPassword2
});

// shows the value from the slider
slider.oninput = function () {
  sliderValue.textContent = this.value;
};

// copies passwords to clipboard
copyBtn1.addEventListener("click", function () {
  navigator.clipboard.writeText(password1El.textContent);
});

copyBtn2.addEventListener("click", function () {
  navigator.clipboard.writeText(password2El.textContent);
});
