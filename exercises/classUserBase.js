class UserBase {
  constructor(users) {
    this.users = users;
  }
    
  count() {
    return this.users.length
  }

  getNames() {
    return this.users.map(user => user.getName())    
  }
  getIntros() {
    return this.users.map(user => user.getIntro())
  }
} 

module.exports = UserBase;
