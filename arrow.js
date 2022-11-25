let f1 = function (a) {
    return a;
}

let f2 = v => v;

console.log(f1(10))
console.log(f2(20))

let f3 = (a, b) => a + b
console.log(f3(6, 2))

// error
// let f4 = (id,name) => {id:id, name:name}

// OK
let f4 = (id, name) => ({ id: id, name: name })
console.log(f4(4, 2))

let func = () => {
    console.log(this)
}
func(55)

let func2 = (arguments) => {
    console.log(arguments)
}
func2(55)

function fn() {
    setTimeout(() => {
        // 定義時，this綁定的是fn中的this物件
        console.log(this.a);
    }, 0)

}

var a = 20;
fn.call({ a: 18 });

//回乎函數
var age = 20;
var Person = {
    'age': 18,
    'sayHello': function () {
        setTimeout(function () {
            console.log(this.age);
        });
    }
};
Person.sayHello();

var Person1 = {
    'age': 18,
    'sayHello': function () {
        setTimeout(() => {
            console.log(this.age)
        })
    }
}
Person1.sayHello()