function convertToDateObject(dateString) {
    const year = parseInt(dateString.substr(0, 4));
    const month = parseInt(dateString.substr(4, 2)) - 1;
    const day = parseInt(dateString.substr(6, 2));
  

    const dateObject = new Date(year, month, day);
  
    return dateObject;
  }

  const dtContratoString = '20231231'; 
  const dtVctPreString = '20230115';
  
  const dtContrato = convertToDateObject(dtContratoString);
  const dtVctPre = convertToDateObject(dtVctPreString);
  
  console.log('Converted Date for dtContrato:', dtContrato);
  console.log('Converted Date for dtVctPre:', dtVctPre);
  