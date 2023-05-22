import { useState } from "react";

const RulesPage = ({ handlePageChange, handleStartGame, rules, setRules }) => {
    const rulesListTemplate = [
        {
            title: 'HOT POTATO',
            a: 'USE HINTS TO GET OTHERS TO GUESS THE PHRASE',
            b: 'YOU CANNOT USE ANY WORD IN THE PHRASE ITSELF',
            c: 'PASS THE PHONE TO THE NEXT PERSON AFTER EACH PHRASE',
            d: 'THE LOSER IS THE ONE HOLDING THE PHONE WHEN THE TIMER ENDS',
            active: true,
        },
        {
            title: 'HIGH SCORE',
            a: 'USE HINTS TO GET OTHERS TO GUESS THE PHRASE',
            b: 'YOU CANNOT USE ANY WORD IN THE PHRASE ITSELF',
            c: 'ONE PLAYER KEEPS THE PHONE THE ENTIRE ROUND',
            d: 'TRY TO DESCRIBE AS MANY PHRASES AS YOU CAN',
            active: false,
        },
        {
            title: 'STREAK',
            a: 'USE HINTS TO GET OTHERS TO GUESS THE PHRASE',
            b: 'YOU CANNOT USE ANY WORD IN THE PHRASE ITSELF',
            c: '12 SECONDS PER PHRASE, TIMERS RESETS AFTER CORRECT PHRASE',
            d: 'PLAY HOT POTATO OR HIGH SCORE',
            active: false,
        },
    ];
    const [rulesList, setRulesList] = useState(rulesListTemplate)

    const handleRulesBtnClick = (e) => {
        const val = e.target.value;
        setRules(val);
        if (val === 'HOT POTATO') {
            let a = rulesListTemplate;
            a[0].active = true;
            a[1].active = false;
            a[2].active = false;
            setRulesList(a);
        };
        if (val === 'HIGH SCORE') {
            let b = rulesListTemplate;
            b[0].active = false;
            b[1].active = true;
            b[2].active = false;
            setRulesList(b);
        };
        if (val === 'STREAK') {
            let c = rulesListTemplate;
            c[0].active = false;
            c[1].active = false;
            c[2].active = true;
            setRulesList(c);
        };
    };

    const handleBackBtn = () => {
        setRules('HOT POTATO');
        setRulesList(rulesListTemplate);
        handlePageChange('categoriesPage');
    };

    return (
        <div className='rulesPageContainer'>
            <section className='navbar'>
                <button onClick={handleBackBtn} className='navbarBtn'>BACK</button>
                <h1 className='pageTitle'>RULES</h1>
                <button onClick={handleStartGame} className='navbarBtn'>PLAY</button>
            </section>

            <section className='rules'>
                <div className="rulesBtnGroup">
                    {rulesList.map((obj) => {
                        if (obj.active) {
                            return <button value={obj.title} onClick={handleRulesBtnClick} className='active'>{obj.title}</button>
                        } else {
                            return <button value={obj.title} onClick={handleRulesBtnClick}>{obj.title}</button>
                        }
                    })}
                </div>

                {rulesList.map((obj) => {
                    if (obj.title === rules) {
                        return <div key={obj.title} className='instructions'>
                            <h1>{obj.title}</h1>
                            <ul>
                                <li>{obj.a}</li>
                                <li>{obj.b}</li>
                                <li>{obj.c}</li>
                                <li>{obj.d}</li>
                            </ul>
                        </div>
                    }
                })}
            </section>
        </div>
    );
};

export default RulesPage;