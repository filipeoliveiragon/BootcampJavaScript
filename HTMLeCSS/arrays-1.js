const users = ['Filipe', 'Pedro', 'Jenifer'];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('W')
}

const persons = [
    {
        name: 'Filipe',
        age: 28,
        gender: gender.MAN
    },
    { 
        name: 'Pedro',
        age: 22,
        gender: gender.MAN
    },
    {
        name: 'Jenifer',
        age: 15,
        gender: gender.WOMAN
    }
];

// //Retonar a quantidade de intes
console.log('Items:', persons.length);

// //Verificar tipo
console.log('Avariável person é um array:', Array.isArray(persons));

// //Iterar os itens do array
persons.forEach(person => {
    console.log(`Nome: ${person.name}`)
});

//Filtrar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log('\nNova lista apenas com homens:', mens);

// //Retornar um novo
const personWithCourse = persons.map(person => {
    person.course = 'Introdução ao JS';
    return person;
});

// console.log('\nPessoas com a adiçao de course:' , personWithCourse);

// //Transforamr um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0 );

console.log('\nSoma de idade das pessoas', totalAge);

//Juntando operações
const totalEvenAges = persons
    .filter(person => person.age % 2 === 0 )
    .reduce((age, person) => {
            age += person.age;
            return age;
}, 0);

console.log('\nSoma de idades das peassoas que possuem idade par: ', totalEvenAges);


