import mysql from 'mysql'

const conection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'db_copa'
})

conection.connect()

/**
 * Executa um código SQL com ou sem valores
 * @param {string} sql intrução a ser executada 
 * @param {string=id_selecao / [selecao, id_selecao]} valores a serem passados para a sql
 * @param {string='Não localizado'} mennsagemReject Mensagem a ser exibida
 * @returns Objeto da Promisse
 */
export const consult = (sql, valores='', mennsagemReject) => {
    return new Promise((resolve, reject) => {
        conection.query(sql, valores, (error, result) => {
            if (error) return reject(mennsagemReject)

                // Fazer parse dos restultados
                const row = JSON.parse(JSON.stringify(result))
                return resolve(row)
        })
    })
}

export default conection