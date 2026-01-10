let arr = [78, 54, 76, 32, 11, 1, 2]
let arr2 = []
// let arr2 = [...arr]
// console.log(arr2);
arr.forEach((value) => {
    arr2.push(value)
})
arr2.pop()
console.log(arr, arr2);