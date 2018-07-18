// 2.1
const usuarios = [
    { nome: 'Felipe', idade: 25, empresa: 'Alternative' },
    { nome: 'Monique', idade: 32, empresa: 'Dalla' },
    { nome: 'Loki', idade: 0.3, empresa: 'Alternative' },
];

idades = usuarios.map(function(item){
    return item.idade;
});
console.log(idades);

// 2.2
usuarioAlternative = usuarios.filter(function(item){
    if (item.empresa === 'Alternative' && item.idade > 18) {
        return item;
    }
});
console.log(usuarioAlternative);

// 2.3
usuarioGoogle = usuarios.find(function(item){
    return item.empresa === 'Google';
});
console.log(usuarioGoogle);

// 2.4
idadesAoQuadrado = usuarios.filter(function(item){
    var idades = item.idade * 2;
    if (idades < 51) {
        return item;
    }
});
console.log(idadesAoQuadrado)