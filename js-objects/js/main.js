var myObject = {
    name:"Pedro",
    language: "JavaScript",
    codingLevel: 9001,
    favoritegames:['C&C', "Call of Duty", "zoombies vs plants"],
    objetintoObjet:{
        frontEnd:"JavaScript",
        backEnd:"PhP"
    }
};

//console.log(myObject);

for(var prop in myObject){
    console.log(prop, myObject[prop]);
}