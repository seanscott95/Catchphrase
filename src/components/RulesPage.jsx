const RulesPage = ({ handlePageChange, handleStartGame }) => {
    return (
        <div className='rulesPageContainer'>
            <section className='navbar'>
                <button onClick={() => handlePageChange('categoriesPage')} className='navbarBtn'>BACK</button>
                <h1 className='pageTitle'>RULES</h1>
                <button onClick={handleStartGame} className='navbarBtn'>PLAY</button>
            </section>

            <section className='rules'>
                <button>HOT POTATO</button>
                <div className='instructions'>
                    <h1>HOT POTATO</h1>
                    <ul>
                        <li>USE HINTS TO GET OTHERS TO GUESS THE PHRASE</li>
                        <li>YOU CANNOT USE ANY WORD IN THE PHRASE ITSELF</li>
                        <li>PASS THE PHONE TO THE NEXT PERSON AFTER EACH PHRASE</li>
                        <li>THE LOSER IS THE ONE HOLDING THE PHONE WHEN THE TIMER ENDS</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default RulesPage;