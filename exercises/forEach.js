const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

nums.forEach((num) => {
    console.log(num);
});
  
# OR

const iteratorFunction = (num) => {
  console.log(num);
}

nums.forEach(iteratorFunction);

#multiply: 

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const iteratorFunction = (num) => {
  console.log(num);
}

let sum = 0;

nums.forEach((num) => {
    sum += num
});

console.log(sum)
