let computerMove='';
let randomNumber='';
let result='';
const score= {
    wins: 0,
    loses: 0,
    ties: 0
};

function pickcomputerMove(){
    const randomNumber= Math.random();
            if(randomNumber<1/3 && randomNumber>=0){
                computerMove='rock';
            }
            else if(randomNumber<2/3 && randomNumber>=1/3){
                computerMove='paper';
            }
            else if(randomNumber<1 && randomNumber>=2/3){
                computerMove='scissor';
            }    } ;
            let Move=''; 
function playGame(Move){
    if(Move==='rock'){
            if(computerMove==='rock')
            result='tie' ;
             else if(computerMove==='paper')
             result='you lose';
            else if( computerMove==='scissor')
            result='you win';}
    else if(Move==='paper'){
        if(computerMove==='rock')
        result='you win' ;
         else if(computerMove==='paper')
         result='tie';
        else if( computerMove==='scissor')
        result='you lose'  ; 
    }
    else if(Move==='scissor'){
        if(computerMove==='rock')
        result='you lose' ;
         else if(computerMove==='paper')
         result='you win';
        else if( computerMove==='scissor')
        result='tie' ;  


    }
  
    if(result==='you win'){
        score.wins += 1;
    }
    else if(result==='you lose') {
        score.loses += 1;
    }
    else if (result==='tie'){
        score.ties += 1;
    }
    document.querySelector('.scoreBoard').innerHTML = `Wins=${score.wins}, Loses=${score.loses}, Ties=${score.ties}.`;
    document.querySelector('.outcome').innerHTML =`you picked ${Move}. computer picked ${computerMove}. ${result}.`;
   
};

    

    
 