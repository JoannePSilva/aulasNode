import { PessoaJuridica } from './Pessoa.js';

export class PessoaJuridica extends Pessoa{
    nomeEmpresa;
    cnpj;

    constructor(ncnpj){
        super()
        this.cpf = ncnpj;
    }
}