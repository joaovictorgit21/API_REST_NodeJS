import { Router } from "express";
import SelecaoController from "./app/controllers/SelecaoController.js";

const router = Router()

// ROTAS:
// Criar rotas para page selecoes
router.get('/selecoes', SelecaoController.index)

// Rota de Seleção por ID
router.get('/selecoes/:id', SelecaoController.show)

// Cadatrar Seleçoões com 'post', insersão de dados
router.post('/selecoes', SelecaoController.store)

// Atualizar Seleções por ID
router.put('/selecoes/:id', SelecaoController.update)

// Deletar Seleções por ID
router.delete('/selecoes/:id', SelecaoController.delete)

export default router