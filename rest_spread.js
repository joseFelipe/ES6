// REST

const usuario = {
    nome: 'Felipe',
    idade: 25,
    empresa: 'Alternative'
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

// - - - -

const arr = [1, 2, 3, 4];

const [a, b, ...c ] = arr;

console.log(a);
console.log(b);
console.log(c);

// - - - - - 

function soma(a, b, ...params) {
    return params;
}

console.log(soma(1, 3, 4, 6, 7, 9));

// - - - - 

// SPREAD

const usuario1 = {
    nome: 'Felipe',
    idade: 25,
    empresa: 'Alternative',
};

const usuario2 = { ...usuario1, nome: 'Duwe' };

console.log(usuario2);