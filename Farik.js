function printPrice (product)  {
    product= {
    name: 'Lenovo X3 Carbon',
    price: {
        eu: {
          value: 220,
          currency: '€'
        }
    }
  }
    return` ${product.name} - ${product.price.eu.value}$ {product.price.eu.currency} `
  }
  
  let productType =printPrice ('PC');

  console.log(productType);