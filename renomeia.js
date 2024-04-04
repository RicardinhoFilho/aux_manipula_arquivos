const fs = require('fs');
const path = require('path');

const pasta = 'C:\\Users\\User\\Sinsoft\\iptu_trindade\\IPTU';

fs.readdir(pasta, (err, files) => {
    if (err) {
        console.error('Erro ao ler o diretório:', err);
        return;
    }

    files.forEach(file => {
        if (file.includes('-pix')) {
            const newName = file.replace('-pix', ''); // Remove '-pix' do nome
            const oldPath = path.join(pasta, file);
            const newPath = path.join(pasta, newName);
            
            fs.rename(oldPath, newPath, err => {
                if (err) {
                    console.error(`Erro ao renomear o arquivo ${file}:`, err);
                    return;
                }
                console.log(`Arquivo ${file} renomeado para ${newName} com sucesso.`);
            });
        }
    });
});
