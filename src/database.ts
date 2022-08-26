import { createPool, Pool } from 'mysql2/promise';

const host = 'www.hatogrillteconsiente.com'
const user = 'hatogril_pollahipica'
const password = '*pollahipica*'
const database = 'hatogril_polla'

/* const host = 'localhost'
const user = 'root'
const password = ''
const database = 'polla' */
// const message = 'BD App ' + database + ' está conectada'

export async function connect (): Promise<Pool> {
    const connection = await createPool({
        host,
        user,
        database,
        password
    });
    return connection;
}
