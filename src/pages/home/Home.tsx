import { Button, notification } from 'antd';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const addUserTimeStamp = () => {
        let currentTime = new Date();
        localStorage.setItem(
            'userTimeStamp',
            JSON.stringify(currentTime.getTime())
        );
        navigate('/questions');
    };

    const showAuthPopup = () => {
        notification.open({
            message: <div style={{ color: '#426696' }}>Hi !</div>,
            description: (
                <p style={{ color: '#426696' }}>
                    We have your feedback response with us
                </p>
            ),
            className: 'notification',
            style: { color: '#426696' },
        });
    };

    const authHandler = () => {
        let feedbackStatus;
        if (localStorage.getItem('userTimeStamp')) {
            let filledTime = JSON.parse(
                localStorage.getItem('userTimeStamp') ?? ''
            );
            let today = new Date();
            let currentTime = today.getTime(); // instead of this we can provide that particular date on which feedback will get expired
            let days = (currentTime - filledTime) / (1000 * 3600 * 24);
            if (days <= 2) {
                feedbackStatus = localStorage.getItem('feedbackStatus');
                if (feedbackStatus !== undefined && feedbackStatus) {
                    showAuthPopup();
                } else {
                    addUserTimeStamp();
                }
            } else {
                localStorage.clear();
                addUserTimeStamp();
            }
        } else {
            localStorage.clear();
            addUserTimeStamp();
        }
    };

    return (
        <section className="glass">
            <div className="games">
                <div className="status">
                    <h1>Welcome to Feedback App</h1>
                </div>
                <div className="card">
                    <div className="cardContainer">
                        <div className="card-info">
                            <h2>Date</h2>
                        </div>
                        <h2 className="percentage">01/01/2023</h2>
                    </div>
                    <div className="cardContainer">
                        <div className="card-info">
                            <h2>Theme</h2>
                        </div>
                        <h2 className="percentage">New Year</h2>
                    </div>
                    <div className="cardContainer">
                        <div className="card-info">
                            <h2>Venue</h2>
                        </div>
                        <h2 className="percentage">4th floor cafeteria</h2>
                    </div>
                </div>
                <Button
                    className="pro"
                    type="primary"
                    onClick={authHandler}
                    size="large"
                >
                    Let's get started
                </Button>
            </div>
        </section>
    );
};

export default Home;
