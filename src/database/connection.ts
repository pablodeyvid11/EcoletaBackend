import knex from 'knex';
import path from 'path';

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename:  path.resolve(__dirname, 'dataBase.sqlite')
    },
    useNullAsDefault: true,
});

export default connection;

// Migration = Histórico de banco de dados

//  create table points
