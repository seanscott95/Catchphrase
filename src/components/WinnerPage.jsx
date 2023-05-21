const WinnerPage = ({ count, handlePageChange, handleStartGame }) => {
    return (
        <div className='winnerPageContainer'>
            <section className='winnerPageContent'>
                <div>
                    <h1>YOU WIN</h1>
                    <h2>PHRASES: {count}</h2>
                </div>
            </section>
            <section className='navbar'>
                <button onClick={() => handlePageChange('homepage')} className='navbarBtn'>HOME</button>
                <button onClick={handleStartGame} className='navbarBtn'>PLAY</button>
            </section>
        </div>
    );
};

export default WinnerPage;