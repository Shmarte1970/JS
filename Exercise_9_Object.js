/*
let student = {
  firstName: 'Bob',
  lastName: 'Hill',
  course: 'Web Dev',
  city: 'Miami',
  age: 29,
  hasPriorExp: false,
  goals: ['career change', 'new skills'],
  step: {
    application: 'approved',
    techTest: 'passed',
    prework: 'submitted',
    course: 'ongoing',
    foundJob: '',
    activeAlumnus: ''
  }
};

console.log(student);*/
/*
let olympicRecords = {
  athletics100Men: 'Justin Gatlin',
  athleticsLongJumpMen: 'Mike Powell'
};

//console.log(olympicRecords);

//console.log(olympicRecords.athletics100Men); // => "Justin Gatlin"

olympicRecords.swimming200Men = 'Michael Phelps';

//console.log(olympicRecords.swimming200Men);

olympicRecords.athletics100Men = 'Usain Bolt';

olympicRecords.doubleOllie = 'Chris Chann';


// console.log(olympicRecords);

delete olympicRecords.doubleOllie;

// console.log(olympicRecords);

let allKeys = Object.keys(olympicRecords);

console.log(allKeys);

for (let key in olympicRecords) {

  console.log(key);

}

for (let key in olympicRecords) {

  console.log(olympicRecords[key]); 

 
}



let product = {
  name: 'headphones',
  price: 120,
  doesItWork: false,
  previousOwner: 'Bob'
};

product['name'];

function Objeto(){
  
  for (let key in product) {
    console.log(`${key}: ${product[key]}`)
    
  }
  console.log("_____________________");
}

Objeto();

delete product.descuento;

Objeto();

product.price = 120;

Objeto();

if(product.price>100){
  product.descuento=10;
}

Objeto();
/*
let valor = product.price*product.descuento/100;

product.price = product.price-valor;

Objeto();

product.price-= product.price*product.descuento/100;

Objeto();

//delete product.descuento;



let variable = 'descuento' in product;

console.log(variable);

if (variable === true){
    console.log(`Tenemos varios ${product.name}€ al precio de ${product.price} con un Dto ${product.descuento}%`);
  }else{
    console.log('Para ti no hay descuento');

  
}



const personas ={
  name: "Bob",
  age: 43
}

console.log(typeof personas);

const ted = {
  texture: "flyffy"
}

console.log(ted["texture"]);

*/


let usuario = {
  name: 'Bob',
  surname: 'Martin',
  age: 25,
  address: {
    country: "USA"
}
}

function printBio (user) {
  return `This is ${user.name} ${user.surname} from ${user.address.country}.`;
  
}

let datas = printBio(usuario);

console.log(datas);



/*
const flight = {
  datals :{
    code: "lkdsjfsdklf",
    departure: {
      airport: "Heatrow",
    },
    arrival:{
      airport: "El Prat"
    }
  }
}

console.log(flight.datals.departure["airport"]);
*/

