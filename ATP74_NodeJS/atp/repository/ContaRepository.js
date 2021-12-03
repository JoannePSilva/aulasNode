import ContaTable from "./../db/ContaTable";

class ContaRepository{

    findAll(){
        const lista = await ContaTable.findAll({raw:true});
    }
    create(model){
        return await ContaTable.create(model);
        
    }
    update(){
        return await ContaTable.update(model,{
            where:{id:model.id}
        });

    }
    delete(){
        return await ContaTable.destroy({
            where:{id:id}
        });

    }
}

export default ContaRepository;





    