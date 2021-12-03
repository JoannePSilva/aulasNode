import { PessoaFisica } from './Pessoa.js';

export class PessoaFisica extends Pessoa{
    
    sobrenome;
    cpf;

    constructor(ncpf){//para chamar o construtur a primeira coisa é chamar a mãe
        super()
        this.cpf = ncpf;
    }
   

  
}