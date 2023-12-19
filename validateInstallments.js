function validateInstallments(totalValue, installmentCount, installmentValue) {
    totalValue = parseFloat(totalValue.replace(/[^\d.]/g, ''));
    installmentValue = parseFloat(installmentValue.replace(/[^\d.]/g, ''));
  

    if (isNaN(totalValue) || isNaN(installmentCount) || isNaN(installmentValue)) {
      return false;
    }

    const expectedInstallmentValue = totalValue / installmentCount;

    return Math.abs(expectedInstallmentValue - installmentValue) < 0.01;
  }
  
  const totalValue = '1500.00';
  const installmentCount = 3; 
  const installmentValue = '500.00';
  
  const isValid = validateInstallments(totalValue, installmentCount, installmentValue);
  
  console.log(`Are the installments valid? ${isValid ? 'Yes' : 'No'}`);
  