"use strict";

var _usuario;

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
var usuario = {
  nome: 'Felipe',
  idade: 25
};

function mostraInfo(usuario) {
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

console.log(mostraInfo((_usuario = usuario, nome = _usuario.nome, idade = _usuario.idade, _usuario)));
