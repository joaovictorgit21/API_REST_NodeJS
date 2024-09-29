import SelecaoRepositoriy from "../repositories/SelecaoRepositoriy.js"

class SelecaoController {

    async index(req, res) {
        const result = await SelecaoRepositoriy.findAll()
        res.json(result)
    }

    async show(req, res) {
        const id = req.params.id
        const result = await SelecaoRepositoriy.findById(id)
        res.json(result)
    }
    
    async store(req, res) {
        const selecao = req.body
        const result = await SelecaoRepositoriy.create(selecao)
        res.json(result)
    }

    async update(req, res) {
        const id = req.params.id
        const selecao = req.body
        const result = await SelecaoRepositoriy.update(selecao, id)
        res.json(result)
    }

    async delete(req, res) {
        const id = req.params.id
        const result = await SelecaoRepositoriy.delete(id)
        res.json(result)
    }
    
}

// Padrão Singleton
export default new SelecaoController()