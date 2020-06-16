import express, { request, response } from 'express';
import cors from 'cors';
import routes from './routes';
import path from 'path';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333);












// rota: Endereço completo
// recurso: qual entidade estamos acessando no sistema

// GET: buscar uma ou mais informações do back-and
// POST: Criar uma nova informação no back-and
// PUT: Atualizar uma informação existente no back-and
// DELETE: Remover uma informação do back-and

// POST http://localhost:3333/users = criar um usuário
// GET http://localhost:3333/users = Listar usuários
// GET http://localhost:3333/users/5 = Buscar dados do usuário com ID 5

// Request Param: Parâmetros que vêm na própria rota que identificam o resurso
// Query Param:  parâmetros que vêm na propria rota, geralmente opcionais para filtros, paginação
// Request Bory: Parâmetros para criação/atualização de informações

// SELECT * FROM users WHERE name = 'Diego
// knex('users').where('name', 'Diego').select('*');