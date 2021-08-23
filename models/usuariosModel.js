var pool = require('./bd');
var md5 = require('md5');

async function getUserByUsernameAndPassword ( usuario, password) {
    try{
        var query = 'select * from tablausuarios where usuario=? and password = ? limit 1';

        var rows = await pool.query(query, [usuario, md5(password)]);
        return rows [0];

    }catch (error) {
        throw error;
    }
}

module.exports = {  getUserByUsernameAndPassword }
