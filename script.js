const startButton=document.getElementById("startBtn");
const landingPage=document.getElementById("landingPage");
const gamePage=document.getElementById("gamePage");
const playerWinCounter=document.getElementById("playerWinCounter");
const drawCounter=document.getElementById("drawCounter");
const totalRoundsCounter=document.getElementById("totalRoundsCounter");
const computerWinCounter=document.getElementById("computerWinCounter");
const playerSelectionDisplay=document.getElementById("playerSelectionDisplay");
const computerSelectionDisplay=document.getElementById("computerSelectionDisplay");
const rockButton=document.getElementById("rockOption");
const paperButton=document.getElementById("paperOption");
const scissorButton=document.getElementById("scissorOption");
const resetButton=document.getElementById("resetButton");
const loading=document.getElementById("loading");
const playerIcon=document.getElementById("playerIcon");
const computerIcon=document.getElementById("computerIcon");
const lizardButton=document.getElementById("lizardOption");
const spockButton=document.getElementById("spockOption");
const backButton=document.getElementById("backButton");

let currentRoute="home";
let playerWins=0;
let computerWins=0;
let draws=0;
let totalRounds=0;
let computerPlay=0



backButton.addEventListener("click",()=>{
    handleReset();
    routeChange();
    backButton.style.display="none";
})
resetButton.addEventListener("click", ()=>{
    handleReset();
})
startButton.addEventListener("click", ()=>{
    routeChange();
    backButton.style.display="inline";

});
lizardButton.addEventListener("click",()=>{
    onPlayerOptionSelect("Lizard");
});
spockButton.addEventListener("click",()=>{
    onPlayerOptionSelect("Spock");
});
rockButton.addEventListener("click", ()=>{
    onPlayerOptionSelect("Rock");
});
paperButton.addEventListener("click", ()=>{
    onPlayerOptionSelect("Paper");
});
scissorButton.addEventListener("click", ()=>{
    onPlayerOptionSelect("Scissor");
});



onPlayerOptionSelect=(option)=>{
    playerSelectionDisplay.innerHTML=option;
    playerSelectionDisplay.style.display="none";
    computerPlay=Math.floor((Math.random()*100)%6);
    if(option==="Rock") { playerIcon.src="./rock (1).png" }
    if(option==="Paper") { playerIcon.src="./paper.png" }
    if(option==="Scissor") { playerIcon.src="./scissors.png" }
    if(option==="Lizard") { playerIcon.src="./lizard.png" }
    if(option==="Spock") { playerIcon.src="./spock.png" }

    if(computerPlay===0) {computerIcon.src="./rock (1).png"; computerSelectionDisplay.innerHTML="Rock"}
    if(computerPlay===1) {computerIcon.src="./paper.png";    computerSelectionDisplay.innerHTML="Paper"}         
    if(computerPlay===2) {computerIcon.src="./scissors.png"; computerSelectionDisplay.innerHTML="Scissor"}
    if(computerPlay===4) {computerIcon.src="./lizard.png"; computerSelectionDisplay.innerHTML="Lizard"}
    if(computerPlay===5) {computerIcon.src="./spock.png";    computerSelectionDisplay.innerHTML="Spock"}          
    totalRounds++;
    totalRoundsCounter.innerHTML=totalRounds;
    computerSelectionDisplay.style.display="none";
    computerIcon.style.display="none";
    loading.style.display="inline-block";
    setTimeout(()=>{
        loading.style.display="none";
        computerIcon.style.display="";
        gameLogic();
    }, 1500);

}



