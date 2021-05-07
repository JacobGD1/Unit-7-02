document.getElementById('button').addEventListener('click', comparison)
// connects comparison button to event listener

let userInput = 0
// sets user imput=0 as a variable

function comparison () {
// get user input and convert to integer
  userInput = document.getElementById('input').value
  userInput = parseInt(userInput)

// check if userInput us less than 0
  if (userInput < 0) {
    document.getElementById('answer').innerHTML = 'Negative'
  } else {
// if (userInput < 0) is true than anything in between the braces will happen. if fales than the other one will happen
    document.getElementById('answer').innerHTML = 'Positive'
  }

}
