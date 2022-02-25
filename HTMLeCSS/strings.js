const textSize = 'Texto'.length;
console.log('Quantidade de letras: ${textSize}');

//Retorna um array quebrando a string por um demilitador
const splittedText = 'Texto'.split('x');
console.log('\nArray com as posições separadas pelo delimitador:', splittedText);

//Busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Text', 'txeT');

//Retorna a "fatia" de um valor
const laschar = 'Texto'.slice(-1);

const allWithoutLastChar = 'Texto'.slice(0, -1);

const secondToEnd = 'Texto'.slice(1);

//Retorna N caracteres a partir de uma posição
const twoCharsbeforefirstPos = 'Texto'.substr(0,2);

