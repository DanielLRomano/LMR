let HT; //HORAS TRABALHADAS 
let VH; //VALOR HORA
let PD; //PERCENTUAL DE DESCONTO 
let TD; //TOTAL DE DESCONTO 
let SB; //SALÁRIO BRUTO 
let SL; //SALÁRIO LÍQUIDO

HT = prompt('Digite as horas trabalhadas: ', 'Informe aqui.');
VH = prompt('Entre com o valor da hora: ', 'Informe aqui.');
PD = prompt('Informe o percentual de desconto: ', 'Informe aqui.');
SB = parseFloat(HT) * parseFloat(VH);
TD = parseFloat(PD) * SB / 100;
SL = SB - TD;

document.write('Salário = ', SL);