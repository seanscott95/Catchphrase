import { useEffect } from "react";

import WinSound from '../assets/audio/win-sound.wav';

const WinnerPage = ({ count, homepageBtnClick, handleStartGame, playSound }) => {

    useEffect(() => {
        playSound(WinSound);
    }, []);

    return (
        <div className='winnerPageContainer'>
            <section className='winnerPageContent'>
                <div>
                    <h1>YOU WIN</h1>
                    <h2>PHRASES: {count}</h2>
                </div>
            </section>
            <section className='navbar'>
                <button onClick={homepageBtnClick} className='navbarBtn'>HOME</button>
                <button onClick={handleStartGame} className='navbarBtn'>PLAY</button>
            </section>
        </div>
    );
};

export default WinnerPage;