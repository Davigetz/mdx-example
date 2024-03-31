import connection from './pool';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchPosts() {
    try {
        noStore();
        const query = `SELECT * FROM users`;
        const data =await connection.query(query)
        console.log(data)
        return data
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch posts data.');
    }
}