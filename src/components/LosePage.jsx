
const LosePage = ({ count, handleHomeBtnClick, handleStartGame }) => {
    return (
        <div className='loserPageContainer'>
            <section className='loserPageContent'>
                <div>
                    <h1>YOU LOSE</h1>
                    <h2>PHRASES: {count}</h2>
                </div>
            </section>
            <section className='navbar'>
                <button onClick={handleHomeBtnClick} className='navbarBtn'>HOME</button>
                <button onClick={handleStartGame} className='navbarBtn'>PLAY</button>
            </section>
        </div>
    );
};

export default LosePage;