import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 06b81c8bfadb4a3ea54f8b63f436b6f9fd93002a565d747f08356cd76fa04368'
  }
});