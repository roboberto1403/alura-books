import styled from 'styled-components';

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

const listaOpcoes = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function OpcoesHeader() {
  return (
    <OcoesContainer>
      { listaOpcoes.map((texto) => (
        <Opcoes><p>{texto}</p></Opcoes>
      ))}
    </OcoesContainer>
  )
}

export default OpcoesHeader;