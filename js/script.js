const table = document.querySelector('.table');
const btn = document.getElementById('btn')
let level = document.getElementById('level')
const text = document.querySelector('.text')

btn.addEventListener('click', function(){
  
  text.classList.add('not-active');

  table.classList.remove('not-active');

  let difficulty = parseInt(level.value);
  
  let tableSize;

  if (difficulty === 1){
    tableSize = 100;
  } else if (difficulty === 2){
    tableSize = 81;
  } else {
    tableSize = 49;
  }  

  for (let i = 0; i < tableSize; i++){
    const square = createSquare(table);
    square.innerHTML = [i + 1];
    square.addEventListener('click',function(){
      this.classList.add('clicked');
    });
  }
})




/**
 * generatore square
 * @param {HTMLDivElement} target 
 * @returns 
 */
function createSquare(target){
  const square = document.createElement('div');

  let difChoice = parseInt(level.value);

  if(difChoice === 1){
    square.classList.add('square','easy')
  }else if(difChoice === 2){
    square.classList.add('square','hard')
  }else if(difChoice === 3){
    square.classList.add('square','crazy')
  }

  target.append(square)
  //console.log('target=',target);
  return square;
}


