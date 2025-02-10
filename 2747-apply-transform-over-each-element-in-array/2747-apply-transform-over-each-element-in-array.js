/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */



function map(arr, fn) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(fn(arr[i], i));
    }
    return newArray;
}


const arr = [1, 2, 3];
const plusOne = (n) => n + 1;
console.log(map(arr, plusOne)); 
