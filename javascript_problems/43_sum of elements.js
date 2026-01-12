function arrsum (arr){
    let sum = 0;
    arr.forEach(value => {
        sum = sum + value;
        
    });
    return sum;
}
console.log(arrsum([1,2,3,4,5])); 