import axios from 'axios';

if (!process.env.NEXT_PUBLIC_API_URL) {
  throw new Error('NEXT_PUBLIC_API_URL is not defined');
}

export const api = axios.create({
  baseURL: 'http://localhost:3001/api',
  timeout: 10000, // 10 seconds
});
