const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

const listaNova = [...new Set(coresLista1.concat(coresLista2))];

console.log(listaNova);