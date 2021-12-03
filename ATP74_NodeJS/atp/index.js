import ContaTable from "./db/ContaTable.js";
import Conta from "./model/Conta.js";
import ClienteRepository from "./repository/ClienteRepository"

ContaTable

console.log("Banco");

const conta1 = new Conta();

conta1.agencia = 123
conta1.numero = 456456
conta1.saldo = 2.009

console.log(conta1.agencia, conta1.numero, conta1.saldo)


const lista = await ContaTable.findAll({raw:true});
console.log(lista);


const repository = new ClienteRepository;

const listacliente = new repository.findAll
console.log(listacliente);
