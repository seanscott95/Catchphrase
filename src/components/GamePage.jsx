import { useState, useEffect } from "react";

const GamePage = ({ setCount, currentList, handlePageChange, timer }) => {
    const [currentWord, setCurrentWord] = useState(currentList[0] || '');
    const [disabled, setDisabled] = useState('');

    // Starts quiz for 60 seconds when timer is truthy
    useEffect(() => {
        let timeId;
        if (timer) {
            timeId = setTimeout(() => handlePageChange('losePage'), 3000);
        };
        return () => {
            clearTimeout(timeId);
        };
    }, [timer]);

    const handleGameButtons = () => {
        // Disables buttons for two seconds
        setDisabled(true);
        setTimeout(() => {
            setDisabled('');
        }, 2000);

        // Renders the next word in the list
        const index = currentList.indexOf(currentWord);
        setCurrentWord(currentList[index + 1]);
    };

    const handleCorrectBtn = () => {
        handleGameButtons();
        setCount(count => count + 1);
    };

    return (
        <div className='gamePageContainer'>
            <section className='navbar'>
                <button onClick={() => handlePageChange('homepage')} className='navbarBtn'>HOME</button>
            </section>
            <section className="currentWord">
                <h1>{currentWord}</h1>
            </section>
            <section className='footer'>
                <button onClick={handleGameButtons} disabled={disabled} className='navbarBtn'>SKIP</button>
                <button onClick={handleCorrectBtn} disabled={disabled} className='navbarBtn'>CORRECT</button>
            </section>
        </div>
    );
};

export default GamePage;