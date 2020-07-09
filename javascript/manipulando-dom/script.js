createListName();



// Botão para criar novo elemento em tela ao ser clicado
function createElement() {
    var boxElement = document.querySelector('.box');
    var newElement = document.createElement('div');

    newElement.style.width = '100px';
    newElement.style.height = '100px';
    newElement.style.margin = '10px';
    newElement.style.backgroundColor = '#f00';
    newElement.setAttribute('class', 'box-red');

    boxElement.appendChild(newElement);

}

function removeElement() {
    document.querySelector('.box div').remove('div');
}


var btnNewElement = document.querySelector('.botao-criar');
btnNewElement.onclick = createElement;


var btnRemoveElement = document.querySelector('.botao-remover');
btnRemoveElement.onclick = removeElement;




// A partir do seguinte vetor:
//Preencha uma lista (<ul>) no HTML com os itens da seguinte forma:

function createListName(){

    var nomes = ["Diego", "Gabriel", "Lucas"];

    for (nome of nomes) {
        var newListName =  document.createElement('li');
        newListName.append(nome);
        document.querySelector('ul').appendChild(newListName);
    }
}

function addListName() {
    
}


// Adicionar novo elemento na lista

function adicionar(){
    var inputElement = document.querySelector('input[name=nome]');
    var textInput = inputElement.value;
    if (textInput != "") {
        var newListName =  document.createElement('li');
        newListName.append(textInput);
        document.querySelector('ul').appendChild(newListName);
        resetTextInput();
    } else {
        alert('Digite alguma coisa');
    }

}

function resetTextInput() {
    document.querySelector('#ex2 input[name=nome]').value = "";
}


