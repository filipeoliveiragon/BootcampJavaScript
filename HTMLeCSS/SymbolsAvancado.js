//Symbol é um identificador único
const uniqueId = Symbol('Hello');

const obj = {
    [uniqueId]: 'Hello',
    _id: 'Hello'
};

console.log(obj);

//Well known symbol

Symbol.iterator
Symbol.split
Symbol.toStringTag

const obj = {
    [Symbol.iterator]()
}

const arr = [1,2,3,4];
const it = arr[Symbol.iterator]();

console.log(it.next());

for (let value of arr){ /////////////////////////////////////////////////
    console.log(value);
}

const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator](){
        let i = 0;
        return {
            next: () => {
                i++;
                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};

const it = obj[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
//Symbol é um identificador único
const uniqueId = Symbol('Hello');

const obj = {
    [uniqueId]: 'Hello',
    _id: 'Hello'
};

console.log(obj);

//Well known symbol

Symbol.iterator
Symbol.split
Symbol.toStringTag

const obj = {
    [Symbol.iterator]()
}

const arr = [1,2,3,4];
const it = arr[Symbol.iterator]();

console.log(it.next());

for (let value of arr){ /////////////////////////////////////////////////
    console.log(value);
}

const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator](){
        let i = 0;
        return {
            next: () => {
                i++;
                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                };
            }
        };
    }
};

const it = obj[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
