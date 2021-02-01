import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import QuizzBackground from '../src/components/QuizzBackground'
import Head from 'next/head';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizzBackground backgroundImage={db.bg}>
      <Head>
        <title>Quizz Alura - Divas Pop</title>
      </Head>
      <QuizzContainer>
        <Widget>
          <Widget.Header>
            <h1>DIVAS POP</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function(event) {
              //Evita o comportamento padrão de submeter o formulário para o servidor
                event.preventDefault();
                router.push(`./quizz?name=${name}`);
            }}>
              <input 
                onChange={function(event) {
                  setName(event.target.value);
                }}
                placeholder="Digite seu nome" 
              />
              <button type="submit" disabled={name.length === 0}>
                Bora, {name}
              </button>
            </form>
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
