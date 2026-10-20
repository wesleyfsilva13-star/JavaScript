//console.log() mostra uma informação no console
console.log("Olá, Mundo!");
console.log("sexy,seven");
console.log(typeof "Olá, Mundo"); //string
console.log(typeof 22); //number
console.log(typeof 6.7); //number
console.log(typeof 6.7); //number
console.log(typeof true); //boolean
console.log(typeof false); //boolean

//variavel
// const: constante; não pode ter seu valor alterado durante o programa
const nome = "Alanberola";
console.log(nome);
let idade = 18; //permite alterar o seu valor durante o programa
console.log(`Olá ${nome}, que tem ${idade} anos.`);
console.log(idade);
idade = 19;
console.log(`Olá ${nome}, que tem ${idade} anos.`);
console.log(idade);
console.log("Olá " + nome);

//exercicio

const name = "Wesley";
let peso = "60,00kg";
let ida = 18;

console.log(`Olá ${name}, que tem ${ida} anos e pasa ${peso} `);

const name2 = "Wesley Figueiredo da silva";
let peso2 = "69,00kg";
let ida2 = 19;

console.log(`Olá ${name2}, que tem ${ida2} anos e pasa ${peso2} `);

//metodos de string
const texto = "pneumoultramicroscopiocossilicovulcanoconiótico"
//conta quantos caracteres a string tem
console.log(texto.length)
//altera todas as letras para maisculo
console.log(texto.toUpperCase)
//altera todas as letras minusculo
console.log(texto.toLowerCase)

const nome_completo = "Wesley Figeuiredo da Silva"
console.log(nome_completo.includes("Silva"))

console.log(5 > 10)
console.log(10 > 5)
console.log(10 >= 10)
console.log(10 <= 5)
console.log("10" == 10)
console.log("10" === 10)
console.log(10 !== 5)


const idadePessoa = 17
console.log(idadePessoa >=18)
console.log(idadePessoa >=16)

//variaveis exercicios: com o nome

const nome_completo2 = "Alanberola Pinto"
console.log(nome_completo2 == "alanberola pinto")        


//coletamos a idade da pessoa 
let idade1 = 18
//verificar se a idade é maior que 18 
if(idade1 >= 18){
    //se maior ou igual a 18 ela é maior de idade
console.log("Já pode ser preso kkkkkkkkkk")
}else{
    //senão, ela é menor de idade
    console.log("Não vai para a balada, COMEDIA")
}

//coletamos a idade da pessoa
let idadeVotacao = 20   
//verificar se a idade da pessoa é maior que 70
if(idadeVotacao >70){
    console.log("Você não é obrigado a votar")
    //senão se a iadeda da pessoa for maior ou igual a 18
} else if (idadeVotacao >= 18){
    console.log("Você tem que votar")
    //senão se a idade da pessoa for igual ou maior igual a 16
}else if (idadeVotacao >= 16){
    console.log("Você pode votar")
    //senão for nenhuma das alternativas anteriores 
}else{
    console.log("Você não pode votar")
}

//exercicios


// 01 — Aprovação escolar
// Receba a média final de um aluno. Se a média for , informe "Aprovado". Caso contrário, informe "Reprovado".

let nota = 7
if(nota >= 7){
    console.log("Aprovado")
}else{
    console.log("Reprovado")
}

// 02 — Comparação de dois números
// Receba dois números e informe qual deles é o maior. Se os dois forem iguais, informe que houve empate.

let resultado = 10
let resultado1 = 10
if(resultado > resultado1){
    console.log("O primeiro resultado é maior")
}else if(resultado < resultado1){
    console.log("O segundo resultado é maior")
}else {
    console.log("Empate")
}

// 03 — Verificação de senha
// Receba uma senha e verifique se ela é igual a senai123. Se for igual, exiba "Acesso autorizado". Caso contrário, exiba "Senha incorreta".

const password = "senai123"
if(password === "senai123"){
    console.log("Acesso autorizado")
}else{
    console.log( "Senha incorreta")
}

