const addToBatch = (array, number) => {
    const newArray = array.concat(number);

    if (array.length <= 5) {
        console.log(newArray)
    } else {
        console.log(array)
    }
}

addToBatch([1], 3);
addToBatch([1, 2, 3], 4); 

addToBatch([], 8); 

addToBatch([1, 2, 3, 4, 5, 6], 7); 

addToBatch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10); 
