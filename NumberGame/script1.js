const rNum = Math.floor(Math.random() * 100) + 1;
let guessButtonEl = document.getElementById("guessButton");
let count = 2;
let myArray =[];
let newCount = 9;

function numGuess(){
  let inputEl = document.getElementById("input").value;
  console.log("The Random Number is: " +rNum);
       myArray.push(inputEl);
    if(count <=10){
      if(inputEl == rNum){
        alert(`Yay! You Won! The Random Number was ${rNum}`);
        location.reload();
      }else if(inputEl > rNum){     
        count++; 
        notification.innerHTML = `Your guess was  ${inputEl} . That's too high.` ;  
      }else if(inputEl < rNum){     
        count++;  
        notification.innerHTML = `Your guess was  ${inputEl} . That's too low. ` ;
      }
    }
    else if(count == 11){
      alert(`Sorry you lost! The Random Number is: ${rNum}` );
      location.reload();
     
    }

    notification2.innerHTML = `Previous Guesses: ${myArray} `;
    countLeft.innerHTML = newCount -- ;
    
}

guessButtonEl.addEventListener("click", function(){
    numGuess();
});









