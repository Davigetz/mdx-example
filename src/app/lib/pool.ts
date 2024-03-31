import { Pool } from "pg"

const client = new Pool({
    connectionString: process.env.POSTGRES_URL
})

export default client