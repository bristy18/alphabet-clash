// function play() {
//     const homeSection= document.getElementById('home');
//     homeSection.classList.add('hidden');
//     const page2nd=document.getElementById('page2');
//     page2nd.classList.remove('hidden')
// }

function hideElementById(elementId) {
    const element=document.getElementById(elementId);
    element.classList.add('hidden');
}
function showElementById(elementId) {
    const element=document.getElementById(elementId);
    element.classList.remove('hidden');
}
function addBgColor(elementId) {
    const element=document.getElementById(elementId);
    element.classList.add('bg-amber-500');   
}
function removeBgColor(elementId) {
    const element=document.getElementById(elementId);
    element.classList.remove('bg-amber-500');
    
}
function buttonPress(event) {
    const pressed=event.key;
    if(pressed=='Escape'){
        gameOver();
    }
    else{
        const currentAlphaElement=document.getElementById('currentAlpha').innerText;
let a=0,b=0;
if(pressed==currentAlphaElement){
    const score=document.getElementById('score');
    const currentScore= parseInt(score.innerText);
    a=currentScore+1;
    score.innerText=a;
    removeBgColor(currentAlphaElement);
    continueGame();
}
else{
    const life=document.getElementById('life');
    const currentLife=parseInt(life.innerText);
    b=currentLife-1;
    life.innerText=b;
    removeBgColor(currentAlphaElement);
    continueGame(); 
    if(b==0){
        gameOver();
    }
}
    }

console.log(a);
}
function gameOver() {
    hideElementById('page2');
    showElementById('last');
    const score=document.getElementById('score');
    const finalScore=document.getElementById('final');
    finalScore.innerText=score.innerText;
}

document.addEventListener('keyup',buttonPress);

function getRandomAlpha() {
    const alphabetString ='abcdefghijklmnopqrstuvwxyz';
    const alphabets=alphabetString.split('');
    // console.log(alphabets);

    const randomNum=Math.random()*25;
    const index=Math.round(randomNum);
    
    const alphabet=alphabets[index];
    return alphabet;
}
function continueGame() {
    const alphabet=getRandomAlpha();
    const currentAlphabet=document.getElementById('currentAlpha');
    currentAlphabet.innerText=alphabet;
    
    addBgColor(alphabet);
}
function play() {
    hideElementById('home');
    showElementById('page2');
    continueGame();
}
function playAgain() {
    hideElementById('last');
    showElementById('page2');

    const score=document.getElementById('score');
    score.innerText=0;
    const life=document.getElementById('life');
    life.innerText=5;
    removeBgColor(currentAlphaElement);
    continueGame();
}