// class Usuario {
//     constructor() {
//         this.data = [];
//     }
//     isAdmin() {
//         Admin
//         console.log("Funfou");
//     }

// }

// class Admin extends Usuario {
//     constructor() {
//         super();
//         this.email = [];
//         this.senha = [];
//     }
// }




// const User1 = new Usuario('email@teste.com', 'senha123');
// const Adm1 = new Admin('email@teste.com', 'senha123');
// console.log(User1.isAdmin()) // false
// console.log(Adm1.isAdmin()) // true



//// Exercício 2

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

// const idade = usuarios.map( function(data){
//     return data.idade;
// })
// console.log(idade);


// const filter = usuarios.filter( function(data){
//     if (data.idade > 18 && data.empresa === 'Rocketseat'){
//         return data;
//     }   
// })
// console.log(filter);

// const find = usuarios.find(function(data){
//     return data.empresa === 'Google';
// })

// console.log(find);


const multiplicarIdadePorDois = usuarios.filter( function(data){
    const result =  data.idade * 2;
    if (result < 50 ) {
        data.idade =  result;
        return data;
    } 
})
 console.log(multiplicarIdadePorDois);



 // 3.1
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map(item => item + 10);

console.log(newArr);


// class List {
//     constructor() {
//         this.data = [];
//     }

//     add(data) {
//         this.data.push(data);
//         console.log(this.todo);
//     }
// }

// class TodoList extends List{
//     constructor() {
//         super();

//         this.usuario = "Samuel";
//     }

//     mostraUsuario() {
//         console.log(this.usuario);
//     }
// }

// var MinhaLista = new TodoList();

// document.getElementById('novotodo').onclick = function() {
//     MinhaLista.add('Add todo');
// }

// MinhaLista.mostraUsuario();

///////////////////////////////////////
// class Matematica {
//     static soma(a, b) {
//         return a + b;
//     }
// }

// console.log(Matematica.soma(1, 2));
///////////////////////////////////////////




////////////////////////////////

// const arr = [1, 3, 4, 5, 8, 9, 20, 30, 100];

// const newArr = arr.map(function(item, index){
//     return item + index;
// });

// console.log(newArr);


// const sum = arr.reduce(function(total, next){
//     return total + next;
// });

// console.log(sum);


// const filter = arr.filter(function(item) {
//     return item % 2 === 0;
// });

// console.log(filter);


// const find = arr.find(function(item){
//     return item === 4;
// });

// console.log(find);


//////////////////////arrow functions//////////////////////
// const newArr = arr.map(item => item * 2);

// console.log(newArr);


///////// Arrow functions com objetos //////////////////
// const teste = () => ({ nome: 'Samuel', idade: '34', profissão: 'desenvolvedor web'});

// console.log(teste());

// /////////////////////// Valores Padrão /////////////////

// const soma = (a = 3, b = 6) => a + b;


// console.log(soma(1));
// console.log(soma());



//////////////////// Dsestruturação de objetos ///////////////

// const usuario = {
//     nome: 'Samuel',
//     idade: 34,
//     endereco: {
//         cidade: 'Carapicuiba',
//         estado: 'São Paulo',
//     },
// }

// const { nome, idade, endereco:{ cidade } } = usuario;

// console.log(nome);
// console.log(idade);
// console.log(cidade);


// function mostraNome({nome, idade}) {
//     console.log(nome, idade);
// }

// mostraNome(usuario);



/////////////////////// Operadores REST e SPRED ////////

///// REST //////

// const usuario =  {
//     nome: 'Samuel',
//     idade: 34,
//     empresa: 'Google'
// };

// const { nome, ...resto } = usuario;

// console.log(nome);
// console.log(resto);


// const arr = [1, 2, 3, 4, 5, 6, 7];

// const [a, b, ...c] = arr;

// console.log(a);
// console.log(b);
// console.log(c);


// REST

// function soma(a, b, ...params) {
//     return params;
// }
//  console.log(soma(1,3, 4, 5, 6, 7));

//  // SPREAD

//  const arr1 = [1, 2, 3];
//  const arr2 = [4, 5, 6];

//  const arr3 = [...arr1, ...arr2] ;

// //  console.log( arr3);

//  const usuario1 = {
//      nome: 'Samuel',
//      idade: 34,
//      empresa: 'Facebook'
//  };

//  const usuario2 = {...usuario1, nome: 'Jose'};

//  console.log(usuario2);

 /// Template Literals

//  const nome = 'Samuel';
//  const idade = 34;

// //  console.log('Meu nome é ' + nome + ' e tenho ' + idade + ' anos');


// console.log(`Menu nome é ${nome} e tenho ${idade}`);


// // Object short syntax 

//  const nome = 'Samuel';
//  const idade = 34;

//  const usuario = {
//      nome, 
//      idade,
//      empresa: 'Microsoft'
//  };

//  console.log(usuario);






