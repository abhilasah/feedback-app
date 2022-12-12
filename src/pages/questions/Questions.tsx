import { Button } from 'antd';
import { useCallback, useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import readXlsxFile from 'read-excel-file';

type TQuestion = {
    questionID: string;
    question: string;
    answers: any[];
};
type TSubmittedAns = {
    questionID: string;
    userAnswer: number;
};
const Home = () => {
    const [questions, setQuestions] = useState<TQuestion[]>([]);
    const [submittedAns, setSubmittedAns] = useState<TSubmittedAns[]>([]);

    const authHandler = () => {
        localStorage.setItem('feedbackStatus', 'true');
    };

    useEffect(() => {
        fetch('../../../assets/PWA-questions.xlsx')
            .then((response) => response.blob())
            .then((blob) => readXlsxFile(blob))
            .then((rows) => {
                if (rows && Array.isArray(rows)) {
                    rows.splice(0, 1);
                    const questions: TQuestion[] = [];
                    rows.forEach((rowData, index: number) => {
                        questions.push({
                            questionID: index.toString(),
                            question: rowData[0].toString(),
                            answers: rowData.slice(1, 5),
                        });
                    });
                    setQuestions(questions);
                }
                console.log('rows = ', rows);
            });
    }, []);

    const answerClickHandler = useCallback(
        (ansID: number, questionID: string) => {
            setSubmittedAns([
                ...submittedAns,
                {
                    questionID: questionID,
                    userAnswer: ansID,
                },
            ]);
        },
        []
    );

    return (
        <section className="glass">
            <Carousel showArrows={true} emulateTouch={true} infiniteLoop={true}>
                {questions.map(
                    ({ answers, question, questionID }, index: number) => {
                        return (
                            <div className="question-container" key={index}>
                                <h2 className="question-title">{question}</h2>
                                {answers.map((answer, index) => {
                                    return (
                                        <div
                                            onClick={() =>
                                                answerClickHandler(
                                                    index + 1,
                                                    questionID
                                                )
                                            }
                                            key={index}
                                            className="custom-card"
                                        >
                                            <p>{answer}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    }
                )}
            </Carousel>
            <Button
                className="pro"
                type="primary"
                onClick={authHandler}
                size="large"
                style={{ marginBottom: '2rem' }}
            >
                Submit
            </Button>
        </section>
    );
};

export default Home;
