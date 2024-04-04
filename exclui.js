const fs = require('fs');
const path = require('path');

const pasta = 'C:\\Users\\User\\Sinsoft\\iptu_trindade\\IPTU';

fs.readdir(pasta, (err, files) => {
    if (err) {
        console.error('Erro ao ler o diretório:', err);
        return;
    }

    files.forEach(file => {
        if (!file.includes('-pix')) {
            const filePath = path.join(pasta, file);
            fs.unlink(filePath, err => {
                if (err) {
                    console.error('Erro ao remover o arquivo:', err);
                    return;
                }
                console.log(`Arquivo ${file} removido com sucesso.`);
            });
        }
    });
});
