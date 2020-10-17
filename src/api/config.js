import env from 'dotenv'
env.config()
console.log(process.env);

export const SEED = process.env.SEED || 'empty_seed'
export const BASE_URL = 'https://randomuser.me/api'