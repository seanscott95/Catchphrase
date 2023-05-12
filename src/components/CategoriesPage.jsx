
const CategoriesPage = () => {

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
        <div className='container'>
            <section className='navbar'>
                <button className='home-btn'>HOME</button>
                <h1 className='page-title'>CATEGORIES</h1>
                <button className='next-btn'>NEXT</button>
            </section>

            <section className='categories'>
            </section>
        </div>
    );
};

export default CategoriesPage;