/**********
 * DATA *
 **********/

const sixes = [8, 3];
const doubleSixes = [8, 3];
const twelves = [8, 3];
const twenties = [8, 3];

/********************
 * HELPER FUNCTIONS *
********************/

const getRandomNumber = function(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    
    return result;
}

const sortByNumber = function(arr) {
  const byNumber = function(item1, item2) {
    return item1 - item2;
  }

  return arr.slice().sort(byNumber);
}

/*************
 * VARIABLES *
 *************/
const resetButton = document.querySelector('#reset-button');

const firstDieButton = document.querySelector('#d6-roll');
const firstMean = document.querySelector('#d6-rolls-mean')
const firstMedian = document.querySelector('#d6-rolls-median');
const firstMode = document.querySelector('#d6-rolls-mode');

const dice1 = document.querySelector('#double-d6-roll-1');
const dice2 = document.querySelector('#double-d6-roll-2');


/*******************
 * YOUR CODE BELOW *
 *******************/
const firstMeanNA = () => {
  // const newP = document.createElement('p');
  firstMean.innerText = 'N/A';
  // firstMean.appendChild(newP);
}
const firstMedianNA = () => {
  const newP = document.createElement('p');
  newP.innerText = 'N/A';
  firstMedian.appendChild(newP);
}
const firstModeNA = () => {
  const newP = document.createElement('p');
  newP.innerText = 'N/A';
  firstMode.appendChild(newP);
}
  

/******************
 * RESET FUNCTION *
 ******************/
const reset = () => {
  console.log('reset')
  firstDieButton.src = './images/start/d6.png';
  firstMeanNA();
  firstMedianNA();
  firstModeNA();
  
}
reset()




/*******************
 * EVENT LISTENERS *
 *******************/
resetButton.addEventListener('click', reset)



/****************************
 * CLICK HANDLING FUNCTIONS *
 ****************************/
firstDieButton.addEventListener('click', () => {
  firstDieButton.src = './images/start/d6.png';
})
dice1.addEventListener('click', () => {
  dice1.src = './images/start/d6.png'
})
dice2.addEventListener('click', () => {
  dice2.src = './images/start/d6.png'
})


/****************
 * MATH SECTION *
 ****************/
