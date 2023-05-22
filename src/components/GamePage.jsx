import { useState, useEffect } from "react";

const GamePage =
    ({
        setCount,
        currentList,
        handlePageChange,
        timer,
        rules,
        homepageBtnClick,
        timerStreak,
        setTimerStreak,
    }) => {
        const [currentWord, setCurrentWord] = useState(currentList[0] || '');
        const [disabled, setDisabled] = useState('');

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
            // Resets the timer during streak rules
            if (rules === 'STREAK') {
                setTimerStreak(false);
            };
        };

        // Starts quiz for 60 seconds when timer is truthy
        useEffect(() => {
            let timeId;

            if (timer) {
                if (rules === 'HOT POTATO') {
                    timeId = setTimeout(() => handlePageChange('losePage'), 60000);
                };
                if (rules === 'HIGHSCORE') {
                    timeId = setTimeout(() => handlePageChange('winnerPage'), 60000);
                };
            };
            return () => {
                clearTimeout(timeId);
            };
        }, [timer]);

        // Starts the streak quiz for 12 seconds when timerStreak is truthy
        useEffect(() => {
            let timeIdStreak;

            // Starts timer
            if (timerStreak) {
                timeIdStreak = setTimeout(() => handlePageChange('winnerPage'), 12000);
            };
            // Resets the timer if timerStreak is falsy
            if(!timerStreak) {
                setTimerStreak(true);
            };
            return () => {
                clearTimeout(timeIdStreak);
            };
        }, [timerStreak]);

        return (
            <div className='gamePageContainer'>
                <section className='navbar'>
                    <button onClick={homepageBtnClick} className='navbarBtn'>HOME</button>
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