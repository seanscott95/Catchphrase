import { useState } from "react";
import HomepageComp from "../components/Homepage";
import CategoriesPageComp from "../components/CategoriesPage";
import RulesPageComp from "../components/RulesPage";
import GamePageComp from "../components/GamePage";
import LosePageComp from "../components/LosePage";

const MainLayout = () => {
  const [homepage, setHomepage] = useState(true);
  const [categoriesPage, setCategoriesPage] = useState(false);
  const [rulesPage, setRulesPage] = useState(false);
  const [gamePage, setGamePage] = useState(false)
  const [losePage, setLosePage] = useState(false);

  const [count, setCount] = useState(0);
  const [currentWord, setCurrentWord] = useState('');

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

  const handleStartGame = () => {
    setCurrentWord('');
    setCount(0);
    setHomepage(false);
    setCategoriesPage(false);
    setRulesPage(false);
    setLosePage(false);
    setGamePage(true);
    // start timer
    // at end of timer go to lose page
  };

  const handleHomeBtnClick = () => {
    setHomepage(true);
    setCategoriesPage(false);
    setRulesPage(false);
    setLosePage(false);
    setGamePage(false);
    setCurrentWord('');
    setCount(0);
  };

  const handleNextBtnClick = () => {
    setHomepage(false);
    setCategoriesPage(false);
    setRulesPage(true);
    setLosePage(false);
    setGamePage(false);
  };

  const handleBackBtnClick = () => {
    setHomepage(false);
    setCategoriesPage(true);
    setRulesPage(false);
    setLosePage(false);
    setGamePage(false);
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
          handleStartGame={handleStartGame}
        /> : <></>}
      {gamePage ? 
        <GamePageComp
        setCount={setCount}
        currentWord={currentWord}
        setCurrentWord={setCurrentWord}
        handleHomeBtnClick={handleHomeBtnClick}
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