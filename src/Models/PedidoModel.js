import mysql from "mysql2"
import config from "../config.js"

class PedidoModel{
    constructor(){
        this.conexao = mysql.createConnection(config.db)
        console.debug("Conectado")
    }

    create(descricao,valor_t,id_clientes,){
        let sql = `INSERT INTO pedidos (descricao,valor_t,id_clientes) VALUES("${descricao}","${valor_t}",${id_clientes}"); `

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([201,"Pedido criado!"])
            })
        });
    }
    
    read(){
        let sql = `SELECT * FROM pedidos;`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,retorno])
            })
        });
    }

    update(id_clientes,descricao,valor_t,id_pedidos){
        let sql = `UPDATE pedidos SET descricao="${descricao}",valor_t="${valor_t}",id_clientes="${id_clientes}" WHERE id_pedidos="${id_pedidos}";`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Pedido atualizado!"])
            })
        });
    }

    delete(id_pedidos){
        let sql = `DELETE FROM pedidos WHERE id_pedidos="${id_pedidos}"; `
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Pedido deletado!"])
            })
        });
    }
}


export default new PedidoModel();


