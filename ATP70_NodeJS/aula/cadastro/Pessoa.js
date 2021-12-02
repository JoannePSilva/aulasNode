class Pessoa{
    nome;
    sobrenome;
    rg;
}

const pessoa1 = new Pessoa();
pessoa1.nome = "Josnelson";
pessoa1.sobrenome = "Silveira";
pessoa1.rg = 1234;

console.log(pessoa1);// diferente do java imprime o objeto sem precisar do toString