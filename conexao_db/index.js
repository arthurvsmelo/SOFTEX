(async () => {
    const database = require('./db.js');
    const produto = require('./produto.js');

    await database.sync();

    await produto.create(
        {
            Nome: 'Primeiro Produto',
            DataCriacao: Date()
        }
    )

    await produto.create(
        {
            Nome: 'Segundo Produto',
            DataCriacao: Date()
        }
    )

    await produto.create(
        {
            Nome: 'Terceiro Produto',
            DataCriacao: Date()
        }
    )

    const altPdod = await produto.findByPk(2)
    altProd.Nome = 'Arquivo 2 alterado';
    await altProd.save();

    produto.destroy({where: {Id: 1}});

    const findProd = await produto.findByPk(3);

    const findAllProd = await produto.findAll();

    console.log(findProd);
    console.log(findAllProd);
})()