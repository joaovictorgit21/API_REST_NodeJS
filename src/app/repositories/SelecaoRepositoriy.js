import { consult } from "../database/conection.js"

class SelecaoRepository {
    // CRUD

    create(selecao) {
        const sql = 'INSERT INTO tbl_selecoes SET ?;'
        return consult(sql, selecao, 'Não foi possivel cadastrar')
    }

    findAll() {
        const sql = 'SELECT * FROM tbl_selecoes;'
        return consult(sql, 'Não foi possivel localizar')
    }

    findById(id_selecao) {
        const sql = 'SELECT * FROM tbl_selecoes WHERE id_selecao=?;'
        return consult(sql, id_selecao, 'Não foi possivel localizar')
    }
    update(selecao, id_selecao) {
        const sql = 'UPDATE tbl_selecoes SET ? WHERE id_selecao=?;'
        return consult(sql,[selecao, id_selecao], 'Não foi possivel localizar')
    }
    delete(id) {
        const sql = 'DELETE FROM tbl_selecoes WHERE id_selecao=?;'
        return consult(sql, id_selecao, 'Não foi possivel deletar')
    }
}

export default new SelecaoRepository()