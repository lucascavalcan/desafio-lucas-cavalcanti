import { CaixaDaLanchonete } from './src/caixa-da-lanchonete.js';
import readline from 'readline';

const caixa = new CaixaDaLanchonete();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Forma de pagamento: ", (formaDePagamento) => {
    rl.question("Itens/quantidade (ex: cafe,1 chantily,1): ", (itensInput) => {
        rl.close();

        const itens = itensInput.split(' ');

        const valorTotal = caixa.calcularValorDaCompra(formaDePagamento, itens);
        console.log(`Valor Total: ${valorTotal}`);
    });
});