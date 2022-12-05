import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import readXlsxFile from 'read-excel-file';

type TQuestion = {
    question: string;
    answers: any[];
};
const Home = () => {
    const [questions, setQuestions] = useState<TQuestion[]>([]);
    useEffect(() => {
        fetch('../../../assets/PWA-questions.xlsx')
            .then((response) => response.blob())
            .then((blob) => readXlsxFile(blob))
            .then((rows) => {
                if (rows && Array.isArray(rows)) {
                    rows.splice(0, 1);
                    const questions: TQuestion[] = [];
                    rows.forEach((rowData) => {
                        questions.push({
                            question: rowData[0].toString(),
                            answers: rowData.slice(1, 5),
                        });
                    });
                    setQuestions(questions);
                }
                console.log('rows = ', rows);
            });
    }, []);

    return (
        <div>
            <Carousel
                showArrows={true}
                // autoPlay={true}
                emulateTouch={true}
                infiniteLoop={true}
            >
                {questions.map(({ answers, question }, index: number) => {
                    return (
                        <div
                            key={index}
                            className="question-container pro"
                            // style={{ background: color }}
                        >
                            <div className="flex w-full h-full">
                                <div className="bg-white mx-24 my-24 w-full h-100">
                                    <h2>{question}</h2>
                                    <div className="cards">
                                        {answers.map((answer, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className="custom-card"
                                                >
                                                    <p>{answer}</p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default Home;
