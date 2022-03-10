/*console.log("Typescript");

//soma no typescript

function soma(a: number, b: number){
    return a + b;
}

soma(1, 4);


//types e interfaces

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquático';
    domestico: boolean;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
    porte: 'p' | 'm' | 'g';
}

type IDomestico = IFelino | ICanino; //Define um dos tipos

const animal: IAnimal = {
    nome: 'Elefante',
    tipo: "aquático"
}

*/

const input = document.getElementById('input') as HTMLInputElement; //"as" e define o elemento

input.addEventListener('input', (event) => { 
    const i = event.currentTarget as HTMLInputElement;
    console.log('i');
})

//template com typescript
function adicionaApendiaALista<T>(array: T[], valor: T){
    return array.map(() => valor);
}


adicionaApendiaALista(['A', 'B','C'], 'A');


//Condicionais
interface IUsuario {
    id: string;
    email: string;
}

interface IAdmin extends IUsuario{
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: IUsuario | IAdmin){
    if('cargo' in usuario){
        //redirecionar para área de admin
    }

    //se nao redireciono para área de usuário
}


//Dados opcionais
interface IUsuario {
    id: string;
    email: string;
    cargo?: 'funcionario' | 'gerente' | 'coordenador' | 'supervisor'; //dado opcional, definido ou null
}

function redirecione2(usuario: IUsuario){
    if(usuario.cargo){
        //redirecionar(usuario.cargo);
    }
    //redirecionar para a área do usuário
}

//readonly e private
interface Cachorro{
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

type CachorroSomenteLeitura = {
    readonly [K in keyof Cachorro]-?: Cachorro[K];
}

class MeuCachorro implements CachorroSomenteLeitura {
    idade;
    nome;
    parqueFavorito;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro('Apolo', 14);


// OMIT

interface Pessoa{
    nome: string;
    idade: number;
    nacionalidade: string;
}

interface Brasileiro extends Omit<Pessoa, 'nacionalidade'> { //OMIT remove os dados da classe, 1 param o objeto segundo o item
}





