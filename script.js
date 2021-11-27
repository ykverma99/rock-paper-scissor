let game = () => {

    let pScore = 0;
    let cScore = 0;

    // startGame

    let startGame = () => {
        let play = document.getElementById('butt');
        let introScreen = document.getElementById('intro');
        let prev = document.getElementById('change')
        play.addEventListener("click", () => {
            prev.classList.add("fadeOut")
            introScreen.classList.add("fadeIn")
        })
    }

    // playMatch

    const playMatch = ()=>{
        let option = document.getElementsByClassName('opt');
        let playerHand = document.getElementById('phand')
        let compHand = document.getElementById('chand');
        let hands = document.getElementsByClassName('hand');
        
        // computer option

        for(let j=0;j<hands.length;j++){
            hands[j].addEventListener("animationend", function(){
                this.style.animation = "";
            })
        }

        const compOption = ["Rock", "Paper", "Scissor"];

        for(let i=0;i<option.length;i++){
            option[i].addEventListener('click', function(){
                const compNumber = Math.floor( Math.random() * 3);        
                const compChoice=compOption[compNumber];

               setTimeout(() => {
                     // compare check
                compareHand(this.textContent,compChoice);
                // Update image
                playerHand.src = `./image/${this.textContent}.png `;
                compHand.src = `./image/${compChoice}.png `;
                   
               },2000);
                playerHand.style.animation ="playerAnimate 2s ease";
                compHand.style.animation ="computerAnimate 2s ease"
            })
        }
    };


    //update points 

    const updateScore = () =>{
        let playerScore = document.getElementById('num');
        let computerScore = document.getElementById('numm')
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }
    const compareHand = (playerChoice,compChoice)=>{
        //update text
        let winner = document.getElementById('win');
        //let compare
        //tie check
        if(playerChoice === compChoice){
            winner.textContent = "It's a tie";
            return;
        }
        //rock choose
        if(playerChoice === 'Rock'){
            if(compChoice === 'Scissor'){
                winner.textContent = "Player win";
                pScore++;
                updateScore();
                return;
            }else{
               winner.textContent = "Computer win";
               cScore++;
               updateScore();
                return;
            } 
        }
        //paper choose
        if(playerChoice === 'Paper'){
            if(compChoice === 'Scissor'){
                winer.textContent = "Computer win"
                cScore++;
                updateScore()
                return;
            }else{
                winner.textContent = "Player win";
                pScore++;
                updateScore()
                return;
            }
        }
        // scissor choose
        if(playerChoice === 'Scissor'){
            if(compChoice === 'Rock'){
                winner.textContent = "Computer win";
                cScore++;
                updateScore()
                return;
            }else{
                winner.textContent = "Player win"
                pScore++;
                updateScore()
                return;
            }
        }
        
    }
    startGame();
    playMatch();
};

game();