// //04 — Classificação de temperatura
// Receba uma temperatura em graus Celsius e classifique-a:
// Abaixo de 18 °C: "Frio".
// De 18 °C até 27 °C: "Agradável".
// Acima de 27 °C: "Quente". 

let temp = 18
if(temp <18){
    console.log("Frio")
}else if(temp <=27){
    console.log("Agradável")
}else{
console.log("Quente")
}

// 05 — Classificação de nota
// Receba uma nota de 0 a 10 e apresente:
// A partir de 9: "Excelente".
// A partir de 7 e abaixo de 9: "Bom".
// A partir de 5 e abaixo de 7: "Regular".
// Abaixo de 5: "Insuficiente".

const notas = 7
if(notas >=9){
    console.log("Excelente")
}else if(notas >=7){
    console.log("Bom")
}else if(notas >=5){
    console.log("Regular")
}else{
    console.log("Insuficiente")
}

// 06 — Dia da semana
// Receba um número inteiro de 1 a 7 e exiba o dia da semana correspondente. Considere 1 como domingo e 7 como sábado. Para qualquer outro número, exiba "Dia inválido".

let data = 2
if(data == 1){
    console.log("Domingo")
}else if(data ==7){
    console.log("Sábado")
}else{
    console.log("Dia inválido")
}

let idadeDirigir = 18
let temCNH = true
let temCarro = false

if(idadeDirigir >=18 && temCNH == true && temCarro == true){
    console.log("Você pode dirigir")
}else{
    console.log("Você não pode dirigir")
}


let ehProfessor = true
let ehAluno = true
if(ehProfessor == true || ehAluno == true){
    console.log("Você tem direito a meia-entrada")
}else{
    console.log("Você não tem direito a meia-entrada")
}

// && = e 
// || = ou 

// exercicio 

// 01 — Número dentro do intervalo
// Receba um número e informe se ele está entre 10 e 50, inclusive. Caso contrário, informe que está fora do intervalo.
let number = 0
if(number >11 && number <49 ){
    console.log("Está entre 10 e 50")
}else{
    console.log("Não está entre 10 e 50")
}


// ### 02 — Elegibilidade para estágio
// Uma oportunidade de estágio é destinada a candidatos com idade entre **16 e 24 anos, inclusive**. Receba a idade e informe se o candidato atende ao requisito.
let number1 = 16
if(number1 >=16 && number1 <=24){
    console.log("Atende ao requisito")
}else{
    console.log("Não atende ao requisito")
}


// ## Parte 2 — Operador OU (`||`)
// ### 03 — Frete grátis
// Uma loja oferece frete grátis para clientes que realizam compras de **R$ 200 ou mais** **ou** que são **assinantes**. Receba o valor da compra e uma variável booleana indicando se o cliente é assinante. Informe se ele tem direito ao frete grátis.
let valor = 100
let assi = false
if(valor >=200 == true || assi == true){
    console.log("Frete Grátis")
}else{
    console.log("Sem frete Grátis")
}

// ### 04 — Dia de descanso
// Receba o nome de um dia da semana. Se for **sábado** **ou** **domingo**, exiba "Fim de semana". Caso contrário, exiba "Dia útil".

const dia = "quarta"  
if(dia === "sábado" || dia === "domingo"){
    console.log("Fim de semana")
}else{
    console.log("Dia útil")
}


// ## Parte 3 — Combinando E e OU
// ### 05 — Promoção especial
// Uma loja aplica **15% de desconto** se o cliente:
// - Realizar uma compra de **R$ 150 ou mais** **e** for assinante; **ou**
// - Possuir um cupom promocional válido, independentemente de ser assinante.
// Receba o valor da compra e duas variáveis booleanas (assinante e cupom válido). Informe se o desconto será aplicado e apresente o total final.

let ohvalor = 100
let ehassi = true 
let cupom = false 
const desconto = (ohvalor >=150 && ehassi == true || cupom == true)

if(desconto){
    total = ohvalor * 0.85
    console.log("15% de desconto")
}else{
    total = ohvalor
    console.log("Sem desconto")
}
console.log("Total Final = R$" + total.toFixed(2))