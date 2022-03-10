let user = {
    name: 'Filipe',
    lastName: 'Oliveira Gonçalves'
};

//Recupera as chaves do objetoñ
console.log('Propriedades do objeto user: ', Object.keys(user));

//Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user: ', Object.values(user));

//Retorna um array de arryas contendo [ nome_prop, valor_prop ]
console.log('\nLista de propriedades e valores: ', Object.entries(user));

//Margear propriedades de objetos
Object.assign(user, {fullName: 'Filipe Oliveira Gonçalves'});

console.log('\nAdiciona a propriedade fullName no objeto user', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, {age: 26}));

//Previne todas as alterações de um objet
const newObj = { foo: 'bar'};
//Nao deixa o objeto alterar
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariável newObj após as alterações: ', newObj);

//Permite apenas as alterações de propriedades existentes em um objeto
const person = {name: 'Filipe'};
Object.seal(person);

person.name = 'Filipe Oliveira';
delete person.name;
person.age = 26;

console.log('\nVariável person após as alterações: ', person);