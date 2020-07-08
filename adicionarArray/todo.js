let todoList = new Array();

function addTodoItem(todo) {
    var ul = document.getElementById("todosList");
    var li = document.createElement("li");
    // list
    li.className = "list-group-item";
    // o li está chamando a função NewObj, logo o "todo", que é o nome da função seguido por "." e o description e dueDate listados na variável obj
    li.appendChild(document.createTextNode(todo.description + " - " + todo.dueDate));
    ul.appendChild(li);
    //quando voce apertar o botão "todoList" o método push adiciona um dado o vetor e especificar o os métodos "descripition" "dueDate"
    todoList.push(todo.description, todo.dueDate);
}

function showErrorMessage(message) {
    var alert = document.getElementById("alert");
    alert.innerHTML = message;
    alert.style.visibility = "visible";
}

function hideErrorMessage() {
    document.getElementById("alert").style.visibility = "hidden";
}

function onAddClicked() {
    var description = document.getElementById("description").value;
    var dueDate = document.getElementById("dueDate").value;
    // console.log("description: " + description);
    // console.log("dueDate: " + dueDate);
    //Criação de uma variável que foi linkada com o obejto listada "NewObj" abaixo que tem dois padrões "description" e "dueDate"
    let obj = NewObj(description, dueDate);
    //chamei a função que ira adicionar a tela com o nome da variável que dei o nome do obejto.      
    if (validTodo(obj) == true) {
        addTodoItem(obj);
    }
}

//Criação de uma função global nomeando de "NewObj" com caracteristicas "description" "dueDate"
function NewObj(description, dueDate) {
    //
    return {
        //atrelando  o primeiro "description" com o segundo "description". O segundo description está atrelado a primeira caracteristica da função. O mesmo acontece com o dueDate 
        "description": description,
        "dueDate": dueDate
    }
}

//Função para validar todos os campos e "todo" é tudo o que está escrito  na funcao  
function validTodo(todo) {
    //todo é o parametro do validTodo.descrição.tamanho igual a 0 
    if (todo.description.length === 0) {
        //Mostrar a mensagem de erro 
        showErrorMessage("Descrição Obrigatória!");
    }
    //Caso todo o parametro do validTodo.dueDate.length igual a 0
    else if (todo.dueDate.length === 0) {
        //mostrar a mensagem de erro 
        showErrorMessage("Data Obrigatória!");
    }
    else {
        //Caso os parametros todos sejam falsos esconder mensagem de erros
        hideErrorMessage()
        //retornar como verdadeiro
        return true;
    }

    //retornar o que não está dentro do else como false
    return false;
}




//Criação da função para apagar todos os itens. 
function clearTodos() {
    //Criar um botão que apaga todos os itens 
    document.getElementById("btnClear").addEventListener("click", () => {
        //Criar uma variável para pegar os dados do botão "todosList"
        let ul = document.getElementById("todosList");
        //Pegar ul e incluir no html como "" = vazio. 
        ul.innerHTML = "";
        //Quando clicar no botão para apagar o todoList, que é o array o tamanho do array será de 0 
        todoList = 0;
    });
}

//É preciso chamar essa função no final do código, pois ela é responsável por apagar todos.
clearTodos();

