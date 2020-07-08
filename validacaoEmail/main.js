function validateForm() {
    var email = document.getElementById('email').value;
    //Declarar uma variável, que é a id email do HTML, nesse caso o  campo emial a ser digitado no site 
    console.log(email);
    
    var password = document.getElementById('password').value;
    //Declarar a variável, que é o Id da password, que nesse caso é o campo senha do site 
    console.log(password);


    console.log(email.length);
    //mostra no console a quantidade de letras no email digitado 
    console.log(password.length);
    //mostra a quantidade de cacateres digitado na senha 


    if (email.length <= 1) {
        // O email deve ter mais de um caractere 
        console.log("O email tem menos que um caracter!");
        //mensagem a ser mostrada no console 
        document.getElementById("alert-email").innerHTML = "Invalid input field. Email should have at least 1 character!";
        document.getElementById("alert-email").style.visibility = "visible";
    };

    if (password.length <= 1) {
        // Senha com menos de um caractere 
        console.log("A senha tem menos que um caracter!");
        //Mensagem a ser mostrada no console
        document.getElementById("alert-password").innerHTML = "Invalid input field. Password should have at least 1 character!";
        document.getElementById("alert-password").style.visibility = "visible";
    };



    console.log(email.includes("@"));
    //Variavel email, document.getElementById('email'), que deve incluir um "@" 




    let emailEnd = ['.com', '.co', '.org', '.net', '.br'];
    //Fazer um vetor, pois a formula "endswith" suporta apenas um dado, assim a fórmula for irá percorrer através de todo o vetor para achar os valores verdadeiros 

    let emailValid = false;
    //decalarar uma variável para mostrar se é verdadeiro ou não os critérios a serem apresentdos. 

    for (let i = 0; i <= emailEnd.length; i++) {
        //fórmula do for. emailEnd.length vai verificar todos os caracteres do email para verificar se cumpre os requisitos. 
        if (email.endsWith(emailEnd[i])) {
            //se o email terminal com algum dos dados declarados do vetor [i] os dados do vetor. 
            emailValid = true;
            //declarar email válido, então verdade 
            break;
            //Colocar um break para que ele pare assmi que o valor for declarado correto. 
        }

        if (emailValid == false) {
            //Se os critérios acima não mostrarem o valor mostrado no vetor 
            alert('email inválido');
            //Colocar um alerta de e-mail inválido. 
        }

    }




}