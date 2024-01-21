function somar() {
    var tn1 = document.querySelector('input#txtn1') /*Criando uma variável com a id do primeiro campo da soma*/
    var tn2 = document.querySelector('input#txtn2') /*Criando uma variável com a id do segundo campo da soma*/
    var n1 = Number(tn1.value) /*Convertendo uma string para number*/
    var n2 = Number(tn2.value) /*Convertendo uma string para number*/
    var s = n1 + n2  /*Somando as variáveis*/
    var res = document.querySelector('div#res') /*Criando uma variável para o resultado que será exibido na div*/
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a <strong>${s}</strong>` /* Vai exibir o resultado da soma na div*/
}