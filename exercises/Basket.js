class ShoppingBasket {
  constructor(basket) {
    this.basket = basket || [];
  }
  getTotalPrice() {
    return this.basket.reduce((total, candy) => total + candy.getPrice(), 0);
  }
  addItem(candy) {
    return this.basket.push(candy);
  }
}

module.exports = ShoppingBasket;