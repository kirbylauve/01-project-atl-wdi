console.log("js working");

const alphabetArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"];
const hiddenWord = ["ARRAY", "OBJECT", "FUNCTION", "VARIABLE"]
var hdnArr = []
var word = ""



const checkButton = function () {
    if (word.indexOf(this.innerHTML) > -1) { //if the letter exists as an index value in the word
        let ltrInBtn = this.innerHTML; // = letter value of button clicked
        let hdnToVisByClass = document.querySelectorAll('.hdnLtr'); //gets all elements with class .hdnLtr
        let hdnToVisArr = Array.from(hdnToVisByClass); //turns node list into array
        hdnToVisArr.forEach(function (elem) { //cycles through new array. elem is the div of the hidden letter
            if (elem.dataset.letter === `${ltrInBtn}`) { //if the data-letter value = innerHTML of button pressed
                elem.classList.remove('hdnLtr'); //remove hidden class
                elem.classList.add('visible'); //add visible class
            }
        }
        )
    } else {
        alert('letter not in word')
    }
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


//function to pick from list of words and place divs in hdn-wrd area
function pickWord() {
    word = hiddenWord[Math.floor(Math.random() * hiddenWord.length)];
    hdnArr = word.split("");
    for (var i = 0; i < hdnArr.length; i++) {
        var newLtr = hdnArr[i];
        const ltrToGuess = document.createElement('div'); // ltrToGuess = new div created
        ltrToGuess.setAttribute('class', `hdnLtr`);
        ltrToGuess.setAttribute('data-letter', `${hdnArr[i]}`);  //gives div id of its letter but if I use id then I'd have to make a style for each one
        ltrToGuess.innerHTML = newLtr;
        const hdnWrdContainer = document.querySelector('.hdn-wrd');
        hdnWrdContainer.appendChild(ltrToGuess);
        console.log('ltrToGuess', ltrToGuess);
        console.log('newLtr', newLtr)
    }

}
pickWord()

