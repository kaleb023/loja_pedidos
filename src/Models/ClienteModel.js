import mysql from "mysql2"
import config from "../config.js"

class ClienteModel{
    constructor(){
        this.conexao = mysql.createConnection(config.db)
        console.debug("Conectado")
    }

    create(nome_cliente,endereco){
        let sql = `INSERT INTO clientes (nome_cliente,endereco) VALUES("${nome_cliente}","${endereco}"); `

        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([201,"Cliente adicionado!"])
            })
        });
    }
    
    read(){
        let sql = `SELECT * FROM clientes;`
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

    update(id_clientes,nome_cliente,endereco){
        let sql = `UPDATE clientes SET nome_cliente="${nome_cliente}",endereco="${endereco}" WHERE id_clientes="${id_clientes}";`
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Cliente atualizado!"])
            })
        });
    }

    delete(id_clientes){
        let sql = `DELETE FROM clientes WHERE id_clientes="${id_clientes}"; `
        return new Promise((resolve,reject)=>{
            this.conexao.query(sql,(erro,retorno)=>{
                if(erro){
                    console.debug(erro)
                    reject([400,erro])
                }
                resolve([200,"Cliente removido!"])
            })
        });
    }
}


export default new ClienteModel();


