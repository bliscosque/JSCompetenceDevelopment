const fs=require('fs').promises;


module.exports = (caminhoArquito, json) => {
    fs.writeFile(caminhoArquito, json, {flag: 'w'})
};
