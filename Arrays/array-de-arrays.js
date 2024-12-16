const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const media = [10, 8, 7.5, 9];

const boletim = [alunos, media];

console.log(
    `A aluna da posição 1 é ${boletim[0][1]},
     sua nota é ${boletim[1][1]}`
);