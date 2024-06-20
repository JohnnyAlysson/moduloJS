// var nota = prompt("Digite sua nota:");

// if ( nota >= 7) {
//   console.log(`Parabens voce esta aprovado`)
//   alert(`Parabens voce esta aprovado`)
// }
// else if (nota <6 && nota >= 3){
//   console.log(`Voce ira para recuperacao`)
//   alert(`Voce ira para recuperacao`)
// }

var idade = prompt("digite sua idade");

if (idade >= 16 && idade < 18){
  console.log(`Voce pode votar,mas nao e obrigado`)
  alert(`Voce pode votar,mas nao e obrigado`)
}
else if(idade >=18 && idade <=65){
  console.log(`Voce e obrigado a votar`)
  alert(`Voce e obrigado a votar`)
}
else if(idade >65){
  console.log(`Voce pode votar, mas nao e obrigado`)
  alert(`Voce pode votar, mas nao e obrigado`)
}
else{
  console.log("voce nao pode votar ainda")
  console.log(`voce podera votar em ${16 - idade} anos se desejar`)
  alert("voce nao pode votar ainda")
  alert(`voce podera votar em ${16 - idade} anos se desejar`)
}