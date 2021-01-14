/**
 * CommonJS - sistema de módulos do node.js
 * é diferente do padrão do ES6
 * esse arquivo js é visto como um módulo do node
 * todo arquivo js é visto como um módulo pelo node
 * por isso ele deve ser exportado, para ser utilizado em outros lugares
 */
const path = require('path');

module.exports = { //vai exportar um objeto
    mode: 'development',
    entry: './src/index',
    output: { //output é um objeto
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
            /**
             * __dirname é uma variável global que contém o diretório atual
             * o path vai resolver automático o caminho para o output
             * vai funcionar tanto em qualquer tipo de sistema operacional de forma automática
             * o path da esquerda é a chave do objeto
             * o path da esquerda é a variável criada com o .require() do node
             */ 
       filename: 'bundle.js',
    },
    module: {
        rules: [{ //um array com objetos, cada objeto é uma regra
            exclude: /node_modules/,
                /**
                 * RegEx para não ler a pasta node_modules e ganharmos em performance
                 * basicamente é uma regra para excluir node_modules das análises
                 */ 
            test: /\.js$/,
                /**
                 * \ é o escape do . | $ é o regex para "termina com"
                 * testar a extensão do arquivo que o programa vai analisar
                 * e aí forma o bundle com esses arquivos
                 */
            use: {//outro objeto
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/env']
                }
            }
        }]
    },
    devtool: 'source-map',
        /**
         * o bundle é um amálgama de um monte de arquivos que será lido pelo navegador
         * quando der pau, precisamos de algo que mostre em que arquivo foi esse erro
         * no navegador ele vai só falar que foi no bundle.js, o que não nos ajuda
         * pq esse código do bundle pode ter vindo de qualquer arquivo que o compõe
         * esse source-map ajuda a debuggar mostrando exatamente de qual arquivo o
         * código que deu pau veio 
        */
};
