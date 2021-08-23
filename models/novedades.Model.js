var pool = require('./bd');
/* La función getNovedades devuelve un array de filas de la tabla novedades */
async function getNovedades (){
    var query = "select * from novedades order by id desc limit 10";/* devuelve uno o varios dea curdo alos que haya  */
    var rows = await pool.query( query);
    return rows;
}



/* /* eliminar la novedad según el id. */
async function deleteNovedadesById(id){
    var query = 'delete from novedades where id = ?';
    var rows = await pool.query( query, [id]);
    return rows;
}

async function insertNovedad(obj){
    try {
        var query = "insert into novedades set ?";
        var rows = await pool.query( query, [obj]);
    return rows;
}catch (error) {
    console.log(error);
    throw error;
}
}

async function getNovedadesById (id){
    var query = "select * from novedades where id = ?";
    var rows = await pool.query( query, [id]);
    return rows [0];
}
async function modificarNovedadById(obj, id){
    try {
        var query = "update novedades set ? where id = ?";
        var rows = await pool.query( query, [obj, id]);
    return rows;
}catch (error) {
    throw error;
}
}
module.exports = { getNovedades, deleteNovedadesById, insertNovedad, getNovedadesById, modificarNovedadById } 
