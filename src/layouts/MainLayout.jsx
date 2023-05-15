import { useState } from "react";
import HomepageComp from "../components/Homepage";
import CategoriesPageComp from "../components/CategoriesPage";
import RulesPageComp from "../components/RulesPage";

const MainLayout = () => {
    const [homepage, setHomepage] = useState(true);
    const [categoriesPage, setCategoriesPage] = useState(false);
    const [rulesPage, setRulesPage] = useState(false);

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

    const handleHomeBtnClick = () => {
      setHomepage(true);
      setCategoriesPage(false);
    };

    const handleNextBtnClick = () => {
        setHomepage(false);
        setCategoriesPage(false);
        setRulesPage(true);
    };

  return (
    <>
        {homepage ?
        <HomepageComp
          setHomepage={setHomepage}
          setCategoriesPage={setCategoriesPage}
        /> : <></>}
        {categoriesPage ?
          <CategoriesPageComp
            categories={categories}
            setCategories={setCategories}
            handleHomeBtnClick={handleHomeBtnClick}
            handleNextBtnClick={handleNextBtnClick}
          /> : <></>}
        {rulesPage ? <RulesPageComp /> : <></>}
    </>
  );
};

export default MainLayout;