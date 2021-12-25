import axios from 'axios';

export function getAll() {
  axios.get('http://localhost:3000/prod')
    .then(res => {
      return res.data;
    });
}

