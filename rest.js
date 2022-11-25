function add(...values) {
    let sum = 0;
    for (let val of values) {
        sum += val;
    }

    return sum;
}


console.log(add(2, 5, 3))


// // arguments 變數的寫法
// function sortNumbers1(arguments) {
//     return Array.prototype.slice.call(arguments).sort();
// }

// // rest的寫法
// let softNumbers2 = (...numbers) => numbers.sort();

function push(array, ...items) {
    items.forEach(function (item) {
        array.push(item);
        console.log(item);
    });
}

let a = []
push(a, 1, 2, 3)

