const Home = () => {
    return (
        <>
            <div className="games">
                <div className="status">
                    <h1>Welcome to Feedback App</h1>
                </div>
                <div className="cards">
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
                </div>
                <div className="pro">
                    <h2>Let's get started</h2>
                </div>
            </div>
        </>
    );
};

export default Home;
