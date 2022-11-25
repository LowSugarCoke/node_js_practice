var foo = 'bar'
var baz = { foo }
console.log(baz)

var bazz = { foo: 'bar' }
console.log(bazz)


function f(x, y) {
    return { x, y }
}
// 等於
function f1(x, y) {
    return { x: x, y: y }
}

console.log(f(1, 2))
console.log(f1(2, 3))



var o1 = {
    method() {
        return "Hello!"
    }
};
//等於
var o2 = {
    method: function () {
        return "Hello!";
    }
};

console.log(o1.method())
console.log(o2.method())

var birth = '2000/01/01';
var Person = {
    name: "張三",
    //等於birth: birth
    birth,

    //等於hello: function()...
    hello() { console.log('我的名字是', this.name) }
};

console.log(Person.birth)
Person.hello()

const obj = {
    *myGenerator() {
        yield 'hello world'
    }
};

const obj2 = {
    myGenerator: function* () {
        yield 'hello world';
    }
}
obj.myGenerator()
console.log(obj.myGenerator().next())
// console.log(obj2.myGenerator())