gameLogic=()=>{
    if(playerSelectionDisplay.innerHTML===computerSelectionDisplay.innerHTML){
        draws++;
        drawCounter.innerHTML=draws;
    } 
    else{
        if(playerSelectionDisplay.innerHTML==="Rock"){
            if(computerSelectionDisplay.innerHTML==="Paper"){
                computerWins++;
                computerWinCounter.innerHTML=computerWins;
            }
            if(computerSelectionDisplay.innerHTML==="Scissor"){
                playerWins++;
                playerWinCounter.innerHTML=playerWins;
            }
            if(computerSelectionDisplay.innerHTML==="Lizard"){
                playerWins++;
                playerWinCounter.innerHTML=playerWins;
            }
            if(computerSelectionDisplay.innerHTML==="Spock"){
                computerWins++;
                computerWinCounter.innerHTML=computerWins;
            }
        }
        if(playerSelectionDisplay.innerHTML==="Paper"){
            if(computerSelectionDisplay.innerHTML==="Rock"){
                playerWins++;
                playerWinCounter.innerHTML=playerWins;
            }
            if(computerSelectionDisplay.innerHTML==="Scissor"){
                computerWins++;
                computerWinCounter.innerHTML=computerWins;
            }
            if(computerSelectionDisplay.innerHTML==="Lizard"){
                computerWins++;
                computerWinCounter.innerHTML=computerWins;
            }
            if(computerSelectionDisplay.innerHTML==="Spock"){
                playerWins++;
                playerWinCounter.innerHTML=playerWins;
            }
        }
        if(playerSelectionDisplay.innerHTML==="Scissor"){
            if(computerSelectionDisplay.innerHTML==="Rock"){
                computerWins++;
                computerWinCounter.innerHTML=computerWins;
            }
            if(computerSelectionDisplay.innerHTML==="Paper"){
                playerWins++;
                playerWinCounter.innerHTML=playerWins;
            }
            if(computerSelectionDisplay.innerHTML==="Lizard"){
                playerWins++;
                playerWinCounter.innerHTML=playerWins;
            }
            if(computerSelectionDisplay.innerHTML==="Spock"){
                computerWins++;
                computerWinCounter.innerHTML=computerWins;
            }
        }
        if(playerSelectionDisplay.innerHTML==="Lizard"){
            if(computerSelectionDisplay.innerHTML==="Rock"){
                computerWins++;
                computerWinCounter.innerHTML=computerWins;
            }
            if(computerSelectionDisplay.innerHTML==="Paper"){
                playerWins++;
                playerWinCounter.innerHTML=playerWins;
            }
            if(computerSelectionDisplay.innerHTML==="Scissor"){
                computerWins++;
                computerWinCounter.innerHTML=computerWins;
            }
            if(computerSelectionDisplay.innerHTML==="Spock"){
                playerWins++;
                playerWinCounter.innerHTML=playerWins;
            }
        }
        if(playerSelectionDisplay.innerHTML==="Spock"){
            if(computerSelectionDisplay.innerHTML==="Rock"){
                playerWins++;
                playerWinCounter.innerHTML=playerWins;
            }
            if(computerSelectionDisplay.innerHTML==="Paper"){
                computerWins++;
                computerWinCounter.innerHTML=computerWins;
            }
            if(computerSelectionDisplay.innerHTML==="Lizard"){
                computerWins++;
                computerWinCounter.innerHTML=computerWins;
            }
            if(computerSelectionDisplay.innerHTML==="Scissor"){
                playerWins++;
                playerWinCounter.innerHTML=playerWins;
            }
        }
    }

}

handleReset=()=>{
    computerWins=0;
    playerWins=0;
    draws=0;
    totalRounds=0;
    computerWinCounter.innerHTML=0;
    playerWinCounter.innerHTML=0;
    drawCounter.innerHTML=0;
    totalRoundsCounter.innerHTML=0;
    playerSelectionDisplay.innerHTML="Player Card";
    computerSelectionDisplay.innerHTML="Computer Card";
    playerSelectionDisplay.style.display="";
    computerSelectionDisplay.style.display="";
    playerIcon.src="";
    computerIcon.src="";
}

const routeChange=()=>{
    if(currentRoute==="home"){
        landingPage.style.display="none";
        gamePage.style.display="flex";
        currentRoute="landingPage";
    }
    else{
        gamePage.style.display="none";
        landingPage.style.display="flex";
        currentRoute="home";
    }
}
