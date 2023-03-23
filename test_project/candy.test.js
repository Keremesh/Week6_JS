const Candy = require('./Candy')

describe('Candy', () => {
  
  const candy1 = new Candy({ name: 'Skitties', price: 2.99 })
  const candy2 = new Candy({ name: 'Mars', price: 1.49 })
  // const candy3 = new Candy({ name: 'Maltesers', price: 3.49 })
  // const candy4 = new Candy({ name: 'Skittles', price: 1.49 })
  
  // it('constructs new Candy instance', () => {
    // const candy1 = new Candy({ name: 'Aero', price: 1.99 })
    // const candy2 = new Candy({ name: 'Skitties', price: 2.99 })
    // expect(candy1.constructor({name, price})).toBe({ name: 'Aero', price: 1.99 }) 
    // expect(candy2.getName()).toBe("Skitties") 
  // });

  it('gets candy name', () => {
    expect(candy1.getName()).toBe("Skitties") 
    expect(candy2.getName()).toBe("Mars") 
  });
  
  it('gets candy price', () => {
    expect(candy1.getPrice()).toBe(2.99) 
    expect(candy2.getPrice()).toBe(1.49) 
  });

});