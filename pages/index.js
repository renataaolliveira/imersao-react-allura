import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import QuizzBackground from '../src/components/QuizzBackground'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const QuizzContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;




export default function Home() {
  return (
    <QuizzBackground backgroundImage={db.bg}>
      <QuizzContainer>
        <Widget>
          <Widget.Header>
            <h1>DIVAS POP</h1>
          </Widget.Header>
          <Widget.Content>
          



          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Header>
            <h1>Quizzes da Galera</h1>
          </Widget.Header>
          <Widget.Content>
          

          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizzContainer>
    </QuizzBackground>

  ) 
}
