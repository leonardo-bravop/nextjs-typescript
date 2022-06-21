import { Pool } from 'pg'

let conn: any

if (!conn) {
    conn = new Pool({
        host: 'localhost',
        port: 5432,
        database: 'tasksdb'
    })
}

export { conn }