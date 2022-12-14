/*Função de Calcular*/
function calcula() {

    /*identificação das operações checkbox*/
    let checkAdi = document.getElementById("checkadicao");
    let checkSub = document.getElementById("checksubtracao");
    let checkMul = document.getElementById("checkmultiplicacao");
    let checkDiv = document.getElementById("checkdivisao");
    /*captura valores dos campos inputs*/
    let n1 = +document.getElementById("n1").value;
    let n2 = +document.getElementById("n2").value;
    /*pega os valores e seta o resultado*/
    let labelAdi = document.getElementById("adicao");
    let labelSub = document.getElementById("subtracao");
    let labelMul = document.getElementById("multiplicacao");
    let labelDiv = document.getElementById("divisao");
    /*faz várias verificações*/
    if (checkAdi.checked != true && checkSub.checked != true && checkMul.checked != true && checkDiv.checked != true) {
        alert("Nenhuma das opções foram marcadas");
    }else if(checkAdi.checked == true && checkSub.checked == true && checkMul.checked == true && checkDiv.checked == true && n1 =="" && n2=="" ){
        alert("Você precisar informar os valores para realizar os cálculos.");
    } else if(checkAdi.checked == true && checkSub.checked == true && checkMul.checked == true && checkDiv.checked == true){
        /*faz o calculo em massa se todos os checkbox foram marcados*/
        labelAdi.innerText = `O Resultado da adição foi : ${n1 + n2}`;
        labelSub.innerText = `O Resultado da subtração foi : ${n1 - n2}`;
        labelMul.innerText = `O Resultado da Multiplicação foi : ${n1 * n2}`;
        labelDiv.innerText = `O Resultado da Divisão foi : ${n1 / n2}`;
    }else if (n1 == "" && n2 == "") {
        alert("É necessário informar valores para realizar os cálculos.");
    } else if (n1 == "") {
        alert("Campo 1 sem valor.");
    } else if (n2 == "") {
        alert("Campo 2 sem valor.");
    } else if (checkAdi.checked) {
        labelAdi.innerText = `O Resultado da adição foi : ${n1 + n2}`;
    } else if (checkSub.checked) {
        labelSub.innerText = `O Resultado da subtração foi : ${n1 - n2}`;
    } else if (checkMul.checked) {
        labelMul.innerText = `O Resultado da Multiplicação foi : ${n1 * n2}`;
    } else if (checkDiv.checked) {
        labelDiv.innerText = `O Resultado da Divisão foi : ${n1 / n2}`;
    }
    
}

/*Funcionamento do discionario online*/
function discionario() {
    let elementoFormulario = document.querySelector(".js-formulario");
    let elementoResultado = document.querySelector(".js-resultado");
    let elementoCarregamento = document.querySelector(".js-carregamento");
    let elementoResultadoTitulo = document.querySelector(".js-resultado__titulo");
    let elementoResultadoDescricao = document.querySelector(".js-resultado__descricao");

    //https://api.dicionario-aberto.net/word/cavalo


    elementoFormulario.addEventListener("submit", (evento) => {
        evento.preventDefault();
        elementoResultado.classList.remove("display-none");
        elementoCarregamento.classList.remove("display-none");
        let palavra = evento.target[0].value
        let url = `https://api.dicionario-aberto.net/word/${palavra}`;
        fetch(url).then((resposta) => resposta.json())
            .then((resposta) => {
                if (!resposta[0]) {
                    elementoResultadoTitulo.textContent = "Palavra não encontrada, por favor verifique-a e tente novamente.";
                    elementoResultadoDescricao.textContent = "";
                    return;
                }

                let funcaoDeParseamento, elementoParseado;
                funcaoDeParseamento = new DOMParser();
                elementoParseado = funcaoDeParseamento.parseFromString(resposta[0].xml, "text/xml");

                elementoResultadoTitulo.textContent = elementoParseado.getElementsByTagName("form")[0].getElementsByTagName("orth")[0].textContent;
                elementoResultadoDescricao.textContent = elementoParseado.getElementsByTagName("sense")[0].getElementsByTagName("def")[0].textContent;

            })
            .finally(() => {
                elementoCarregamento.classList.add("display-none");
            });
    });

}
/*Função de Relogio digital*/
const relogio = setInterval(function time() {

    const horas = document.getElementById('horas');
    const minutos = document.getElementById('minutos');
    const segundos = document.getElementById('segundos');
    const txtSaudacao = document.querySelector(".txtSaud");
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let seg = dateToday.getSeconds();

    if (hr < 10) hr = `0${hr}`;

    if (min < 10) min = `0${min}`;

    if (seg < 10) seg = `0${seg}`;


    if (hr >= 6 && hr < 12) {
        
        let colorDia = document.getElementById("cardRelogioDigital");
        colorDia.style.background = ("linear-gradient(0deg ,#FFB200 5%,#FFCB42 25%, #277BC0 50%)");
        txtSaudacao.textContent = "Bom dia!";

    }else if (hr >= 12 && hr < 18) {

        let colorTarde = document.getElementById("cardRelogioDigital");
        colorTarde.style.background = ("linear-gradient(0deg ,#D07000 10%,#FFB200 45%, #C55300 90%)");
        txtSaudacao.textContent = "Boa tarde!";

    }else if (hr >= 18) {
        
        let colorNoite = document.getElementById("cardRelogioDigital");
        colorNoite.style.background = ("linear-gradient(0deg ,#577BC1 15%,#344CB7 35%, #1F1D36 70%)");
        txtSaudacao.textContent = "Boa noite!";

    }
    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = seg;

});


function gerarSenha() {

    let caracters = ("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJLMNOPQRSTUVWXYZ!@#$%^&*()+?><:{}[]");
    let tamanhoSenha = document.getElementById("inputlengthSenha").value;
    let password = "";

    if (tamanhoSenha == 0) {
        alert("Por favor, informe a quantidade de caracteres que você deseja para gerar a sua senha.");
        return;
    } else if (tamanhoSenha < 0) {
        alert("Por favor, informe a quantidade de caracteres que você deseja para gerar a sua senha.");
        return;
    } else {
        for (let i = 0; i < tamanhoSenha; i++) {
            let randomNumber = Math.floor(Math.random() * caracters.length);
            password += caracters.substring(randomNumber, randomNumber + 1);
        }
        document.getElementById("password").value = password;
    }

}








