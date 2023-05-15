import { useState } from "react";
import HomepageComp from "../components/Homepage";
import CategoriesPageComp from "../components/CategoriesPage";
import RulesPageComp from "../components/RulesPage";
import LosePageComp from "../components/LosePage";

const MainLayout = () => {
  const [homepage, setHomepage] = useState(true);
  const [categoriesPage, setCategoriesPage] = useState(false);
  const [rulesPage, setRulesPage] = useState(false);
  const [losePage, setLosePage] = useState(false);

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
    setRulesPage(false);
    setLosePage(false);
  };

  const handleNextBtnClick = () => {
    setHomepage(false);
    setCategoriesPage(false);
    setRulesPage(true);
    setLosePage(false);
  };

  const handleBackBtnClick = () => {
    setHomepage(false);
    setCategoriesPage(true);
    setRulesPage(false);
    setLosePage(false);
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
      {rulesPage ?
        <RulesPageComp
          handleBackBtnClick={handleBackBtnClick}
        /> : <></>}
      {losePage ?
        <LosePageComp
          count={count}
          handleHomeBtnClick={handleHomeBtnClick}
          handleStartGame={handleStartGame}
        /> : <></>
      }
    </>
  );
};

export default MainLayout;