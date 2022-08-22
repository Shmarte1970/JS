/*
function WerewolfCheck(name){
    let resul=name.includes("meter");  
    if (resul == true){
        console.log("Is a metric unit");
    }else{
        console.log("not a metric unit");
    }

} 

// let valor=WerewolfCheck('Werewolf');
let valor=WerewolfCheck('meterorologica');
*/
/*
function metricUnitCheck (unitName) {
    let resul=unitName.endsWith("meter");  
     if (resul == true){
         console.log("Is a metric unit");
     }else{
         console.log("not a metric unit");
     }
 }
 
 let valor=metricUnitCheck('rorometer');

*/


let texto = "ab;)cadef;)aghia;)";
let contar = 0;
let start = 0;
function countSmilies (message) {
    
    while ((start = texto.indexOf(";)", start) + 1) > 0) {
        contar++;    
    }
  return contar;
};

countSmilies(texto);

console.log(contar);





