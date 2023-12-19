
function formatarMoedaBRL(valor) {

    const formatoMoeda = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    });
  
    return formatoMoeda.format(valor);
  }

  const vlTotal = 1234567.89;
  const vlPresta = 98765.43;
  const vlMora = 5432.10;
  
  const vlTotalFormatado = formatarMoedaBRL(vlTotal);
  const vlPrestaFormatado = formatarMoedaBRL(vlPresta);
  const vlMoraFormatado = formatarMoedaBRL(vlMora);
  
  console.log(`Valor Total: ${vlTotalFormatado}`);
  console.log(`Valor Prestação: ${vlPrestaFormatado}`);
  console.log(`Valor Mora: ${vlMoraFormatado}`);