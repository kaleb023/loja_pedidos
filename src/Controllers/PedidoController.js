import PedidoModel from "../Models/PedidoModel.js"

class PedidoController{
    constructor(){

    }

    create(req,res){
        const descricao = req.body.descricao
        const valor_t = req.body.valor_t
        const id_clientes = req.body.id_clientes
        PedidoModel.create(descricao,valor_t,id_clientes).then(
            resposta =>{
                console.debug("Cadastrando pedido!")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro: Cadastrando pedido!")
                res.status(resposta[0]).json(resposta[1])
            }
        )
        
    }

    read(req,res){
        PedidoModel.read().then(
            resposta =>{
                console.debug("Exibindo pedidos!")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro: Exibindo pedidos!")
                res.status(resposta[0]).json(resposta[1])
            }
        )
        
    }

    update(req,res){
        const id_pedidos = req.params.id_pedidos
        const descricao = req.body.descricao
        const valor_t = req.body.valor_t
        const id_clientes = req.params.id_clientes
        PedidoModel.update(id_clientes,descricao,valor_t,id_pedidos).then(
            resposta =>{
                console.debug("Atualizando pedido!")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro: Atualizando pedido!")
                res.status(resposta[0]).json(resposta[1])
            }
        )
        
    }

    delete(req,res){
        const id_pedidos = req.params.id_pedidos
        PedidoModel.delete(id_pedidos).then(
            resposta =>{
                console.debug("Apagando pedido!")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro: Apagando pedido!")
                res.status(resposta[0]).json(resposta[1])
            }
        )
        
    }

}

export default new PedidoController()