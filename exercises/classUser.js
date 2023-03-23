class User {
constructor(name) {
this.name = name;
}
getName() {
return this.name;
}
getIntro() {
console.log(`Hi my name is ${this.name}`);
}
}

module.exports = User;
