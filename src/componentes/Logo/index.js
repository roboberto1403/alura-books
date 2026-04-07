import logo from '../../imagens/logo.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LogoContainer = styled.div`
  display: flex;
  font-size: 25px;
  margin-right: 30px;
  cursor: pointer;
`
const LogoImg = styled.img`
  margin-right: 10px;
`

function Logo() {
  return (
    <Link to="/">
      <LogoContainer>
        <LogoImg 
        src={logo} 
        alt="Logo" />
        <p><strong>Alura</strong>Books</p>
      </LogoContainer>
    </Link>

  )
}

export default Logo;