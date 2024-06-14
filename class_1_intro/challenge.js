/*DESAFIO PRÁTICO

Faça um Programa que pergunte quanto você
ganha por hora e o número de horas trabalhadas
no mês. Calcule e mostre o total do seu salário no
referido mês, sabendo-se que são descontados 11%
para o Imposto de Renda, 8% para o INSS e 5% para
o sindicato, faça um programa que nos dê:
1.salário bruto.
2.quanto pagou ao INSS.
3.quanto pagou ao sindicato.
4. salário liquido
5. calcule os descontos e o salário liquido */

var hourWage ;
var workingHours;
var grossSalary  ;//salario bruto
var Inss;
var sindicate;
var finalsalary;

hourWage = prompt(`How much money do you earn per hour?`);
workingHours = prompt(`How many hours do you work?`);

grossSalary = Number(hourWage) * Number(workingHours);
Inss = (Number(grossSalary) * 8)/100;
sindicate = (Number(grossSalary) * 5)/100;
finalsalary= grossSalary - Inss - sindicate

console.log(`
  With the hour wage of ${hourWage} and the ${workingHours} working hours;
  Your gross salary is : ${grossSalary};
  ${Inss} will be reduced for your INSS;
  ${sindicate} will be reduced for the Sindicate;
  Hence, your final salary is : ${finalsalary}

`)