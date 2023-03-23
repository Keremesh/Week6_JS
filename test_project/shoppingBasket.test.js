const ShoppingBasket = require('./ShoppingBasket')
const Candy = require('./Candy')


describe("ShoppingBasket", () => {
  // const candy1 = new Candy({ name: 'Skitties', price: 2.99 })
  // const candy2 = new Candy({ name: 'Mars', price: 1.49 })
  // const candy3 = new Candy({ name: 'Maltesers', price: 3.49 })
  // const candy4 = new Candy({ name: 'Skittles', price: 1.49 })
  // const newBasket = new ShoppingBasket

  let newBasket;

  beforeEach(() => {
    newBasket = new ShoppingBasket();
  });
   
  describe('addItem() method', () => {
    it('adds a new candy to the basket', () => {
      const candy1 = new Candy({ name: 'Skitties', price: 2.99 })
      newBasket.addItem(candy1);
      expect(newBasket.items.length).toBe(1);
      expect(newBasket.items[0]).toEqual(candy1)
    });
  });

  describe('getTotalPrice() method', () => {
    it('returns the total price of 0 if the basket is empty', () => {
      newBasket.getTotalPrice();
      expect(newBasket.getTotalPrice()).toBe(0.00)
    });

    it('returns the total price if the basket has one item', () => {
      const candy1 = new Candy({ name: 'Skitties', price: 2.99 })
      newBasket.addItem(candy1);
      newBasket.getTotalPrice(candy1.price);
      expect(newBasket.getTotalPrice()).toBe(2.99)
    });

    it('returns the total price if the basket has several items', () => {
      const candy1 = new Candy({ name: 'Skitties', price: 2.99 })
      const candy2 = new Candy({ name: 'Mars', price: 1.49 })
      newBasket.addItem(candy1);
      newBasket.addItem(candy2);
      newBasket.getTotalPrice(candy1.price);
      newBasket.getTotalPrice(candy2.price);
      expect(newBasket.getTotalPrice()).toBe(4.48)
    });
  });

  // describe('applyDiscount() method', () => {
  //   it('returns the total price of 0 if the basket is empty', () => {
      
  //   });
  // });

  

})