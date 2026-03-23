let titulo = document.querySelector("h1");
titulo.innerText = 'Hora do Desafio';

function mensagemConsole() {
    console.log('O botão foi clicado!');
}

function mensagemAlert() {
    alert('Eu amo JS!');
}

function perguntaPrompt() {
    let cidade = prompt('Me fale uma cidade do Brasil que você já visitou.');
    alert(`Estive em ${cidade} e lembrei de você!`);
}

function funcaoSoma() {
    let numero1 = prompt('Digite o primeiro número:');
    let numero2 = prompt('Digite o segundo número:');
    let soma = Number(numero1) + Number(numero2);
    alert(`A soma dos números é: ${soma}`);
}