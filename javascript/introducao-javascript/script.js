


//Crie uma função que dado o objeto a seguir:

// var endereco = {
//     rua: "Rua dos pinheiros",
//     numero: 1293,
//     bairro: "Centro",
//     cidade: "São Paulo",
//     uf: "SP"
// };

// function resultado(){
//     var texto = 'O usuário mora em '+ endereco.cidade + '/'+ endereco.uf +', no bairro '+ endereco.bairro +', na rua "'+endereco.rua +'" com nº '+ endereco.numero +'.';
//     console.log(texto);
//     return texto;
// }

// resultado();

// Crie uma função que dado um intervalo (entre x e y) exiba todos número pares:

// function pares(x, y) {
//      for (var i=x; i <= y; i++) {
//         var resultado = i;
//         if (resultado % 2 == 0) {
//             console.log(resultado);
//         }
//      }

// }
// pares(1, 10);


// Escreva uma função que verifique se o vetor de habilidades passado possui a habilidade "Javascript" e retorna um booleano true/false caso exista ou não
// function temHabilidade(skills) {
//     var resultado = skills;
//     for (i = 0; i < resultado.length; i ++) {
//         var retorno = (skills[i] == "Javascript") ? true : false; 
//         console.log(retorno);
//     }
// }
// var skills = ["Javascript", "ReactJS", "React Native"];
// temHabilidade(skills); // true ou false

// Escreva uma função que dado um total de anos de estudo retorna o quão experiente o usuário é: 
// function experiencia(anos) {
//     switch (anos) {
//         case 0: 
//             console.log("Iniciante")
//             break;
//         case 1: 
//             console.log("Iniciante")
//             break;
//         case 2: 
//             console.log("Intermediário")
//             break;
//         case 3: 
//             console.log("Intermediário")
//             break;
//         case 4: 
//             console.log("Avançado")
//             break;
//         case 5: 
//             console.log("Avançado")
//             break;
//         case 6: 
//             console.log("Avançado")
//             break;
//         default: 
//             console.log("Jedi")
//             break;
//     }
// }
// var anosEstudo = 5;
// experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master


// Dado o seguinte vetor de objetos:
var usuarios = [
    {
        nome: "Diego",
        habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
        nome: "Gabriel",
        habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

// Escreva uma função que produza o seguinte resultado:
// O Diego possui as habilidades: Javascript, ReactJS, Redux
// O Gabriel possui as habilidades: VueJS, Ruby on Rails, Elixir

for (usuario of usuarios) {
    var strUsuario = "O " + usuario.nome + " possui as habilidades: " + usuario.habilidades.join(', ') ;
    console.log(strUsuario);
}