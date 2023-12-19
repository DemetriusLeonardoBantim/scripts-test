const fs = require('fs');
const csv = require('csv-parser');

function lerArquivoCSV(caminhoArquivo) {
  return new Promise((resolve, reject) => {
    const resultados = [];

    fs.createReadStream(caminhoArquivo)
      .pipe(csv())
      .on('data', (row) => {
        resultados.push(row);
      })
      .on('end', () => {
        resolve(resultados);
      })
      .on('error', (error) => {
        reject(error);
      });
  });
}

const caminhoArquivo = 'data.csv';

lerArquivoCSV(caminhoArquivo)
  .then((dados) => {
    console.log('Dados lidos do arquivo CSV:', dados);
  })
  .catch((erro) => {
    console.error('Erro ao ler o arquivo CSV:', erro);
  });
