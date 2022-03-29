const CarroService = require('../services/CarroService');

module.exports = {
    buscarTodos: async (req, res) =>{
        let json = {error:'', result:[]};

        let carros = await CarroService.buscarTodos();

        for( let i in carros){
            json.result.push({
                codigo: carros[i].codigo,
                descricao: carros[i].modelo,
            })
        }
        res.json(json);
    },
    buscarUm: async(req, res) => {
        let json = {error:'', result:{}};
        let codigo = req.params.codigo;

        let carro = await CarroService.buscarUm(codigo);

        if(carro){
            json.result = carro;
        }else{
            json.error = 'Carro não encontrado';
        }

        res.json(json);
    },
    inserir: async(req, res) => {
        let json = {error:'', result:{}};

        let modelo = req.body.modelo;
        let placa = req.body.placa;

        if(modelo && placa){
            let CarroCodigo = await CarroService.inserir(modelo, placa);
            json.result = {
                codigo: CarroCodigo,
                modelo,
                placa
            };
        }else{
            json.error = "Campos faltantes";
        }

        res.json(json);
    },
    update: async(req, res) => {
        let json = {error:'', result:{}};

        let codigo = req.params.codigo;

        let modelo = req.body.modelo;
        let placa = req.body.placa;

        if(codigo){
            if(modelo && placa){
                let carroUpdate = await CarroService.update(codigo, modelo, placa);
                json.result = carroUpdate;
            }else{
                json.error = "Campos faltantes";
            }
        }else{
            json.error = "Código do carro faltando."
        }

        res.json(json);
    },
    delete: async(req, res)=>{
        let json = {error:'', result:{}};

        let codigo = req.params.codigo;

        if(codigo){
            let carroDelete = await CarroService.delete(codigo);
            json.result = carroDelete;
        }else{
            json.error = "Código do carro faltando."
        }
        res.json(json);
    }
}