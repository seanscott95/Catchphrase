
const LosePage = ({ count, handleHomeBtnClick, handleStartGame }) => {
    return (
        <div className='loserPageContainer'>
            <section className='loserPageContent'>
                <h1>YOU LOSE</h1>
                <h2>PHRASES: {count}</h2>
            </section>
            <section className='footer'>
                <button onClick={handleHomeBtnClick} className='navbarBtn'>HOME</button>
                <button onClick={handleStartGame} className='navbarBtn'>PLAY</button>
            </section>
        </div>
    );
};

export default LosePage;