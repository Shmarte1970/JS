let books = ['Eloquent JavaScript', 'Secrets of the JavaScript Ninja'];
console.log(books[0]); // => Eloquent JavaScript
console.log(books[1]); // => Secrets of the JavaScript Ninja
console.log(books[6]); // undefined


//Objects

console.log("_____________________");

let eloquentJS = {
    title: 'Eloquent JavaScript',
    author: 'Marijn Haverbeke'
  };
  
  console.log(eloquentJS.title); // => Eloquent JavaScript
  
  let secretsJSninja = {
    title: 'Secrets of the JavaScript Ninja',
    author1: 'John Resig',
    author2: 'Bear Bibeault' // two authors... interesting...
  };
  
  console.log(secretsJSninja.author2); // => Bear Bibeault
  

  //Objetos En Arrays

  const books = [
    {
      title: 'Eloquent JavaScript',
      author: 'Marijn Haverbeke'
    },
    {
      title: 'Secrets of the JavaScript Ninja',
      author1: 'John Resig',
      author2: 'Bear Bibeault'
    }
  ];

  console.log(books[0]);


  