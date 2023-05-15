
const CategoriesPage = ({ handleHomeBtnClick }) => {

    const categories = [
        'PARTY',
        'POP',
        'PEOPLE',
        'TV',
        'WORLD',
        'SLANG',
        'BRANDS',
        'NERD',
        'SPORTS',
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
                {categories.map(item => (
                    <button className="categoryBtn" key={item}>{item}</button>
                ))}
            </section>

        </div>
    );
};

export default CategoriesPage;