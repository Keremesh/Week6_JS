// Pt1
// const numbers = ["1763687364", "4763687363", "7867867862", "AAAA#####AAAA#87@768767382672", "4763687363", "4763687363"]

// const validLength = (phoneNumber) => {
//   return phoneNumber.length < 11
// }

// const validNumbers = numbers.filter(validLength)
// console.log(validNumbers)

// Pt2
// const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];
// const generateMessages = (name) => {
//     console.log(`Hello, ${name}, enjoy a discount`)
// }
// names.map(generateMessages);

// Pt3

const namesAndDiscounts = [
  { name: 'Anna', discount: 50 },
  { name: 'Laura', discount: 40 },
  { name: 'Josh', discount: 30 },
  { name: 'Min', discount: 50 },
  { name: 'Karla', discount: 60 }
];

const generateMessages = ({name, discount}) => {
    console.log(`Hello, ${name}, enjoy ${discount} off`)
}

namesAndDiscounts.map(generateMessages);




