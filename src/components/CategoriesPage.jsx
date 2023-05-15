
const CategoriesPage = ({ handleHomeBtnClick }) => {

    const categories = [
        'PARTY',
        'POP',
        'PEOPLE',
        'SPORTS',
        'WORLD',
        'SLANG',
        'BRANDS',
        'NERD',
        'TV',
        'MUSIC',
        'GAMES',
    ];

    return (
        <div className='categoryPageContainer'>
            <section className='navbar'>
                <button onClick={handleHomeBtnClick} className='navbarBtn'>HOME</button>
                <h1 className='pageTitle'>CATEGORIES</h1>
                <button className='navbarBtn'>NEXT</button>
            </section>

            <section className='categories'>
            </section>
        </div>
    );
};

export default CategoriesPage;