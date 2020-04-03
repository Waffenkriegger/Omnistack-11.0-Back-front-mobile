const express = require ('express');
const cors = require('cors'); 
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * rota/recurso
 */

 /**
  * metodos HTTP:
  * GET: Buscar/listar uma informação do back-enf
  * POST:Criat uma informação no back-end
  * PUT:Alterar uma informação no back-end
  * Delete: Deletar uma informação no back-end
  */
 /**
  * tipos de parametros:
  * 
  * Query params: parametros nomeados enviados na rota após *?* (filtros e paginação)
  * Route params: parametros utilizados para identificar recursos
  * Request body: Corpo da requisição utlizado para criar ou alterar um recurso
  */
 /**
  * SQL: MYSQL,*SQLITE*,POSTGREESQL, ORACLE, MICROSOFT SQL SERVER
  * NOSQL: MONGODB, COUCH BD
  */
 /**
  * Driver: SELECT * FROM users
  * Query builder: table('users').select ('*').where()
  */

app.listen (3333);