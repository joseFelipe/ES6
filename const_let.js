// CONST não permite reatribuir valores, mas permite mutá-los, como exemplo:

const usuario = {nome: 'Felipe'};

usuario.nome = 'Monique';

console.log(usuario);

// - - - - - - - - - - - - - - - - - -

function teste(x) {
    let y = 2;

    if (x > 5) {
        y = 4;
        console.log(x, y);
    }
}

teste(10);