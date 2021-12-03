import {Produto} from './Produto.js';
import {Categoria} from './Categoria.js';



   const prod = new Produto();
   const categoria = new Categoria();

    prod.nome = "Comida";
    prod.resumo = "Boa e quente";
    prod.valor = 12.99;

    console.log(prod);

    categoria.descricao = "Todo amor que houver nesta vida";
    categoria.genero = "música";
    categoria.id = 123654;


    console.log(categoria);