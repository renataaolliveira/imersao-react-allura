import React from 'react';
import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizzBackground from '../src/components/QuizzBackground';
import QuizzContainer from '../src/components/QuizzContainer';
import Button from '../src/components/Button';

function QuestionWidget({ question, totalQuestions, questionIndex }) {
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

                {question.alternatives.map((alternative) => {
                    return alternative;
                })}
                <Button>
                    Pronto!
                </Button>
            </Widget.Content>
        </Widget>
    );
}


export default function QuizzPage() {
    const totalQuestions = db.questions.length;
    const questionIndex = 0;
    const question = db.questions[questionIndex];

    return (
        <QuizzBackground backgroundImage={db.bg}>
            <QuizzContainer>
                <QuestionWidget 
                question={question}
                questionIndex={questionIndex} 
                totalQuestions={totalQuestions}
                />
            </QuizzContainer>
        </ QuizzBackground>
    );

}
