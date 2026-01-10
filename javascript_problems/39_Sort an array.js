let arr = [3, 6, 3, 2, 5, 7, 8, 1, 6, 2]
// arr.sort((a, b) => a - b)
// console.log(arr);

for (let j = 0; j < arr.length - 1; j++) {
    for (let i = 0; i < arr.length - j - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1]
            arr[i + 1] = temp;
        }

    }
}
console.log(arr)