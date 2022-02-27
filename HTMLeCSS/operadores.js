//Estritamente igual ===
3 === var1

//Estritamente diferente
var1 !== "3"
3 !== '3'

// Operador ternario
condicao ? valor1 : valor2

true ? 'foo' : 'bar' //Retorna 1 valor
false ? 'foo' : 'bar' // Retorna 2 valor

//Spreads interam parametros utilizando "..."
var partes = ['ombro', 'joelhos'];
var musica = ['cabeca', ...partes, 'e', 'pés'];

//Operadores binários
//in
something in somethingitems

//Arrays
var arvores = new Array("pau-brasil", "louceira", "cedro", "carvalho", "sicomoro");
//Verificando se possui o indice 0 3 e 6
0 in arvores; //true
3 in arvores; //true
6 in arvores; //true

//Verificando se possui a string
"cedro" in arvores; //retorna false, precisa especificar o número do indice ficando "cedro" in arvores[2]
"lenght" in arvores; // retorna true pois é uma propriedade de array

var meucarro = {
    marca: 'Honda',
    modelo: 'Accord',
    ano: 1998
};

console.log("marca" in meucarro);
console.log("modelo" in meucarro);

// Instanceof
objeto instanceof tipoObjeto

var dia = new Date(2018, 12, 17);

if(dia instanceof Date){
    
}