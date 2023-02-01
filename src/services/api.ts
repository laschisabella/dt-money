import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://dt-money-laschisabella.vercel.app/api',
})
