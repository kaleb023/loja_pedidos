import ClienteModel from "../Models/ClienteModel.js";

class ClienteController{
    constructor(){

    }

    create(req,res){
        const nome_cliente = req.body.nome_cliente
        ClienteModel.create(nome_cliente).then(
            resposta =>{
                console.debug("Cadastrando um cliente!")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro: Cadastrando um cliente!")
                res.status(resposta[0]).json(resposta[1])
            }
        )
        
    }

    read(req,res){
        ClienteModel.read().then(
            resposta =>{
                console.debug("Exibindo clientes")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro: Exibindo clientes")
                res.status(resposta[0]).json(resposta[1])
            }
        )
        
    }

    update(req,res){
        const id_clientes = req.params.id_clientes
        const nome_cliente = req.body.nome_cliente
        ClienteModel.update(id_clientes,nome_cliente).then(
            resposta =>{
                console.debug("Atualizando clientes!")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro: Atualizando clientes!")
                res.status(resposta[0]).json(resposta[1])
            }
        )
        
    }

    delete(req,res){
        const id_clientes = req.params.id_clientes
        ClienteModel.delete(id_clientes).then(
            resposta =>{
                console.debug("Deletando clientes!")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro: Deletando clientes!")
                res.status(resposta[0]).json(resposta[1])
            }
        )
        
    }

}

export default new ClienteController()