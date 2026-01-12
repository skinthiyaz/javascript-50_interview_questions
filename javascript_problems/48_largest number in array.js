let larget = (num) => {
    let max = 0;
    for (let i = 1; i < num.length; i++) {
        if (num[i] > num[max]) {
            max = i
        }
    }
    return num[max]
}
console.log(larget([1, 2, 3, 55, 6, 7]));