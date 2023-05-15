
const LosePage = ({handleHomeBtnClick, handleStartGame}) => {
  return (
    <div className='loserPageContainer'>
        <section>
            <h1>YOU LOSE</h1>
            <h2>PHRASES: </h2>
        </section>
        <section className='footer'>
                <button onClick={handleHomeBtnClick} className='navbarBtn'>HOME</button>
                <button onClick={handleStartGame} className='navbarBtn'>PLAY</button>
        </section>
    </div>
  );
};

export default LosePage;