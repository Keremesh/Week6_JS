const Candy = require('./Candy')

class ShoppingBasket {
  constructor(items) {
    this.items = items || []
  }

  getTotalPrice() {
    if (this.items.length === 0) {
      return 0.00
    } else if (this.items.length >= 0) {
      return this.items.reduce((total, candy) => total + candy.getPrice(), 0);
    }

    // let totalPrice = 0;
    // this.candies.forEach((candy) => {
    //   totalPrice += candy.getPrice();
    // });
  }
  
   
  addItem(new_candy) {
    this.items.push(new_candy)
  }

}

module.exports = ShoppingBasket;