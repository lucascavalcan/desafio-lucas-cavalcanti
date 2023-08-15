# Projeto Caixa da Lanchonete

Este é o meu projeto desenvolvido como parte do desafio "Caixa da Lanchonete" da [DBServer](https://start.db.tec.br/). O desafio consiste em criar uma lógica que calcule o valor de uma compra de acordo com o cardápio, regras e descontos da Lanchonete.

### Descrição
Neste projeto, criei uma aplicação em JavaScript para automatizar o processo de cálculo do valor de uma compra na Lanchonete da DB. A aplicação recebe informações sobre a forma de pagamento e os itens selecionados pelo cliente e calcula o valor total da compra, aplicando descontos e acréscimos conforme as regras definidas.

### Status do Projeto
✔️ Concluído.


### Funcionalidades
- Cálculo do valor total da compra com base nos itens selecionados.
- Aplicação de desconto de 5% para pagamento em dinheiro.
- Acréscimo de 3% para pagamento a crédito.
- Verificação de regras para itens extras e principais.
- Exibição de mensagens de erro para cenários inválidos.

## Como Executar
1. Instale o Node.js em sua máquina.

2. Clone este repositório para sua máquina local com o comando:
```bash
$ git clone <https://github.com/lucascavalcan/desafio-lucas-cavalcanti>
```

3. No terminal, navegue até o diretório do projeto.

4. Instale as dependências usando o comando:
```
npm install
```

5. Execute os testes automatizados com o comando:
```
npm test
```

### Exemplos de Uso
1. Para utilizar a aplicação em um cenário real, o usuário deve executar o arquivo index.js, no qual vai ser perguntado a forma de pagamento e os itens que o consumidor deseja efetuar a compra, conforme pode ser visto no exemplo abaixo:

https://github.com/lucascavalcan/desafio-lucas-cavalcanti/assets/98985618/804377dc-3dd8-44c6-b552-8bcd5c4dee07

2. Após isso, execute o comando:
```
node index.js
```

Dentre os ítens disponíveis para compra, temos os seguintes produtos no cardápio:

  | codigo    | descrição                   | valor   |
  |-----------|-----------------------------|---------|
  | cafe      | Café                        | R$ 3,00 |
  | chantily  | Chantily (extra do Café)    | R$ 1,50 |
  | suco      | Suco Natural                | R$ 6,20 |
  | sanduiche | Sanduíche                   | R$ 6,50 |
  | queijo    | Queijo (extra do Sanduíche) | R$ 2,00 |
  | salgado   | Salgado                     | R$ 7,25 |
  | combo1    | 1 Suco e 1 Sanduíche        | R$ 9,50 |
  | combo2    | 1 Café e 1 Sanduíche        | R$ 7,50 |

Além disso, a Lanchonete aceita as seguintes formas de pagamento:
 - dinheiro
 - debito
 - credito

Para realizar um pedido, o usuário deve selecionar o produto e a forma de pagamento conforme foi mostrado no exemplo acima.

### Contribuição
Este projeto foi desenvolvido como parte de um desafio técnico. No entanto, fique à vontade para contribuir com melhorias, correções de bugs ou novas funcionalidades. Basta abrir um pull request com suas alterações.

### Autor
Projeto criado por [Lucas Cavalcanti de Araujo](https://lucascavalcan.github.io/) </br>
Em caso de dúvidas, entrar em contato através do e-mail: lcavalcantidearaujo@gmail.com </br>
Feito com ❤️
