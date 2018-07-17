class List {
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List {
    constructor() {
        super();

        this.usuario = 'Felipe';
    }

    mostraUsuario() {
        console.log(this.usuario);
    }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
    MinhaLista.add('Novo todo');
}

MinhaLista.mostraUsuario();



// MÉTODO ESTÁTICO
// Em um método estático, não é possível acessar nenhum outro método de fora

class Matematica {
    static soma(a, b) {
        return a + b;
    }
}

console.log(Matematica.soma(1,4));