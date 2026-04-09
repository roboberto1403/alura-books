import axios from 'axios';

const livrosAPI = axios.create({baseURL: 'http://localhost:3000/usuarios'});

async function getFavoritos() {
  const response = await livrosAPI.get('/69d55c479bd6c896991e0bf9/favoritos');

  return response.data;
}

async function postFavorito(id) {
  await livrosAPI.post(`/69d55c479bd6c896991e0bf9/favoritar/${id}`);
}

async function deleteFavorito(id) {
  await livrosAPI.delete(`/69d55c479bd6c896991e0bf9/desfavoritar/${id}`);
}


export {
  getFavoritos,
  postFavorito,
  deleteFavorito
}
