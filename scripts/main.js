console.log("js working");

const alphabetArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"];
const hiddenWord = ["ARRAY", "OBJECT", "FUNCTION", "VARIABLE"]
var hdnArr = []
//function to check if clicked button is in the word
const checkButton = function () {
    console.log("is this the right button");
}



// function to make letter buttons
function makeLetters() {
    for (var i = 0; i < alphabetArr.length; i++) {
        var newBtn = alphabetArr[i]; // index value is assigned to variable newBtn
        const buttons = document.createElement('button'); //use .createElement to produce functional button and assign to variable button
        buttons.innerHTML = newBtn; //set text of the button 
        const alphaContainer = document.querySelector('.alphabet'); //sets location for new buttons to go to
        buttons.addEventListener('click', checkButton); // adds event listener to buttons
        alphaContainer.appendChild(buttons); //adds new button into the correct area
    }
}

makeLetters()

function pickWord() {
    var word = hiddenWord[Math.floor(Math.random() * hiddenWord.length)];
    hdnArr = word.split("");
    for (var i = 0; i < hdnArr.length; i++) {
        var newLtr = hdnArr[i];
        const ltrToGuess = document.createElement('div');
        ltrToGuess.setAttribute('class','hdnLtr');
        ltrToGuess.innerHTML = newLtr;
        const hdnWrdContainer = document.querySelector('.hdn-wrd');
        hdnWrdContainer.appendChild(ltrToGuess);
    }
  
}
pickWord()
//function to pick from list of words
//mathFloor(math random)


//function to break random word into individual letters 
//put letters into array
//loop through array an make divs 