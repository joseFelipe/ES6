const usuario = {
    nome: 'Felipe',
    idade: 25,
    endereco: {
        cidade: 'Blumenau',
        estado: 'SC',
    },
};

const { nome, idade, endereco: {cidade} } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);


// - - - - 

function mostraNome({ nome, idade }) {
    console.log(nome, idade);
}

mostraNome(usuario);