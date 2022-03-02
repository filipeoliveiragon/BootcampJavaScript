const uniqueId = Symbol('Hello');

Symbol.iterator;

const arr = [1, 2, 3, 4];
const str = 'Digital Innovation One';

const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
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

//Generators

function* hello() {
    console.log('Hello');
    yield;

    console.log('From');
    yield;

    console.log('Function');
}

const it = hello();
console.log(it);

