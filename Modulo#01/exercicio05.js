// 5.1 - REST
const arr = [1, 2, 3, 4, 5, 6];

var [x, ...y] = arr;
console.log(x);
console.log(y);

function soma(...params) {
    return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3, 4, 5, 8));

//5.2 - SPREAD

const usuario = {
    nome: 'Felipe',
    idade: 25,
    endereco: {
        cidade: 'Blumenau',
        uf: 'SC',
        pais: 'Brasil'
    }
};

const usuario1 = { ...usuario, nome: 'Nique' };

const usuario2 = { ...usuario, endereco : {cidade: 'Florianópolis' } };

console.log(usuario1);
console.log(usuario2);