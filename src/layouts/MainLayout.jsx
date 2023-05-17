import { useState } from "react";
import HomepageComp from "../components/Homepage";
import CategoriesPageComp from "../components/CategoriesPage";
import RulesPageComp from "../components/RulesPage";
import GamePageComp from "../components/GamePage";
import LosePageComp from "../components/LosePage";
import words from "../assets/Words.json";

const MainLayout = () => {
  const [homepage, setHomepage] = useState(true);
  const [categoriesPage, setCategoriesPage] = useState(false);
  const [rulesPage, setRulesPage] = useState(false);
  const [gamePage, setGamePage] = useState(false)
  const [losePage, setLosePage] = useState(false);

  const [count, setCount] = useState(0);
  const [currentList, setCurrentList] = useState('');

  const [categories, setCategories] = useState([
    {
      name: 'PARTY',
      include: true,
      list: words.party,
    },
    {
      name: 'POP',
      include: true,
      list: words.pop,
    },
    {
      name: 'PEOPLE',
      include: true,
      list: words.people,
    },
    {
      name: 'TV',
      include: true,
      list: words.tv,
    },
    {
      name: 'WORLD',
      include: true,
      list: words.world,
    },
    {
      name: 'SLANG',
      include: true,
      list: words.slang,
    },
    {
      name: 'BRANDS',
      include: true,
      list: words.brands,
    },
    {
      name: 'NERD',
      include: true,
      list: words.nerd,
    },
    {
      name: 'SPORTS',
      include: true,
      list: words.sports,
    },
    {
      name: 'MUSIC',
      include: true,
      list: words.music,
    },
    {
      name: 'GAMES',
      include: true,
      list: words.games,
    },
  ]);

  const handleStartGame = () => {
    setCount(0);
    setHomepage(false);
    setCategoriesPage(false);
    setRulesPage(false);
    setLosePage(false);
    setGamePage(true);

    // Creates a list of shuffled words for selected categories
    const list = categories.map((obj) => {
      if (obj.include === true) {
        return obj.list
      };
    }).flat().sort(() => Math.random() - 0.5);
    setCurrentList(list)

    // Ends the game in 60 seconds
    setTimeout(() => {
      setGamePage(false);
      setLosePage(true);
    }, 60000);
  };

  const handleHomeBtnClick = () => {
    setHomepage(true);
    setCategoriesPage(false);
    setRulesPage(false);
    setLosePage(false);
    setGamePage(false);
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
        currentList={currentList}
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