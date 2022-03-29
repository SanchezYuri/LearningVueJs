const db = require('../db')

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado)=>{
            db.query('SELECT * FROM carros', (error, results)=>{
                if(error){ rejeitado(error); return; }
                aceito(results);
            });
        });
    },
    buscarUm: (codigo)=> {
        return new Promise((accept, reject)=>{
            db.query(`SELECT * FROM carros c WHERE c.codigo = ?`, [codigo], (error, results)=>{
                if(error){ reject(error); return; }
                if(results.length > 0){
                    accept(results[0]);
                }else{
                    accept(false);
                }
            });
        });
    },
    inserir: (modelo, placa)=>{
        return new Promise((accpet, reject)=>{
            db.query('INSERT INTO carros (modelo, placa) VALUES (?,?)', [modelo, placa],
            (error,results) => {
                if(error){ reject(error); return; }
                accpet(results.insertCodigo);
            })
        });
    },
    update: (codigo, modelo, placa) => {
        return new Promise((accept, reject)=>{
            db.query('UPDATE carros SET modelo = ?, placa = ? WHERE codigo = ?', [modelo, placa, codigo],
            (error, results)=>{
                if(error){ reject(error); return; }
                accept('Informações do Carro alterado com sucesso');
            });
        });
    },
    delete: (codigo) => {
        return new Promise((accept,reject)=>{
            db.query('DELETE FROM carros WHERE codigo = ?', [codigo], (error, results)=>{
                if(error){ reject(error); return; }
                accept('Carro deletado com sucesso!');
            });
        })
    }
};