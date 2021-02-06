import React from 'react';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizzBackground from '../src/components/QuizzBackground';
import QuizzContainer from '../src/components/QuizzContainer';
import Button from '../src/components/Button';

function LoadingWidget() {
    return (
      <Widget>
        <Widget.Header>
          Carregando...
        </Widget.Header>
  
        <Widget.Content style={{ display: 'flex', justifyContent: 'center' }}>
          {/*<Lottie
            width="200px"
            height="200px"
            className="lottie-container basic"
            config={{ animationData: loadingAnimation, loop: true, autoplay: true }}
          />*/}
        </Widget.Content>
      </Widget>
    );
  }

function QuestionWidget({ question, totalQuestions, questionIndex, onSubmit }) {
    const questionId = `question__${questionIndex}`;
    return (
        <Widget>
            <Widget.Header>
                <h3>
                    {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
                </h3>
            </Widget.Header>

            <img
                alt="descriçao"
                style={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'cover',
                }}
                src={question.image}
            />
            <Widget.Content>
                <h2>
                    {question.title}
                </h2>
                <p>
                    {question.description}
                </p>

                <form onSubmit={(infosDoEvento) => {
                    infosDoEvento.preventDefault();
                    onSubmit();
                }}>
                    {question.alternatives.map((alternative, alternativeIndex) => {
                        const alternativeId = `alternative__${alternativeIndex}`;
                        return (
                            <Widget.Topic as="label" htmlFor={alternativeId}>
                                <input style={ {display:'none'} } id={alternativeId} name={questionId} type="radio" />
                                {alternative}
                            </Widget.Topic>
                        );   
                    })}
                </form>
                

                <Button type="submit">
                    Pronto!
                </Button>
            </Widget.Content>
        </Widget>
    );
}


const screenStates = {
    QUIZZ: 'QUIZZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT',
}

export default function QuizzPage() {
    const [screenState, setScreenState] = React.useState(screenStates.LOADING);
    const totalQuestions = db.questions.length;
    const [questionIndex, setQuestionIndex] = React.useState(0);
    const question = db.questions[questionIndex];

    React.useEffect(() => {
        setTimeout(() => {
            setScreenState(screenStates.QUIZZ);
        }, 1000);
    }, []);
    
    function handleSubmit() {
        const nextQuestion = questionIndex + 1;
        if (nextQuestion < totalQuestions) {
            setQuestionIndex(nextQuestion);
        } else {
            setScreenState(screenStates.RESULT);
        };   
    };

    return (
        <QuizzBackground backgroundImage={db.bg}>
            <QuizzContainer>

                {screenState === screenStates.QUIZZ && (
                    <QuestionWidget 
                    question={question}
                    questionIndex={questionIndex} 
                    totalQuestions={totalQuestions}
                    onSubmit={handleSubmit}
                    />)}

                {screenState === screenStates.LOADING && <LoadingWidget />}

                {screenState === screenStates.RESULT && <div>Você acertou X questões, parabéns!</div>}
            </QuizzContainer>
        </ QuizzBackground>
    );

}
