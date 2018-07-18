// 3.1
const arr = [1, 2, 3, 4, 5];
const newArr =arr.map(item => item + 10);
//console.log(newArr);

// 3.2
const usuario = { nome: 'Felipe', idade: 25 };
const mostraIdadeNew = () => usuario.idade;
console.log(mostraIdadeNew());

// 3.3
const nome = "Felipe";
const idade = 23;
const mostraUsuarioNew = (nome = 'Monique', idade = 32) => ({nome, idade});
console.log(mostraUsuarioNew(nome, idade));
console.log(mostraUsuarioNew(nome));

// 3.4
const promiseNew = () => {
    return new Promise = (function (resolve, reject) {
        resolve();
    });
}