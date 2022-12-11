import { CheckCircleFilled } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import readXlsxFile from 'read-excel-file';

type TQuestion = {
    qid:string;
    question: string;
    answers: any[];
};
const Questions = (props:any) => {
    const [questions, setQuestions] = useState<TQuestion[]>([]);       
    useEffect(() => {
        props.startLoadingResponses();    
        fetch('../../../assets/PWA-questions.xlsx')
            .then((response) => response.blob())
            .then((blob) => readXlsxFile(blob))
            .then((rows) => {
                if (rows && Array.isArray(rows)) {
                    rows.splice(0, 1);
                    const questions: TQuestion[] = [];
                    rows.forEach((rowData) => {
                        questions.push({
                            qid: rowData[0].toString(),
                            question: rowData[1].toString(),
                            answers: rowData.slice(2, 6)
                        });
                    });
                    setQuestions(questions);
                }
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
                {questions.map(({ answers, question , qid}, index: number) => {
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
                                        {
                                            answers.map((answer, index) => {                                            
                                            return (
                                                <div key={index} className="custom-card">   
                                                <p>{answer}</p>
                                                {
                                                   props.survey.responses[qid] == answer && <CheckCircleFilled color='green'/>
                                                }
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

export default Questions;
