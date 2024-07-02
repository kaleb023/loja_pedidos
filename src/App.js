import express from "express"
import PedidoController from "./Controllers/PedidoController.js"
import ClienteController from "./Controllers/ClienteController.js"

const server = express()

server.use(express.json())

server.get("/",(req,res)=>{
    res.status(200).json("Servidor funcionando")
})

server.post("/clientes",ClienteController.create)
server.get("/clientes",ClienteController.read)
server.put("/clientes/:id_clientes",ClienteController.update)
server.delete("/clientes/:id_clientes",ClienteController.delete)

server.post("/pedidos",PedidoController.create)
server.get("/pedidos",PedidoController.read)
server.put("/clientes/:id_pedidos",PedidoController.update)
server.delete("/clientes/:id_pedidos",PedidoController.delete)


server.listen(5000)