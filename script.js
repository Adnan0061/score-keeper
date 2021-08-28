var p1 = document.getElementById('p1')
var p2 = document.getElementById('p2')
var reset = document.getElementById('reset')
var p1Value = document.getElementById('p1Value')
var p2Value = document.getElementById('p2Value')
var inputNum = document.getElementsByTagName('input')[0];
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
document.getElementsByTagName('span')[2].textContent = winningScore;

p1.addEventListener("click", function(){
    if(!gameOver){
    p1Score++;
    p1Value.textContent = p1Score;
    if(p1Score === winningScore){
        gameOver = true;
        p1Value.classList.add('winner');
    }
    }
    console.log(p1Score);
})
p2.addEventListener("click", function(){
    if(!gameOver){
    p2Score++;
    p2Value.textContent = p2Score;
    if(p2Score === winningScore){
        gameOver = true;
        p2Value.classList.add('winner');
    }
    }
    console.log(p2Score);
})

function resetbtn(){
    p1Score = 0;
    p2Score = 0;
    p1Value.textContent = p1Score;
    p2Value.textContent = p2Score;
    gameOver = false;
    p1Value.classList.remove('winner');
    p2Value.classList.remove('winner');

} 

reset.addEventListener('click', function(){
    resetbtn();
})

inputNum.addEventListener('change', function(){
    document.getElementsByTagName('span')[2].textContent = inputNum.value;
    winningScore = Number(inputNum.value);
    resetbtn()
})