import styled from "styled-components"
import Titulo from "../Titulo"
import { livros } from "./dadosLancamentos";
import CardRecomenda from "../CardRecomenda"
import imagemLivro from "../../imagens/livro2.png"

const UltimosLancamentosContainer = styled.section`
  background-color: #EBECEE;
  flex-direction: column;
  display: flex;
  padding-bottom: 20px;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo 
      cor="#EB9B00"
      tamanhoFonte="36px"
      corFundo="#FFF"
      >
        Últimos Lançamentos</Titulo> 
      <NovosLivrosContainer>
      {livros.map(livro => (
          <img src={livro.src} alt={livro.nome} />
      ))}
      </NovosLivrosContainer>
      <CardRecomenda 
        titulo="Talvez você se interesse por..."
        subtitulo="Angular 11"
        descricao="Aprenda Angular 11 do zero."
        img={imagemLivro}
      >
      </CardRecomenda>
    </UltimosLancamentosContainer>

  )
}

export default UltimosLancamentos