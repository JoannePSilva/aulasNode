class Cliente{
    nome;
    empresa;
    id;
}

const cliente1 = new Cliente();
cliente1.nome = "Josnelson";
cliente1.empresa= "AreFun";
cliente1.rg = 4321;

console.log(cliente1);// diferente do java imprime o objeto sem precisar do toString