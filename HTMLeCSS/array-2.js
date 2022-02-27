//Criação de arrays

//Array.of = Cria uma nova instancia de array a partir do número de parametros informados
const persons = Array.of('Jhon', 'Chris', 'Jenny');
console.log(persons);

const numbersAndString = Array.of(1, 2, "String", "Texto");
console.log(numbersAndString);

const arr = Array(3); //Apenas um parametro cria um array com 3 posições vazias
const arr2 = Array(2,3);//Mais de um parametro cria um array com estes elementos

//Array.from = Cria uma nova instancia de array a partir de um parametro array-like ou interate objetct
const divs = document.querySelectorAll('div'); //Pega todas as divs porém nao cria um array
const arrayDiv = Array.from(divs); //Seleciona e adiciona todas as divs em elementos do array

// PUSH - adicionar um ou mais elementos no final do array e retorna o tamanho do novo array
const frutas = ['melancia', 'banana'];
frutas.push('laranja'); //Adiciona ou final do array

//POP - remove o último elemento do array
const arr3 = ['banana', 'melancia', 'abacate'];
const removedItem = arr3.pop();

console.log(removedItem); //Retorna o elemento excluido

console.log(arr3);


//Unshift - Adiciona elemento no início do array
const arr3 = ['banana', 'melancia', 'abacate'];
const arrLength = arr3.unshift('acerola');

console.log(arrLength); //Retorna o tamanho do vetor

console.log(arr3);

//Shif - Remove no início
const arr3 = ['banana', 'melancia', 'abacate'];
const arrLength = arr3.shift();

console.log(arrLength); //Retorna o elemento excluido

console.log(arr3);

//concat - concatena arrays (imutavel cria um novo array)
const frutas = ['morango', 'melancia', 'banana'];
const salgados = ['coxinha', 'pastel', 'kibe'];
const alimentos = frutas.concat(salgados);

console.log(alimentos);

//Slice = retorna um novo array fatiado
const arr = [0, 1, 2, 3, 4];
console.log(arr.slice(0,2)); // pega de 0 até 2
console.log(arr.slice(2)); //pega a partir de 2
console.log(arr.slice(-1)); // pega 1 elemento do final da lista
console.log(arr.slice(-3)); // pega 3 elmentos do final da lista

//splice - altera um array adicionando novos elementos enquanto remove elementos antigos
const arr = [0, 1, 2, 3, 4];

const frutas = ['morango', 'melancia', 'banana'];
frutas.splice(1, 0, "acerola");
console.log(frutas);

frutas.splice(2, 1, "laranja", "amora");
console.log(frutas);

//Iterar elementos do array
const arr = [0, 1, 2, 3, 4];
arr.forEach((value, index) => {
    console.log(`${index}: ${value}`);
});

//Map retorna um novo array
const arr = [0, 1, 2, 3, 4];
console.log(arr.map(value => value * 2));
console.log(arr);

//flat - retorna um novo array com todos os elementos de um sub-array
const arr = [0, 1, 2, 3, 4];
arr.flat();

const idades = [20, 34, [35, 60, [70, 40]]];
console.log(idades.flat());
console.log(idades.flat(2));

//flatMap - Retorna um novo array assim como a função map e executa um flat de profundidade 1
const arr = [1, 2, 3, 4];

arr.flatMap(value => [value * 2]); //Retorna [2,4,6,8]

arr.flatMap(value => [[value * 2]]); //Retorna [[2], [4], [6], [8]]

//keys - Retorna um Array Iterator que contém as chaves para cada elemento do array
const arr = [1, 2, 3, 4];

const arrIterator = arr.keys();

arrIterator.next();

arrIterator.next();

arrIterator.next();

arrIterator.next();

//Value - retorna um Array Iterator retornando o valor
const arr = [1, 2, 3, 4];

const arrIterator = arr.values();

arrIterator.next();

arrIterator.next();

arrIterator.next();

arrIterator.next();

//entries - retorna par de keys e values
const arr = [1, 2, 3, 4];

const arrIterator = arr.entries();

arrIterator.next();

arrIterator.next();

arrIterator.next();

arrIterator.next();

// find - retorna o primeiro item de um array que satifaz a condição
const arr = [1, 2, 3, 4];

const firstGreaterThanTwo = arr.find(value => value > 2);

console.log(firstGreaterThanTwo);

// findIndex - retorna o indes do primeiro item de um array que satifaz a condição
const arr = [1, 2, 3, 4];

const firstGreaterThanTwo = arr.findIndex(value => value > 2);

console.log(firstGreaterThanTwo);

// filter - retorna um novo array com todos os elementos que satisfazem a condição
const arr = [1, 2, 3, 4];

const filterItems = arr.filter(value => value > 2);

console.log(filterItems);

// IndexOf - retorna o primeiro index em que um elemento pode ser encontrado no array
const arr = [1, 2, 3, 4];

const firstIndexOfItem = arr.indexOf(3);

console.log(firstIndexOfItem);

//lastIndexOf - retorna o ultimo index em que um elemento pode ser encontrado no array
const arr = [1, 2, 3, 4, 3, 3];

const lastIndexof = arr.lastIndexOf(3);

console.log(lastIndexof);


// includes - retorna um boolen verificando se determinado elemento existe no array busca elemento
const arr = [1, 2, 3, 4, 3, 3];

const hasItemOne = arr.includes(3);
console.log(hasItemOne);

const hasItemTwo = arr.includes(5);
console.log(hasItemTwo);

// some - retorna um bollean verificando se pelo menos um item de um array satisfaz a condição
const arr = [1, 2, 3, 3, 4, 3];

const hasSomeEvenNumber = arr.some(value => value % 2 === 0);
console.log(hasSomeEvenNumber);

// some - retorna um bollean verificando se pelo menos um item de um array satisfaz a condição
const arr = [1, 2, 3, 3, 4, 3];

const hasSomeEvenNumber = arr.some(value => value % 2 === 0);
console.log(hasSomeEvenNumber);

// every - retorna um bollean verificando se todos os itens de um array satisfaz a condição
const arr = [1, 2, 3, 3, 4, 3];

const allEvenNumbers = arr.every(value => value % 2 === 0);
console.log(allEvenNumbers);

// sort - ordena elementos de acordo com a condiçao
const persons = [
    {
        name: 'Filipe',
        age: 28,
    },
    { 
        name: 'Pedro',
        age: 22,
    },
    {
        name: 'Jenifer',
        age: 15,
    }
];

persons.sort((current, next) => next.age - current.age);


console.log(persons);

// reverse - inverte o array
const arr = [1, 2, 3, 3, 4, 3];

const arrReverse = arr.reverse();
console.log(arrReverse);

// join - Concatena os elementos do array com uma string
const arr = [1, 2, 3, 3, 4, 3];

const arrJoin = arr.join('-');
console.log(arrJoin);

// reduce - retorna um novo tipo de dado iterando cada posicção de um array
const arr = [1, 2, 3];

const arrReduce = arr.reduce((total, value) => total += value, 0); //Primeiro argumento é retornado e o valor 0 é o tipo e inicialização
console.log(arrReduce);