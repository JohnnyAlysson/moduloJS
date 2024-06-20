// Atividade 03
// Peça ao usuário para inserir o preço de um produto e sua idade. E calcule o
// preço final com desconto, Se o usuário tiver menos de 18 anos, aplique um
// desconto de 10%. Se o usuário tiver 18 anos ou mais, não aplique desconto.

var produto
var idade
var preconovo 

produto = prompt("Digite o preco do produto")
idade = prompt("Digite o idade")


if(idade <18){
  desconto = produto *10 /100
  console.log(`produto com desconto e R$ ${produto - desconto}`)
}
else if(idade>18){
  console.log(`voce nao possui desconto, produto continua R$${produto}`)
  
}
else{
  console.log(`INPUT INVALIDO`)

}