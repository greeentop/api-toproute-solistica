const express       = require('express');
const router        = express.Router();
const cors          = require('cors');
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");


const integracaosCtrl   =  require('../controllers/integracaoLogs.controller');
const integracaoLogs    = require('../controllers/integracaoLogs.controller');
const swaggerJSDoc = require('swagger-jsdoc');

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
      info: {
        version: "1.0.0",
        title: "Documentation  API -TopRoute -Colombia",
        description: "Api TopRoute ",
        contact: {
          name: "Greentop "
        },
        servers: ["http://localhost:3000"]
      }
    },
    // ['.routes/*.js']
    apis: [__filename]
  };

  const swaggerOptionsFator = {
    swaggerDefinition: {
      info: {
        version: "1.0.0",
        title: "Documentation  API -TopRoute -Colombia",
        description: "Api TopRoute ",
        contact: {
          name: "Greentop "
        },
        servers: ["http://localhost:3001"]
      }
    },
    // ['.routes/*.js']
    apis: [__filename]
  };
const swaggerDocs = swaggerJsDoc(swaggerOptions);
router.use("/api-documentations", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const swaggerDocsFator = swaggerJsDoc(swaggerOptions);
router.use("/api-documentations-fator", swaggerUi.serve, swaggerUi.setup(swaggerDocsFator));



// Routes
/**
 * @swagger
 * /api/customers/{contrasena}:
 *  get:
 *    description: Use to request all customers
 *    parameters:
 *      - name: contrasena
 *        in: path
 *        type: string
 *        description: senha cliptografada
 *        required: true
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/api/customers/:contrasena", (req, res) => {

    const reqs  =req.params.contrasena
    res.status(200).json( {"name":reqs });
});


/**
 * @swagger
 * /api/login/{login}/{contrasena}:
 *  get:
 *    description: Buscar o login do usuario
 *    parameters:
 *      - name: login
 *        in: path
 *        type: string
 *        description: user name
 *        required: true
 *      - name: contrasena
 *        in: path
 *        type: string
 *        description: contrasena
 *        required: true
 *    responses:
 *      '200':
 *        description: sucesso  
 */
//buscar login 
router.get('/api/login/:login/:contrasena',cors(),integracaosCtrl.getLogin);

/**
 * @swagger
 * /api/sucursales    :
 *  get:
 *    description: Buscar todas sucursales
 *    responses:
 *      '200':
 *        description: A successful response
 */ 
router.get('/api/sucursales',cors(),integracaosCtrl.getSucursales);




/**
 * @swagger
 * /api/routers/{COD_SUCURSAL}:
 *  get:
 *    description: buscar roteirizacoes por dia  
 *    parameters:
 *      - name: COD_SUCURSAL
 *        in: path
 *        type: string
 *        description: codigo sucursales
 *        required: true
 *    responses:
 *      '404':
 *        description: Caminho não  
 */
router.get('/api/routers/:COD_SUCURSAL',integracaosCtrl.getRouters);

//Buscar zonas da roteirizacao selecionada
router.get('/api/zonas/:cod_sucursal',  integracaosCtrl.getZonasSucursales);

//buscar servicios da roteirizacao selecionada
router.get('/api/routers/servicios/:cod_router',  integracaosCtrl.getServiciosRouter);


//buscar veiculo da sucursal
router.get('/api/vehiculos/:cod_sucursal',integracaosCtrl.getVehiculosSucursales)


/**
 * @swagger
 * /api/updateServicios/:
 *    put:
 *      description: Use to return all customers
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name of our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '201':
 *        description: Successfully created user
 */
//atualiza servico com base no retorno routeasy
router.put('/api/updateServicios/:servicios_codigo',integracaosCtrl.putServiciosReturn);


/**
 * @swagger
 * /api/updateServicios/:
 *    put:
 *      description: Use to return all customers
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name of our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '201':
 *        description: Successfully created user
 */
//atualiza servico com base no retorno routeasy
router.put('/api/updateServicios/:servicios_codigo',integracaosCtrl.putServiciosReturn);



/**
 * @swagger
 * /api/cron    :
 *  get:
 *    description: teste
 *    responses:
 *      '200':
 *        description: A successful response
 */ 
router.get('/api/cron',cors(),integracaosCtrl.getCron);





/**
 * @swagger
 * /api/putRota/:
 *    put:
 *      description: Use to return all customers
 *    parameters:
 *      - name: customer
 *        in: query,,,
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '200':
 *        description: Atualiza a caixa de rota(enviar para caixas)  
 */
// ENVIA A ROUTEIRIZACAO POR CAIXA OU TODAS AS ROTAS
router.put('/api/putRota', integracaoLogs.putRota);



router.put('/api/PUT_ROTA_DOC_REAL', integracaoLogs.put_clear_cajas)

/**
 * @swagger
 * /api/updateServicios/:
 *    put:
 *      description: Use to return all customers
 *    parameters:
 *      - name: customer
 *        in: query,,,
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '201':
 *        description: Successfully creaUPDATEted user
 */
// ENVIA A ROUTEIRIZACAO POR CAIXA OU TODAS AS ROTAS
router.post('/api/envioRouteasy', cors(), integracaoLogs.postEnvioRouteasy)


router.post('/api/retornoRouteasy', cors(), integracaoLogs.postRetornoRouteasy)


module.exports = router