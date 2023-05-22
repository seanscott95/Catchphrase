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
            let timeIdStreak;
            let timeLength;

            // Startes the timer for hot potato and high score games
            if (timer) {
                // 60 seconds
                timeLength = 6000;
                if (rules === 'HOT POTATO') {
                    timeId = setTimeout(() => handlePageChange('losePage'), timeLength);
                };
                if (rules === 'HIGH SCORE') {
                    timeId = setTimeout(() => handlePageChange('winnerPage'), timeLength);
                };
            };

            // Starts timer for streak games
            if (rules === 'STREAK') {
                if (timerStreak) {
                    // 12 seconds
                    timeLength = 12000;
                    timeIdStreak = setTimeout(() => handlePageChange('winnerPage'), timeLength);
                };
                // Resets the timer for streak games
                if (!timerStreak) {
                    setTimerStreak(true);
                };
            };

            // Resets the timer if timerStreak is falsy
            return () => {
                clearTimeout(timeId);
                clearTimeout(timeIdStreak);
            };
        }, [timer, timerStreak]);

        const [width, setWidth] = useState('1%');
        useEffect(() => {
            // Converts the width that is a string with a percent into a number
            const split = width.split('%');
            const percent = Number(split[0]);
            let percentTimes;
            // Value will times the current width every 5ms, values convert to 12s and 60s
            percentTimes = rules === 'STREAK' ? .053 : .105;

            // Every 5 miliseconds the width will be increased
            const interval = setInterval(() => {
                const extraPercent = `${percent + percentTimes}%`;
                setWidth(extraPercent);
            }, 5);

            return () => {
                clearInterval(interval)
            }
        }, [width]);

        return (
            <div className='gamePageContainer'>
                <section className='navbar'>
                    <button onClick={homepageBtnClick} className='navbarBtn'>HOME</button>
                </section>
                <section className="currentWord">
                    <h1>{currentWord}</h1>
                </section>
                <section className="progressBarContainer">
                    <div className="progressBar" style={{ width: width }}></div>
                </section>
                <section className='footer'>
                    <button onClick={handleGameButtons} disabled={disabled} className='navbarBtn'>SKIP</button>
                    <button onClick={handleCorrectBtn} disabled={disabled} className='navbarBtn'>CORRECT</button>
                </section>
            </div>
        );
    };

export default GamePage;