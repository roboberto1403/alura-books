import perfil from '../../imagens/perfil.svg';
import sacola from '../../imagens/sacola.svg';
import styled from 'styled-components';

const icones = [perfil, sacola];

const IconesContainer = styled.ul`
  display: flex;
  align-items: center;
`

const Icone = styled.li`
  cursor: pointer;
  margin-right: 40px;
  width: 24px;
`

function IconesHeader() {
  return (
    <IconesContainer>
      { icones.map((icone) => (
        <Icone><img src={icone} alt="Ícone" /></Icone>
      ))}
    </IconesContainer>
  )
}

export default IconesHeader;
