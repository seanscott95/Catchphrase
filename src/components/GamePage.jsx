import { useState, useEffect } from "react";

import SkipBtnSound from '../assets/audio/skip-button.wav';
import CorrectBtnSound from '../assets/audio/correct-button.wav';
import TimerBeep from '../assets/audio/timer-beep.wav';

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
        playSound,
    }) => {
        const [currentWord, setCurrentWord] = useState(currentList[0] || '');
        const [disabled, setDisabled] = useState('');
        const [width, setWidth] = useState('1%');

        const handleGameButtons = (e) => {
            // Plays the buttons sound effects
            if (e.target.value === 'skip') {
                playSound(SkipBtnSound);
            };
            if (e.target.value === 'correct') {
                playSound(CorrectBtnSound);
            };

            // Disables buttons for two seconds
            setDisabled(true);
            setTimeout(() => {
                setDisabled('');
            }, 2000);

            // Renders the next word in the list
            const index = currentList.indexOf(currentWord);
            setCurrentWord(currentList[index + 1]);
        };

        const handleCorrectBtn = (e) => {
            handleGameButtons(e);
            setCount(count => count + 1);
            // Resets the timer and progress bar during streak rules
            if (rules === 'STREAK') {
                setTimerStreak(false);
                setWidth('1%');
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
                timeLength = 60000;
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

        useEffect(() => {
            // Converts the width that is a string with a percent into a number
            const split = width.split('%');
            const percent = Number(split[0]);
            let percentTimes;
            // Value will times the current width every 5ms, values convert to 12s and 60s
            percentTimes = rules === 'STREAK' ? .053 : .0105;

            // Every 5 miliseconds the width will be increased
            const interval = setInterval(() => {
                const extraPercent = `${percent + percentTimes}%`;
                setWidth(extraPercent);
            }, 5);

            return () => {
                clearInterval(interval)
            }
        }, [width]);


        // Timer will beep sound for 1 second until component unmounts
        useEffect(() => {
            // Starts the beep interval of 1 second
            const soundEffect = new Audio(TimerBeep);
            const int = setInterval(() => {
                soundEffect.play();
            }, 1000);

            return () => {
                // Stops any audio playing if component unmounts
                clearInterval(int);
            };
        }, []);

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
                    <button value='skip' onClick={(e) => handleGameButtons(e)} disabled={disabled} className='navbarBtn'>SKIP</button>
                    <button value='correct' onClick={(e) => handleCorrectBtn(e)} disabled={disabled} className='navbarBtn'>CORRECT</button>
                </section>
            </div>
        );
    };

export default GamePage;