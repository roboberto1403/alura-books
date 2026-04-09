import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { deleteFavorito, getFavoritos } from '../servicos/favoritos';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(90deg, #522900 35%, #896932);
`
const Livros = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  cursor: pointer;
  p {
      width: 200px;
  }
  img {
      width: 100px;
  }
  &:hover {
      border: 1px solid white;
  }
`

function Favoritos() {
  const [favoritos, setLivrosFavoritos] = useState([])

  useEffect(() => {
    fetchFavoritos()
  }, [])

  async function fetchFavoritos() {
    const livrosDaAPI = await getFavoritos();
    console.log(livrosDaAPI);
    setLivrosFavoritos(livrosDaAPI);
  }

  async function removeFavorito(livro) {
    await deleteFavorito(livro._id);
    alert(`${livro.titulo} removido dos favoritos!`);
    await fetchFavoritos();
  }
  return (
    <AppContainer>
      {favoritos.map(livro => (
        <Livros onClick={() => removeFavorito(livro)}>
          <img src={livro.src} alt={livro.titulo} />
          <p>{livro.titulo}</p>
        </Livros>
      ))}
    </AppContainer>
  );
}

export default Favoritos;