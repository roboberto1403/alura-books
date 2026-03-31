import Input from '../Input';
import styled from 'styled-components';
import { useState } from 'react';
import { livros } from './dadosPesquisa';

const PesquisaContainer = styled.section`
  color: #FFF;
  text-align: center;
  padding: 85px 0;
  height: 270px;
  width: 100%;
`

const Titulo = styled.h2`
  color: #FFF;
  font-size: 36px;
  text-align: center;
  width: 100%;
`

const Subtitulo = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`

const Resultado = styled.div`
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

function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);

  console.log(livrosPesquisados);

  return (
    <PesquisaContainer>
      <Titulo 
        tamanhoFonte="36px"
      >
        Milhares de livros para você explorar.
      </Titulo>
      <Subtitulo> Encontre seu próximo livro favorito.</Subtitulo>
      <Input 
      placeholder="O que você procura?" 
      onChange={evento => {
        const termoPesquisado = evento.target.value;
        const livrosEncontrados = livros.filter(livro => livro.nome.includes(termoPesquisado.trim()))
        setLivrosPesquisados(livrosEncontrados);
          }}
      />
      {livrosPesquisados.map(livro => (
        <Resultado>
          <img src={livro.src} alt={livro.nome} />
          <p>{livro.nome}</p>
        </Resultado>
      ))}
    </PesquisaContainer>
  )
}

export default Pesquisa;