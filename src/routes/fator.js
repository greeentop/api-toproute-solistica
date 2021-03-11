const express       = require('express');
const router        = express.Router();
const routerFator   = express.Router();
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
        title: "Documentação  Banco Fator",
        description: "Api Fator ",
        contact: {
          name: "Banco Fator "
        },
        servers: ["http://localhost:3000"]
      }
    },
    // ['.routes/*.js']
    apis: [__filename]
  };


const swaggerDocs = swaggerJsDoc(swaggerOptions);
router.use("/api-fator", swaggerUi.serve, swaggerUi.setup(swaggerDocs));




// Routes
/**
 * @swagger
 * /api/autorization/{autorization}:
 *  get:
 *    description: Use to request all customers
 *    parameters:
 *      - name: autorization
 *        in: path
 *        type: string
 *        description: Id da autorização
 *        required: true
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get("/api/autorization/:autorization", (req, res) => {

    const reqs  =req.params.contrasena
    res.status(200).json( {"name":reqs });
});


/**
 * @swagger
 * /api/updateServicios/:
 *    post:
 *      description: Use to return all customers
 *    parameters:
 *      - name: body
 *        in: json
 *        description: Arquivo json para relealizar o request
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '201':
 *        description: Successfully created user
 */
//atualiza servico com base no retorno routeasy
router.post('/api/updateServicios/:servicios_codigo',integracaosCtrl.putServiciosReturn);






module.exports =router

// module.exports = {
//   // routerFator:routerFator ,
//   router:router
// }