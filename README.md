# 🧙‍♂️ Classes de Jogo (DIO)

Este projeto foi desenvolvido como parte de um **bootcamp da [Digital Innovation One (DIO)](https://www.dio.me/)** em *2023*.  
O objetivo era praticar conceitos básicos de programação em **JavaScript**, como variáveis, operadores, laços de repetição, estruturas de decisão, funções, classes e objetos.

---

## 🎯 Objetivo

Criar uma classe genérica que represente um herói de uma aventura, com as seguintes propriedades:

- `nome`
- `idade`
- `tipo` (ex: guerreiro, mago, monge, ninja)

Além disso, implementar um método chamado **`atacar()`**, que exibe uma mensagem personalizada de acordo com o tipo do herói:

- mago → *usou magia*  
- guerreiro → *usou espada*  
- monge → *usou artes marciais*  
- ninja → *usou shuriken*  

---

## 🚀 Exemplo de uso

```javascript
const heroi1 = new Heroi("Arthus", 30, "guerreiro");
console.log(heroi1.atacar());
// Saída: "O guerreiro atacou usando usou espada"

const heroi2 = new Heroi("Merlin", 150, "mago");
console.log(heroi2.atacar());
// Saída: "O mago atacou usando usou magia"
