var sql = require("mssql");
var connect = function()
{

    ////COLOMBIA
    const host  = '190.248.148.243'
    // const psw  ='RouteEasy.2020.Sol'
    const psw  ='Solistica2020'
    const user ='RouteEasy'
    const database='RouteEasy'
    
    // ////FEMSA LOGISTICA HML
    // const host  = 'fldb0003'
    // const psw  ='P@$$w0rd'
    // const user ='routeasy-paulo'
    // const database='INTEGRACIONES_COLOMBIA'
    
    // const host      =   '94.130.24.16'
    // const psw       =   'colombia'
    // const user      =   'colombia'
    // const database  =   'INTEGRACIONES_COLOMBIA'
    
    var conn = new sql.ConnectionPool({
        user        :   user
        ,password   :   psw 
        ,server     :   host 
        ,database   :   database
        , port: 2433
    });
 
    return conn;
};

module.exports = connect;