let nome = ["Gustavo", "Lourenço", "Freitas"];
//Vetores para serem adicionados 
let listElement = document.querySelector("ul");
// Variável recebe a LU (lembrando que toda LU tem um LI)
let inputElement = document.querySelector("input");
//Viriável que recebe os dados do input 

function addItem(text){
    //addItem foi adicionado a uma função que a variável foi nomeada de text. (text é APENAS UMA VARIÁVEL.)
   let liElement = document.createElement("li");
   //Variável é igual a criação e uma LI, ainda não dentro do LU 
   let textElement = document.createTextNode(text); 
   // creat text node pega o texto e adiciona na variável. 
   liElement.appendChild(textElement);
   //a função appendchild adiciona a variável adiciona (no creat text node ) e leva ao li element
   listElement.appendChild(liElement);
   // e o li alement adiciona ao listElement e cria a LI dentro da LU. 
}

document.getElementById("btn").addEventListener("click", () => {
    //Pegou o elemento pelo ID a partir do clique 
    addItem(inputElement.value);
    //Nomeou o addItem para pegar os valores do inputElement (.velue é para pegar os valores escritos na caixa)
    inputElement.value = " ";
    //Que pode colocar qualquer string  
});
