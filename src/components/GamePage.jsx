
const GamePage = ({ handleHomeBtnClick, currentWord }) => {

    const handleSkipBtn = () => {
        // blur btns
        // go to new word
    };

    const handleCorrectBtn = () => {
        // blur btns
        // go to new word
        // add to score
    };

    return (
        <div>
            <section className='navbar'>
                <button onClick={handleHomeBtnClick} className='navbarBtn'>HOME</button>
            </section>
            <h1>{currentWord}</h1>
            <section className='gameBtns'>
                <button onClick={handleSkipBtn} className='navbarBtn'>SKIP</button>
                <button onClick={handleCorrectBtn} className='navbarBtn'>CORRECT</button>
            </section>
        </div>
    );
};

export default GamePage;