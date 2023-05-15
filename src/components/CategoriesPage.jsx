import { useState } from "react";

const CategoriesPage = ({ handleHomeBtnClick }) => {

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
    
    const [categories, setCategories] = useState([
        {
            name: 'PARTY',
            include: true,
        },
        {
            name: 'POP',
            include: true,
        },
        {
            name: 'PEOPLE',
            include: true,
        },
        {
            name: 'TV',
            include: true,
        },
        {
            name: 'WORLD',
            include: true,
        },
        {
            name: 'SLANG',
            include: true,
        },
        {
            name: 'BRANDS',
            include: true,
        },
        {
            name: 'NERD',
            include: true,
        },
        {
            name: 'SPORTS',
            include: true,
        },
        {
            name: 'MUSIC',
            include: true,
        },
        {
            name: 'GAMES',
            include: true,
        },
    ]);

    console.log(categories)
    
    return (
        <div className='categoryPageContainer'>
            <section className='navbar'>
                <button onClick={handleHomeBtnClick} className='navbarBtn'>HOME</button>
                <h1 className='pageTitle'>CATEGORIES</h1>
                <button className='navbarBtn'>NEXT</button>
            </section>

            <section className='categories'>
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
            </section>

        </div>
    );
};

export default CategoriesPage;