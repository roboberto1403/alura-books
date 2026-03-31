import styled from "styled-components";

const Titulo = styled.h2`
  width: 100%;
  padding: 30px 0;
  background-color: ${props => props.corFundo || "transparent"};
  color: ${props => props.cor || "#000"};
  font-size: ${props => props.tamanhoFonte || "18px"};
  text-align: ${props => props.alinhamento || "center"};
  margin: 0;
`
export default Titulo;