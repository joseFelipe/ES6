// 4.1
// const empresa = {
//     nome: 'Alternative',
//     endereco: {
//         cidade: 'Blumenau',
//         estado: 'SC',
//     }
// };

// const { nome, endereco, endereco: {cidade, estado} } = empresa;

//console.log(nome);
//console.log(cidade);
//console.log(estado);

// 4.2
const usuario = {
    nome: 'Felipe',
    idade: 25,
};
function mostraInfo(usuario) {
    return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome, idade } = usuario));

