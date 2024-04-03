// Fácil: 
// 1. Função para juntar strings com espaço
function juntarStringsComEspaco(strings) {
    return strings.join(' ');
}

// 2. Função para juntar palavras com vírgula
function juntarPalavrasComVirgula(palavras) {
    return palavras.join(',');
}

// Intermediário:
// 3. Função para juntar números com hífen
function juntarNumerosComHifen(numeros) {
    return numeros.join('-');
}

// 4. Função para juntar datas formatadas com ponto e vírgula
function juntarDatasFormatadas(datas) {
    return datas.map(function(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }).join(';');
}

// Exemplos de uso:

// Fácil:
console.log(juntarStringsComEspaco(["Olá", "mundo", "JavaScript"])); // Saída: Olá mundo JavaScript
console.log(juntarPalavrasComVirgula(["maçã", "banana", "laranja"])); // Saída: maçã,banana,laranja

// Intermediário:
console.log(juntarNumerosComHifen([1, 2, 3, 4, 5])); // Saída: 1-2-3-4-5
console.log(juntarDatasFormatadas([new Date('2024-04-01'), new Date('2024-04-02'), new Date('2024-04-03')])); // Saída: 1/4/2024;2/4/2024;3/4/2024

// Difícil:
// 1. Função para juntar elementos de uma matriz com ponto e vírgula
function juntarMatrizComPontoEVirgula(matriz) {
    // Mapeia cada subarray para uma string utilizando join(',') para separar os elementos
    // em cada subarray com uma vírgula, e depois usa join(';') para juntar as strings resultantes com ponto e vírgula
    return matriz.map(function(subarray) {
        return subarray.join(',');
    }).join(';');
}

// 2. Função para juntar strings em maiúsculas com espaço
function juntarStringsMaiusculasComEspaco(strings) {
    // Transforma cada string para maiúsculas utilizando toUpperCase() e depois utiliza join(' ') para
    // juntar as strings resultantes com um espaço
    return strings.map(function(string) {
        return string.toUpperCase();
    }).join(' ');
}

// Exemplos de uso:

// Difícil:
console.log(juntarMatrizComPontoEVirgula([["a", "b", "c"], ["d", "e", "f"], ["g", "h", "i"]])); // Saída: a,b,c;d,e,f;g,h,i
console.log(juntarStringsMaiusculasComEspaco(["olá", "mundo", "javascript"])); // Saída: OLÁ MUNDO JAVASCRIPT
