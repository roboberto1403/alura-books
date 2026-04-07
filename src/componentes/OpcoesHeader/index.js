import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Opcoes = styled.li`
  font-size: 16px;
  min-width: 120px;
  height: 100%;
  padding: 0 5px;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
  display: flex;
`

const OcoesContainer = styled.ul`
  display: flex;
`

const listaOpcoes = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE'];

function OpcoesHeader() {
  return (
    <OcoesContainer>
      { listaOpcoes.map((texto) => (
        <Link to={`/${texto.toLowerCase()}`}>
          <Opcoes>
            <p>{texto}</p>
          </Opcoes>
        </Link>
      ))}
    </OcoesContainer>
  )
}

export default OpcoesHeader;