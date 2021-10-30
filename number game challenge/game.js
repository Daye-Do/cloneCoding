const validation = document.querySelector("#validation");
const userSet = document.querySelector("#Set");
const userGuess = document.querySelector("#Guess");
const Hidden = document.querySelector("#Hidden");
const showResult = document.querySelector("#showResult");
const showWin = document.querySelector("#showWin");


function Submit(event){
    event.preventDefault();
    localStorage.setItem("userset",userSet.value);
    localStorage.setItem("userguess", userGuess.value);  


const HIDDEN_CLASSNAME = "hidden";

    const machinePick = Math.floor(Math.random() * userSet.value);
    if(userGuess.value === machinePick){ 
        showResult.innerText = "You won!"
        Hidden.classList.remove(HIDDEN_CLASSNAME);
        showWin.classList.add(HIDDEN_CLASSNAME);
    } else{
        showWin.innerText = "You lost!"
        showWin.classList.remove(HIDDEN_CLASSNAME);
        Hidden.classList.add(HIDDEN_CLASSNAME);

    }
    
}

validation.addEventListener("submit", Submit);


