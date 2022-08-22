const cars = ["Seat", "Renault", "Nissan", "Peugeot", "Ferrari"];

function conFor(){
        console.log("Desde el Bucle");
    for (i=0; i<cars.length;i++){        
        console.log(`Index: ${i} - Marcar: ${cars[i]}`);
    }   
    console.log("") ;
}

// mostrar(cars.pop()); // Quitamos el ultimo elemento
conFor(cars.pop() && cars.shift());

cars.shift();
console.log(`Directamente ${cars}`);

conFor(cars.unshift('Ford'));
conFor(cars.push("Lexus"));

let counter=0;

function conWhile(){
        console.log("Con While");
    while(counter < cars.length){
        console.log(`Index: ${counter} - Marcar: ${cars[counter]}`); 
        counter++;
    }
}

conWhile();

function conForeach(){
    console.log("Con foreach");
    cars.forEach(function(coches){
        console.log(`option 1: ${coches}`);
      });  
}

conForeach();

// Ejercicio parametros array

function prinElements(sonArrays){
    console.log("Recibiendo elementos");
    for(i=0; i<sonArrays.length;i++){
        console.log(`Elementos: ${sonArrays[i]}`);
    }
    sonArrays.unshift("Barrio");
    console.log("Añadimos Barrio");
    console.log("");
    for(i=0; i<sonArrays.length;i++){
        console.log(`Elementos: ${sonArrays[i]}`);
    }

}

prinElements (["Ford", "Delfin", 33, "Spartacus", 101]);









