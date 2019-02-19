console.log("js working");

const alphabetArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"];
const hiddenWord = ["ARRAY", "OBJECT", /* "FUNCTION", "VARIABLE", "GLOBAL", "LOCAL", */ "CALLBACK"]
var hdnArr = []
var word;
var wrdArr = []
var crctLtrArr = []
const wrngLtrArr = []
const pTwoScore = []
var crctPikArr = []
var pOneScore = []
var plays = '0';
var crntImg = ""
var manImg = document.getElementById('manPNG')


const checkButtonPOne = function () {
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
        plays++
        this.classList.add('alph-btn-good'); //change class of button to good
        crctPikArr.push(this.innerHTML); //pushes letter into crctPikArr
        wrdArr = Array.from(word) //changes word to be guessed into array
        crctLtrArr = [...new Set(wrdArr)]; //eliminates duplicate letters
        if (crctLtrArr.length === crctPikArr.length) { //if simplified word array length === correctly guessed letters length
            alert(`The word was ${word} you score!`); //alert win
            pOneScore.push('win'); //add win to wins array
            document.getElementById('playerOneScore').innerHTML = `${pOneScore.length}`; //update text to equal length of wins array
            hiddenWord.splice(hiddenWord.indexOf(word), 1) //remove word from list 
            crctPikArr.length = 0 //reset correct guesses
            wrngLtrArr.length = 0 //reset incorrect guesses
            resetBoard() //reset buttons and pick new word
        }
    } else {
        plays++
        this.classList.add('alph-btn-bad'); //change class of button to bad
        wrngLtrArr.push(this.innerHTML); //push the letter that is incorrect into an array wrngLtrArr
        checkImg();
        alert('letter not in word');
        if (wrngLtrArr.length >= 6) { //if the lelngth of array reaches 6
            alert('you have lost!');
            wrngLtrArr.length = 0; //reset length to zero
            crctPikArr.length = 0 //reset good guesses
            pTwoScore.push('they lost'); // add a loss to the loss array
            document.getElementById('playerTwoScore').innerHTML = `${pTwoScore.length}`; //update loss tally to = number length of array
            resetBoard();   //replace letters with new and pick new word
        }
    }
    this.removeEventListener('click', checkButtonPOne);
}
const checkButtonPTwo = function () {
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
        plays++
        this.classList.add('alph-btn-good'); //change class of button to good
        crctPikArr.push(this.innerHTML); //pushes letter into crctPikArr
        wrdArr = Array.from(word) //changes word to be guessed into array
        crctLtrArr = [...new Set(wrdArr)]; //eliminates duplicate letters
        if (crctLtrArr.length === crctPikArr.length) { //if simplified word array length === correctly guessed letters length
            alert(`The word was ${word} you socre!`); //alert win
            pTwoScore.push('win'); //add win to wins array
            document.getElementById('playerTwoScore').innerHTML = `${pTwoScore.length}`; //update text to equal length of wins array
            hiddenWord.splice(hiddenWord.indexOf(word), 1) //remove word from list 
            crctPikArr.length = 0 //reset correct guesses
            wrngLtrArr.length = 0 //reset incorrect guesses
            resetBoard() //reset buttons and pick new word
        }
    } else {
        plays++
        this.classList.add('alph-btn-bad'); //change class of button to bad
        wrngLtrArr.push(this.innerHTML); //push the letter that is incorrect into an array wrngLtrArr
        checkImg();
        alert('letter not in word');
        if (wrngLtrArr.length >= 6) { //if the lelngth of array reaches 6
            alert('you have lost!');
            wrngLtrArr.length = 0; //reset length to zero
            crctPikArr.length = 0 //reset good guesses
            pOneScore.push('they lost'); // add a loss to the loss array
            document.getElementById('playerOneScore').innerHTML = `${pOneScore.length}`; //update loss tally to = number length of array
            resetBoard();   //replace letters with new and pick new word
        }
    }
    this.removeEventListener('click', checkButtonPTwo);
}
// function to make letter buttons
const makeLettersOne = function () {
    alert("go player one")
    for (var i = 0; i < alphabetArr.length; i++) {
        var newBtn = alphabetArr[i]; // index value is assigned to variable newBtn
        const buttons = document.createElement('button'); //use .createElement to produce functional button and assign to variable button
        buttons.innerHTML = newBtn; //set text of the button 
        const alphaContainer = document.querySelector('.alphabet'); //sets location for new buttons to go to
        buttons.addEventListener('click', checkButtonPOne); // adds event listener to buttons
        alphaContainer.appendChild(buttons); //adds new button into the correct area
    }
}
const makeLettersTwo = function () {
    alert("go player two");
    for (var i = 0; i < alphabetArr.length; i++) {
        var newBtn = alphabetArr[i]; // index value is assigned to variable newBtn
        const buttons = document.createElement('button'); //use .createElement to produce functional button and assign to variable button
        buttons.innerHTML = newBtn; //set text of the button 
        const alphaContainer = document.querySelector('.alphabet'); //sets location for new buttons to go to
        buttons.addEventListener('click', checkButtonPTwo); // adds event listener to buttons
        alphaContainer.appendChild(buttons); //adds new button into the correct area
    }
}
//function to pick from list of words and place divs in hdn-wrd area
const pickWord = function () {
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
//function to get new word and alphabet after game is complete
const resetBoard = function () {
    $(".alphabet").empty(); //find div with class alphabet and remove all children elements
    $(".hdn-wrd").empty();
    if (plays % 2 === 0) {
        makeLettersOne()
    } else {
        makeLettersTwo()
    }
    if (hiddenWord.length === 0) {
        endGame();
    }
    //document.querySelector(".startBtn").addEventListener('click', alert("don't touch that!")) //it acts like its clicked all the time...
    pickWord();
    checkImg();
}
const startGame = function () {
    document.querySelector(".startBtn").removeEventListener('click', startGame)
    resetBoard()
    checkImg()
    console.log("start")
}
const endGame = function () {
    if (pOneScore > pTwoScore) {
        alert("player one wins")
    } else if (pTwoScore > pOneScore) {
        alert("player two wins")
    }
    else {
        alert("it's a tie");
    }

    //before the winner is alerted, the would be next player is alerted(because it is a function of checking the buttons and then checks for a win) Also after win, the buttons reset, and the word tries to reset but can't because the array is empty and there is nothing to split... Also whichever player starts first gets to play twice...
}

document.querySelector(".startBtn").addEventListener('click', startGame)


// make image of man relate to the array length of wrong choices so the code only has to be written once
const checkImg = function (){
    if (wrngLtrArr.length === 1) {
        manImg.src = "images/man/1wrng.png"
    } else if (wrngLtrArr.length === 2) {
        manImg.src = "images/man/2wrng.png"
    } else if (wrngLtrArr.length === 3) {
        manImg.src = "images/man/3wrng.png"
    } else if (wrngLtrArr.length === 4) {
        manImg.src = "images/man/4wrng.png"
    } else if (wrngLtrArr.length === 5) {
        manImg.src = "images/man/5wrng.png"
    } else if (wrngLtrArr.length === 6) {
        manImg.src = "images/man/6wrng.png"
    } else {
        manImg.src = "images/man/0wrng.png"
    }
}