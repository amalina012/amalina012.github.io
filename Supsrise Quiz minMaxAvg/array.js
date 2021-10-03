console.clear()

let minMaxAvg = [10, 15, 6, 5, 25];
console.log(Math.min(...minMaxAvg))
console.log(Math.max(...minMaxAvg))

let minMaxAvg2 = [10, 15, 6, 5, 25];
console.log(eval(minMaxAvg2.join('+'))/minMaxAvg2.length)