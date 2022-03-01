// ... pontos é um rest operator
// ... spread operator

const multipy = (...args) => args.reduce((acc, value) => acc * value, 1);

const  sum = (a, b, ...rest) => {
    console.log(a, b, rest);
    return multipy(...rest);
};


console.log(sum(5,5,5,2,3));

//Spread operator pode ser utilizado em strings, arrays, objects literais e objetos iteráveis
//Spread quebra os itens

const str = 'Digital Innovation One';

function LogArgs(...args) {
    console.log(args);
}

//LogArgs(...str);

const arr = [ 1,2,3,4];

const arr2 = [...arr,6,7,8]

console.log(...arr2);

//Objetos literais só pode-se usar spread de objetos pra objetos
const obj = {
    test: 123
};

const obj2 = {
    ...obj,
    test2: 'hello'
};

console.log(obj2);

const obj = {
    test: 123,
    subOjb: {
        test: 123
    }
}


//Destruction Assignment

var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

var [apple2, banan2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange',['Tomato']];

console.log(tomato2);

var obj = {
    name: 'Celso'
}

var name = obj.name;

var { name } = obj;

console.log(name);
console.log(obj);