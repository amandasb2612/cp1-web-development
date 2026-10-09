console.log("*************************************************")
console.log("Exercício 1") 
console.log("*************************************************")
// Código 

let a = Number(prompt("Digite um número"));
let b = Number(prompt("Digite outro número"));

console.log("Valores digitados:", a, b);

console.log(a != b);
console.log(a === b);
console.log(a >= b);


console.log("*************************************************")
console.log("Exercício 2")
console.log("*************************************************")
// Código 

let altura = Number(prompt("Informe sua altura em metros:"));
let peso = Number(prompt("Informe seu peso em kg:"));

let IMC = peso / (altura ** 2);

if (IMC <= 18.5) {
    console.log("Abaixo do peso")

} else if (IMC < 24.5) {
    console.log("Peso ideal")
} else{
    console.log("Acima do peso")
}

console.log("*************************************************")
console.log("Exercício 3")
console.log("*************************************************")
// Código 

console.log("*************************************************")
console.log("Exercício 4")
console.log("*************************************************")
// Código

console.log("*************************************************")
console.log("Exercício 5")
console.log("*************************************************")
// Código

console.log("*************************************************")
console.log("Exercício 6")
console.log("*************************************************")
// Código

let nomeUsuario = prompt("Qual é o nome do usuário? ")
let senhaUsuario = prompt("Digite a senha: ")
if (nomeUsuario === "admin" && senhaUsuario === "1234") {
    console.log("O login foi realizado com sucesso!")
}
else {
    console.log("Falha de autenticação: login ou senha incorretos.")
}


console.log("*************************************************")
console.log("Exercício 7")
console.log("*************************************************")
// Código

let soma = 0 
for(let n =1; n <=7; n ++) {
    let nota = Number(prompt(`Digite a nota ${n}: `))
    soma = soma + nota
}

let media = soma/7
console.log(`A média do aluno é ${media}` )

if (media >=6) {
    console.log("Aluno aprovado")
}
else {
    console.log("Aluno reprovado")
}

console.log("*************************************************")
console.log("Exercício 8")
console.log("*************************************************")
// Código 

let nomeDev = prompt("Digite o seu nome: ")
console.log(`Olá dev ${nomeDev}`) 

console.log("*************************************************")
console.log("Exercício 9")
console.log("*************************************************")
// Código

let senha = prompt("Digite sua senha atual: ")
let novaSenha = prompt("Digite sua nova senha: ")

if (senha == novaSenha) {
    console.log("A senha não pode ser igual a anterior.")
}

else {
    console.log("Senha alterada com sucesso!")
}

console.log("*************************************************")
console.log("Exercício 10")
console.log("*************************************************")
// Código

let valorProduto = Number(prompt("Digite o valor do produto: "))
let valorDesconto = Number(prompt("Digite o valor do desconto: "))
let valorFinal = valorProduto - valorDesconto 

console.log(`O valor final é ${valorFinal}`)
