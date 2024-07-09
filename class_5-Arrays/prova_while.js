// Você é um desenvolvedor de software que trabalha em uma equipe especializada em criar ferramentas matemáticas 
// para uma empresa do mercado financeiro. A empresa precisa de uma nova funcionalidade para sua plataforma online,
//  permitindo que os usuários obtenham informações sobre cálculos matemáticos importantes relacionados aos investimentos.



// Sua tarefa é criar um módulo JavaScript que ofereça aos usuários a possibilidade de inserir um número inteiro positivo e, 
// em resposta, calcular o fatorial desse número e também a sequência de Fibonacci até aquele número. 
// Isso ajudará os investidores a realizar análises mais detalhadas sobre suas decisões financeiras.



var user = parseInt(prompt(`Digite um numero`))

console.log(user)
console.log(calcularFatorial(user))
console.log(fibonacci(user))


function calcularFatorial(num) {
  var resultado = num
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--
    resultado *= num
  }
  return resultado
}

function fibonacci(num) {
  let fib = [0, 1];
  for (let i = 2; i <= num; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib.slice(0, num + 1);
}
