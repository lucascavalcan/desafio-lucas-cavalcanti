class CaixaDaLanchonete {
    constructor() {
        this.precosDosItens = {
            cafe: 3.00,
            chantily: 1.50,
            suco: 6.20,
            sanduiche: 6.50,
            queijo: 2.00,
            salgado: 7.25,
            combo1: 9.50,
            combo2: 7.50
        };
    }

    calcularValorDaCompra(formaPagto, pedidos) {
        if (!this.temPedidos(pedidos)) {
            return "Não há itens no carrinho de compra!";
        }

        const itensDoPedido = this.converterPedidos(pedidos);

        if (!this.ehFormaPagamentoValida(formaPagto)) {
            return "Forma de pagamento inválida!";
        }

        if (!this.saoItensValidos(itensDoPedido)) {
            return "Item inválido!";
        }

        if (!this.quantidadesSaoValidas(itensDoPedido)) {
            return "Quantidade inválida!";
        }

        if (!this.podeAdicionarExtra(itensDoPedido)) {
            return "Item extra não pode ser pedido sem o principal";
        }

        const subTotal = this.calcularSubTotal(itensDoPedido);
        const precoFinal = this.calcularPrecoFinal(subTotal, formaPagto);
        const precoFormatado = precoFinal.toFixed(2).replace('.', ',');
        return `R$ ${precoFormatado}`;
    }

    temPedidos(pedidos) {
        return pedidos && pedidos.length > 0;
    }

    converterPedidos(pedidos) {
        const itensDoPedido = pedidos.map((pedido) => {
            const partes = pedido.split(',');
            return { item: partes[0], quantidade: partes[1] };
        });
        return itensDoPedido;
    }

    ehFormaPagamentoValida(formaPagto) {
        return formaPagto === 'debito' || formaPagto === 'credito' || formaPagto === 'dinheiro';
    }

    saoItensValidos(itensDoPedido) {
        for (const item of itensDoPedido) {
            if (!this.precosDosItens.hasOwnProperty(item.item)) {
                return false;
            }
        }
        return true;
    }

    quantidadesSaoValidas(itensDoPedido) {
        for (const item of itensDoPedido) {
            if (item.quantidade <= 0) {
                return false;
            }
        }
        return true;
    }

    podeAdicionarExtra(itensDoPedido) {
        let podeChantily = true;
        let podeQueijo = true;

        for (const item of itensDoPedido) {
            if (item.item === "chantily" && !itensDoPedido.some((i) => i.item === "cafe")) {
                podeChantily = false;
            }
            if (item.item === "queijo" && !itensDoPedido.some((i) => i.item === "sanduiche")) {
                podeQueijo = false;
            }
        }
        return podeChantily && podeQueijo;
    }

    calcularSubTotal(itensDoPedido) {
        let subTotal = 0;
        for (const item of itensDoPedido) {
            subTotal += this.precosDosItens[item.item] * item.quantidade;
        }
        return subTotal;
    }

    calcularPrecoFinal(subTotal, formaPagto) {
        switch (formaPagto) {
            case 'dinheiro':
                return subTotal * 0.95;
            case 'credito':
                return subTotal * 1.03;
            case 'debito':
                return subTotal;
        }
    }
}

export { CaixaDaLanchonete };