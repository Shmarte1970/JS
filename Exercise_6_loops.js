/*let counter =1;

while (counter <=20){
    console.log(counter);
    counter++;
}*/
/*
let counter2 = 30;
while (counter2 >=0){
    console.log(counter2);
    counter2--;

}*/

/*
for (i = 1; i <= 50; i++){
    console.log(i);
    
}*/

/*
for (i=10; i >= 0; i--){

    console.log("Faltan "+i+" segundos");
    
    if (i === 0){        
        console.log("BOOM!!");           
    }
         
}*/

//let numero = 5;
for (i=1; i <= 50; i++){
    console.log(i);
    if (i%10=== 0 || i%15===0){
        console.log("El numero "+i+" es divisible por 10,15");  
        console.log("Burro");      
    }
    if (i%5=== 0){
        console.log("Este numero "+i+" es divisible por 5");
    }
    if (i%2 !==0 && (i-1)%10 !==0){
        console.log('Mono');

    }
}

