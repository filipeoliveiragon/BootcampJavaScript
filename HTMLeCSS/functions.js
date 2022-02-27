function fn(){
    return 'Code Here';
}

const arrowFn = () => 'Code here'; //Return implicito
const arrowFn = () => {
    //Mais de uma experssao
    return 'Code here';
}

//Funcoes também sao objetos
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

//Receber parametros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

//Receber e retornar funcoes
const controlFnExec => fnParam => allowed => {
    if (allowed) {
        fnParam();
    }
}

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); //Executará a funcao fn
handleFnExecution();     //Nao executara a funcao fn

//controlFnExec como funcao
function controlFnExec(fnParam){
    return function(allowed){
        if(allowed){
            fnParam();
        }
    }
}