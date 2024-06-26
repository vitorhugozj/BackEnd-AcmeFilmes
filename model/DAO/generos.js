const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const selectAllGeneros = async() =>{
    try {
        let sql = `SELECT * FROM tbl_genero`
        let rsgenero = await prisma.$queryRawUnsafe(sql)

        console.log(rsgenero)
        return rsgenero
        
    } catch (error) {
        return false
    }
}

const selectGeneroById = async(id) => {
    try{
        let sql = `select * from tbl_genero where tbl_genero.id = ${id}`
        let rsgeneroId = await prisma.$queryRawUnsafe(sql)
    
       return rsgeneroId
    
        } catch(error){
            return false
        }
}

const insertGenero = async(dadosGenero) => {
try {

    let sql = `INSERT INTO tbl_genero (nome, descricao) VALUES ("${dadosGenero.nome}", "${dadosGenero.descricao}")`
    let result = await prisma.$executeRawUnsafe(sql)

    if(result)
        return result
    else
        return false
} catch (error) {
    return false
}
}

const updateGenero = async(id, dadosBody) => {
    try {
        let sql = `UPDATE tbl_genero SET nome = '${dadosBody.nome}', descricao = '${dadosBody.descricao}' WHERE tbl_genero.id = ${id}`
        let rsupdategenero = await prisma.$queryRawUnsafe(sql)

        if(rsupdategenero)
            return rsupdategenero
        else
            return false

    } catch (error) {
        return false
    }
}

const deleteGenero = async(id) => {
    try {
        let sql = `DELETE FROM tbl_genero WHERE tbl_genero.id = ${id}`
        let rsdeletedGenero = prisma.$queryRawUnsafe(sql)

        return rsdeletedGenero
    } catch (error) {
        return false
    }
}

const selectLastIdGenero =  async() =>{
    try {
        let sql = `select cast(last_insert_id() AS DECIMAL) as id from tbl_genero limit 1`
        let rsIdfilme = await prisma.$queryRawUnsafe(sql)

        return rsIdfilme
    } catch (error) {
        return false
    }
}

module.exports={
    selectAllGeneros,
    selectGeneroById,
    insertGenero,
    updateGenero,
    deleteGenero,
    selectLastIdGenero
}