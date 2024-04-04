const fs = require('fs');
const path = require('path');

const origem = 'C:\\Users\\User\\Sinsoft\\iptu_trindade\\Sinosft_Pix\\Pix_Desktop\\PDFS\\trindade\\impostos';
const destino = 'C:\\Users\\User\\Sinsoft\\iptu_trindade\\Sinosft_Pix\\Pix_Desktop\\PDFS\\trindade\\corretos';

// Verifica se o diretório de origem existe
if (!fs.existsSync(origem)) {
    console.log('O diretório de origem não existe.');
    process.exit(1);
}

// Cria o diretório de destino se ele não existir
if (!fs.existsSync(destino)) {
    fs.mkdirSync(destino, { recursive: true });
}

// Lê os arquivos no diretório de origem
fs.readdir(origem, (err, files) => {
    if (err) {
        console.error('Erro ao ler o diretório de origem:', err);
        process.exit(1);
    }

    // Filtra os arquivos que contêm '-pix' no nome
    const arquivosFiltrados = files.filter(file => file.includes('-pix'));

    // Move os arquivos filtrados para o diretório de destino
    arquivosFiltrados.forEach(file => {
        const origemArquivo = path.join(origem, file);
        const destinoArquivo = path.join(destino, file);

        fs.rename(origemArquivo, destinoArquivo, err => {
            if (err) {
                console.error('Erro ao mover o arquivo:', err);
            } else {
                console.log(`Arquivo movido com sucesso para ${destinoArquivo}`);
            }
        });
    });
});
