//****************************  AJAX ASSINCRONO  ***********************************//

// var xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.github.com/users/SamuelAlencar');
// xhr.send(null);

// xhr.onreadystatechange = function() {
//     if(xhr.readyState == 4) {
//         console.log(JSON.parse(xhr.responseText));
//     }
// }



//****************************  PROMISES  ***********************************//

// var minhaPromise = function() {
//     return new Promise(function(resolve, reject) {
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', 'https://api.github.com/users/SamuelAlencar');
//         xhr.send(null);

//         xhr.onreadystatechange = function(){
//             if(xhr.readyState == 4) {
//                 if (xhr.readyState == 200) {
//                     resolve(JSON.parse(xhr.responseText));
//                 } else {
//                     reject('Erro na requisição');
//                 }
//                 console.log(JSON.parse(xhr.responseText));
//             }

//         };
//     });
// }
// minhaPromise()
//     .then(function(response){
//         console.log(response);
//     })
//     .catch(function(error) {
//         console.warn(error);
//     });




//****************************  REQUISIÇÃO ASSINCRONA COM AXIOS  ***********************************//


var userData = axios.get('https://api.github.com/users/diego3g')
    .then(function checarIdade(response){
        var dataUser = response.data;


        var nome = document.createElement('h4');
        var textNome = document.createTextNode(dataUser.name);
        
        document.querySelector('.conteudo').appendChild(nome);
        document.querySelector('.conteudo h4').appendChild(textNome);
        

        
        var bio = document.createElement('p');
        var textBio = document.createTextNode(dataUser.bio);
        
        document.querySelector('.conteudo').appendChild(bio);
        document.querySelector('.conteudo p').appendChild(textBio);
        

    })  
    .catch(function(error) {
        console.warn(error);
    });



    // function checaIdade(idade) {
    //     var dataUser = "teste";
    //     console.log(dataUser);
    //    }
    //    checaIdade(20)
    //     .then(function() {
    //     console.log("Maior que 18");
    //     })
    //     .catch(function() {
    //     console.log("Menor que 18");
    //     });
           




