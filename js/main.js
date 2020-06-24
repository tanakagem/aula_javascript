function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    //console.log(document.getElementById("agradecimento"))
    //alert("Obrigado por clicar")
}

function redirecionar(){
    window.open("https://digitalinnovation.one/");
    //window.location.href = "https://digitalinnovation.one/"
}

function trocar(elemento){
    //document.getElementById("mousemove").InnerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
}

function voltar(elemento){
    //document.getElementById("mousemove2").InnerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("Página carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}



/*
function validadeIdade (idade){
    if (idade >= 18){
        validar = true
    }else {
        validar = false
    }
    return validar;
}
var idade = prompt ("Qual a sua idade?");
validadeIdade (idade);
console.log (validar);
*/

/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/
/*
var count;
for (count = 0; count >= 5; count++){
    alert(count);
}
*/

/*
var count = 0
while (count >= 5){
    console.log (count);
    alert (count);
    count++;
}
*/

/*
var idade = prompt("Qual a sua idade?")
if (idade >= 18){
    alert("Maior de idade")
}else {
    alert("Menor de idade")
}
*/

/*
var frutas = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log (frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome: "maça", cor: "vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/ 

//var lista = ["maça", "uva", "pêra"];

//lista.push("laranja");
//lista.pop();
//console.log (lista)
//console.log (lista.toString())
//console.log (lista.join(" - "))

//var nome = "Gabriel Souza";
//var idade = 21;
//var idade2 = 10;
//alert(nome + " tem " + idade + " anos ");
//alert(idade + idade2)