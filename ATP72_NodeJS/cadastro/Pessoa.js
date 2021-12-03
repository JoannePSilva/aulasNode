
import { PessoaFisica } from './PessoaFisica.js'
import { PessoaJuridica } from './PessoaJuridica';


   const  pf = new PessoaFisica();
   const  pj = new PessoaJuridica();
   
   pf.nome = "João";
   pf.sobrenome = "cunha";
   console.log(pf);

   pj.cnpj = 8786868
   pj.nomeEmpresa = "Biruliru"
   console.log(pj);
   

   
     
