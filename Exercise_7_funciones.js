/*

function hola(){
    console.log("Hola");
}

hola();*/

/*

function printInput(theInput){
    console.log(`Passed input is: ${theInput}`)
  }
  
//printInput(2); // => Passed input is: 2
//printInput("Ironhack is the best!");
printInput("Pinta esto por pantalla");
*/

function colorMix(col1, col2){

        if ((col1 === 'red' && col2 === 'blue') || (col1 === 'blue' && col2 === 'red')) {
          return 'violet';
        } else if ((col1 === 'red' && col2 === 'yellow') || (col1 === 'yellow' && col2 === 'red')) {
          return 'orange';
        } else if ((col1 === 'yellow' && col2 === 'blue') || (col1 === 'blue' && col2 === 'yellow')) {
          return 'green';
        }
      
      
}

let myColor = colorMix('red','yellow');
console.log(myColor);
