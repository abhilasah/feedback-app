import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const BG_COLORS = ['#05386B', '#379683', '#5CDB95', '#8EE4AF'];
const Home = () => {
    return (
        <div className="games">
            <Carousel
                showArrows={true}
                autoPlay={true}
                emulateTouch={true}
                infiniteLoop={true}
            >
                {BG_COLORS.map((color: string) => {
                    return (
                        <div
                            key={color}
                            className="question-container custom-card"
                            // style={{ background: color }}
                        >
                            <div className="flex w-full h-full">
                                <div className="bg-white mx-24 my-24 w-full h-100">
                                    Question 1
                                </div>
                                <div className="bg-white mx-24 my-24 w-full h-100">
                                    Question 2
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
