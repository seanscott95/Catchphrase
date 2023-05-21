const CategoriesPage = ({ categories, setCategories, handlePageChange }) => {

    const handleCategoryBtn = (e) => {
        const category = e.target.value;
        const updatedArray = categories.map(obj => {
            if (obj.name === category) {
                obj.include = !obj.include;
            };
            return obj;
        });
        setCategories(updatedArray);
    };

    return (
        <div className='categoryPageContainer'>
            <section className='navbar'>
                <button onClick={() => handlePageChange('homepage')} className='navbarBtn'>HOME</button>
                <h1 className='pageTitle'>CATEGORIES</h1>
                <button onClick={() => handlePageChange('rulesPage')} className='navbarBtn'>NEXT</button>
            </section>

            <section className='categoriesPageContent'>
                <div className="categoryBtnGroup">
                    {categories.map(item => (
                        <>
                            {item.include ?
                                <button
                                    className="categoryBtn"
                                    key={item.name}
                                    onClick={handleCategoryBtn}
                                    value={item.name}
                                >{item.name}</button>
                                : <button
                                    className="categoryBtnUnclicked"
                                    key={item.name}
                                    onClick={handleCategoryBtn}
                                    value={item.name}
                                >{item.name}</button>
                            }
                        </>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default CategoriesPage;