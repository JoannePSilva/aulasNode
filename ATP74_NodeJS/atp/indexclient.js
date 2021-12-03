import Cliente from "./model/Cliente";
import ClienteRepository from "./repository/ClienteRepository";


const cliente = new Cliente();

cliente.nome = "Robesvaldo";
cliente.sobrenome = 'Junqueira';
cliente.cc = 565675;

const clienteRepository = new ClienteRepository();
clienteRepository.create(cliente);
clienteRepository.delete(2);
clienteRepository.update(cliente);

const lista = await clienteRepository.findAll();
console.log(lista);
