console.log("js working");

const alphabetArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"];
const hiddenWord = ["ARRAY", "OBJECT", "FUNCTION", "VARIABLE"]
var hdnArr = []
var word;
var wrdArr = []
var crctLtrArr = []
const wrngLtrArr = []
const losses = []
var rgtLtrArr = []
const wins = []





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

        })
        this.classList.add('alph-btn-good'); //change class of button to good
        rgtLtrArr.push(this.innerHTML);
        wrdArr = Array.from(word)
        crctLtrArr = [...new Set(wrdArr)];
        if (crctLtrArr.length === rgtLtrArr.length){
            alert(`The word was ${word} you win!`);
            wins.push('win');
            document.getElementById('winner').innerHTML=`${wins.length}`;
            hiddenWord.splice(hiddenWord.indexOf(word),1)
            rgtLtrArr.length = 0
            wrngLtrArr.length = 0
            resetBoard()
            
        }
        
    } else {
        this.classList.add('alph-btn-bad'); //change class of button to bad
        alert('letter not in word'); 
        wrngLtrArr.push(this.innerHTML); //push the letter that is incorrect into an array wrngLtrArr
        if (wrngLtrArr.length >= 6){ //if the lelngth of array reaches 6
            alert('you have lost!');
            wrngLtrArr.length = 0; //reset length to zero
            rgtLtrArr.length = 0
            losses.push('loss'); // add a loss to the loss array
            document.getElementById('loser').innerHTML=`${losses.length}`; //update loss tally to = number length of array
            resetBoard();   //replace letters with new and pick new word
        }
    }
    this.removeEventListener('click', checkButton);
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
        ltrToGuess.setAttribute('class', `hdnLtr`); //give letters the class to be invisible
        ltrToGuess.setAttribute('data-letter', `${hdnArr[i]}`); //give dataset attribute to equal the letter that it is
        ltrToGuess.innerHTML = newLtr; // text in div is the letter that it is
        const hdnWrdContainer = document.querySelector('.hdn-wrd'); //selects HTML element that letters will go into
        hdnWrdContainer.appendChild(ltrToGuess); //adds the new div to the area
        console.log('current word', word);
    }
    
    
}

pickWord()

//function to get new word and alphabet after game is complete
function resetBoard () {
    $(".alphabet").empty(); //find div with class alphabet and remove all children elements
    $(".hdn-wrd").empty();
    pickWord();
    makeLetters();
}


