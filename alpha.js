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