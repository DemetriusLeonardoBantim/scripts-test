function validarCPF(input) {
  const cpfRegex = /^(\d{3}\.){2}\d{3}-\d{2}$/;
  return cpfRegex.test(input);
}

const input1 = '123.456.789-09';
const input2 = '98765432100';

console.log(validarCPF(input1)); 
console.log(validarCPF(input2)); 
