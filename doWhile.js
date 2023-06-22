function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}

//console.log(positiveSum([1,2,3,4,5]));



function makeNegative(number) {
    if (number > 0) {
        return number * -1;
    }
    return number;
}

//console.log(makeNegative(0.12));

