/**********
 * DATA *
 **********/

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

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
const diceDouble = document.querySelector('#double-d6-buttons');
const diceMean = document.querySelector('#double-d6-rolls-mean')
const diceMedian = document.querySelector('#double-d6-rolls-median');
const diceMode = document.querySelector('#double-d6-rolls-mode');

const dice12 = document.querySelector('#d12-roll');
const dice12Mean = document.querySelector('#d12-rolls-mean')
const dice12Median = document.querySelector('#d12-rolls-median');
const dice12Mode = document.querySelector('#d12-rolls-mode');


const dice20 = document.querySelector('#d20-roll')
const dice20Mean = document.querySelector('#d20-rolls-mean')
const dice20Median = document.querySelector('#d20-rolls-median');
const dice20Mode = document.querySelector('#d20-rolls-mode');
/*******************
 * YOUR CODE BELOW *
 *******************/




/******************
 * RESET FUNCTION *
 ******************/
const reset = () => {
  console.log('reset')
  firstDieButton.src = './images/start/d6.png';
  dice1.src = './images/start/d6.png';
  dice2.src = './images/start/d6.png';
  dice12.src = './images/start/d12.jpeg'
  dice20.src = './images/start/d20.jpg'
  firstMean.innerText = 'N/A';
  firstMedian.innerText = 'N/A';
  firstMode.innerText = 'N/A';

  diceMean.innerText = 'N/A';
  diceMedian.innerText = 'N/A';
  diceMode.innerText = 'N/A';

  dice12Mean.innerText = 'N/A';
  dice12Median.innerText = 'N/A';
  dice12Mode.innerText = 'N/A';

  dice20Mean.innerText = 'N/A';
  dice20Median.innerText = 'N/A';
  dice20Mode.innerText = 'N/A';
  
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
  const random1 = getRandomNumber(6)
  console.log(random1);
  sixes.push(random1);
  switch (random1) {
    case 1:
      firstDieButton.src = './images/d6/1.png';
      break;
    case 2:
      firstDieButton.src = 'images/d6/2.png';
      break;
    case 3:
      firstDieButton.src = 'images/d6/3.png';
      break;
    case 4:
      firstDieButton.src = 'images/d6/4.png';
      break;
    case 5:
      firstDieButton.src = 'images/d6/5.png';
      break;
    case 6:
      firstDieButton.src = 'images/d6/6.png';
      break;
  }  
})
diceDouble.addEventListener('click', () => {
  const random2 = getRandomNumber(6)
  console.log(random2);
  doubleSixes.push(random2);
  switch (random2) {
    case 1:
      dice1.src = './images/d6/1.png';
      break;
    case 2:
      dice1.src = 'images/d6/2.png';
      break;
    case 3:
      dice1.src = 'images/d6/3.png';
      break;
    case 4:
      dice1.src = 'images/d6/4.png';
      break;
    case 5:
      dice1.src = 'images/d6/5.png';
      break;
    case 6:
      dice1.src = 'images/d6/6.png';
      break;
  }  
})
diceDouble.addEventListener('click', () => {
  const random3 = getRandomNumber(6)
  console.log(random3);
  doubleSixes.push(random3);
  switch (random3) {
    case 1:
      dice2.src = './images/d6/1.png';
      break;
    case 2:
      dice2.src = 'images/d6/2.png';
      break;
    case 3:
      dice2.src = 'images/d6/3.png';
      break;
    case 4:
      dice2.src = 'images/d6/4.png';
      break;
    case 5:
      dice2.src = 'images/d6/5.png';
      break;
    case 6:
      dice2.src = 'images/d6/6.png';
      break;
  }  
})
dice12.addEventListener('click', () => {
  const random4 = getRandomNumber(12)
  console.log(random4);
  twelves.push(random4);
  switch (random4) {
    case 1:
      dice12.src = './images/numbers/1.png';
      break;
    case 2:
      dice12.src = 'images/numbers/2.png';
      break;
    case 3:
      dice12.src = 'images/numbers/3.png';
      break;
    case 4:
      dice12.src = 'images/numbers/4.png';
      break;
    case 5:
      dice12.src = 'images/numbers/5.png';
      break;
    case 6:
      dice12.src = 'images/numbers/6.png';
      break;
    case 7:
      dice12.src = './images/numbers/7.png';
      break;
    case 8:
      dice12.src = 'images/numbers/8.png';
      break;
    case 9:
      dice12.src = 'images/numbers/9.png';
      break;
    case 10:
      dice12.src = 'images/numbers/10.png';
      break;
    case 11:
      dice12.src = 'images/numbers/11.png';
      break;
    case 12:
      dice12.src = 'images/numbers/12.png';
      break;
  }  
})
dice20.addEventListener('click', () => {
  const random5 = getRandomNumber(20)
  console.log(random5);
  twenties.push(random5);
  switch (random5) {
    case 1:
      dice20.src = './images/numbers/1.png';
      break;
    case 2:
      dice20.src = 'images/numbers/2.png';
      break;
    case 3:
      dice20.src = 'images/numbers/3.png';
      break;
    case 4:
      dice20.src = 'images/numbers/4.png';
      break;
    case 5:
      dice20.src = 'images/numbers/5.png';
      break;
    case 6:
      dice20.src = 'images/numbers/6.png';
      break;
    case 7:
      dice20.src = './images/numbers/7.png';
      break;
    case 8:
      dice20.src = 'images/numbers/8.png';
      break;
    case 9:
      dice20.src = 'images/numbers/9.png';
      break;
    case 10:
      dice20.src = 'images/numbers/10.png';
      break;
    case 11:
      dice20.src = 'images/numbers/11.png';
      break;
    case 12:
      dice20.src = 'images/numbers/12.png';
      breanumbers
    case 13:
      dice20.src = './images/numbers/13.png';
      break;
    case 14:
      dice20.src = 'images/numbers/14.png';
      break;
    case 15:
      dice20.src = 'images/numbers/15.png';
      break;
    case 16:
      dice20.src = 'images/numbers/16.png';
      break;
    case 17:
      dice20.src = 'images/numbers/17.png';
      break;
    case 18:
      dice20.src = 'images/numbers/18.png';
      break;
    case 19:
      dice20.src = './images/numbers/19.png';
      break;
    case 20:
      dice20.src = 'images/numbers/20.png';
      break;
  }  
})



/****************
 * MATH SECTION *
 ****************/
