let userScore=0;
let compScore=0;


const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userPara=document.querySelector("#user");
const compPara=document.querySelector("#computer");

const genCompChoice=()=>{
    const options=["rock","paper","Scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame=()=>{  
    msg.innerText=`game was draw.play again `;
    msg.style.backgroundColor="#081b31";
}
const showWinner=(userWin,compChoice,userChoice)=>{
    if(userWin){
        userScore++;
        userPara.innerText=userScore;
        msg.innerText=`you won ! your ${userChoice} beats ${compChoice} ;` ;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compPara.innerText=compScore;
        msg.innerText=`you lost. ${compChoice} beats your ${userChoice}` ;
        msg.style.backgroundColor="red";
        
    }
    

}

const playGame=(userChoice)=>{
    const compChoice=genCompChoice();
    if(userChoice===compChoice){
        drawGame();

    }else{
        let userWin=true;
        if(userChoice==="rock"){
           userWin= compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="Scissors"?false:true;

        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,compChoice,userChoice);
    }

}

choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);

    });

});