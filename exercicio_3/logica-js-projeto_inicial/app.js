function calcularIMC(peso, altura) {
    let resultado = peso / (altura * altura);
    console.log(resultado);
}
calcularIMC(72, 1.82);

function fatorial(numero){
    if (numero <= 1){
        return 1;
    }else {
        let resultado = numero * fatorial(numero - 1);
        return resultado;
    }

}
console.log(fatorial(5));

function conversaoDolar(valorEmDolar){
    let valorEmReal = valorEmDolar * 4.80;
    console.log(`O valor em real é R$ ${valorEmReal}`);
}
conversaoDolar(100);

function areaRetangulo(largura, altura){
    let area = largura * altura;
    console.log(`A área do retângulo é ${area}`);

}
areaRetangulo(5, 3);

function areaCirculo(raio){
    let PI = 3.14;
    let area = PI * raio * raio;
    console.log(`A área do círculo é ${area}`);
}
areaCirculo(4);

function tabuada(numero){
    console.log(`Tabuada do ${numero}:`);
    for(let i = 1; i <= 10; i++){
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`);
    }
    
}
tabuada(7);