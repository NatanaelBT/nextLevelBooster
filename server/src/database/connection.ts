import knex from 'knex';
import path from 'path';// une caminhos de pastas ou alfgo do tipo sei la



const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
    
    useNullAsDefault: true,
});

export default connection;

// migrtions = historico de banco de dados 

//crea