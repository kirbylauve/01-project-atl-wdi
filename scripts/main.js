console.log("js working");

const alphabetArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z"];


function makeLetters() {
    for (var i = 0; i < alphabetArr.length; i++) {
        var newBtn = alphabetArr[i];
        console.log(newBtn)
        // const buttons = `<button>${newBtn}</button>`
        const buttons = document.createElement('button')
        buttons.innerHTML = newBtn
        console.log(buttons)
        const alphaContainer = document.querySelector('.alphabet')
        alphaContainer.appendChild(buttons)
    }
}
makeLetters();