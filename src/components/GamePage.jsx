import { useState } from "react";

const GamePage = ({ handleHomeBtnClick, setCurrentWord, currentWord, setCount }) => {
    const [disabled, setDisabled] = useState('');

    const disableButton = () => {
        setDisabled(true);
        setTimeout(() => {
            setDisabled('');
        }, 2000);
    };

    const handleSkipBtn = () => {
        // blur btns
        disableButton();
        // go to new word
    };

    const handleCorrectBtn = () => {
        // blur btns
        disableButton();
        // go to new word
        // add to score
    };

    return (
        <div className='gamePageContainer'>
            <section className='navbar'>
                <button onClick={handleHomeBtnClick} className='navbarBtn'>HOME</button>
            </section>
            <h1>{currentWord}</h1>
            <section className='footer'>
                <button onClick={handleSkipBtn} disabled={disabled} className='navbarBtn'>SKIP</button>
                <button onClick={handleCorrectBtn} disabled={disabled} className='navbarBtn'>CORRECT</button>
            </section>
        </div>
    );
};

export default GamePage;