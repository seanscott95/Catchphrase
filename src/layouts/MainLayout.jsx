import { useState } from "react";
import HomepageComp from "../components/Homepage";
import CategoriesPageComp from "../components/CategoriesPage";
import RulesPageComp from "../components/RulesPage";
import GamePageComp from "../components/GamePage";
import LosePageComp from "../components/LosePage";
import words from "../assets/Words.json";

const MainLayout = () => {
  const [page, setPage] = useState('homepage');

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

  const [timer, setTimer] = useState(false);

  const handleStartGame = () => {
    setCount(0);
    setPage('gamesPage');

    // Creates a list of shuffled words for selected categories
    const list = categories.map((obj) => {
      if (obj.include === true) {
        return obj.list;
      };
    }).flat().sort(() => Math.random() - 0.5);
    setCurrentList(list);

    // Starts the timer
    setTimer(true);
  };

  const handlePageChange = (page) => {
    setPage(page);
    if (page === 'gamesPage') {
      return;
    } else if (page === 'losePage') {
      setTimer(false);
    } else {
      setTimer(false);
      setCount(0);
    };
  };

  return (
    <>
      {page === 'homepage' ?
        <HomepageComp
        handlePageChange={handlePageChange}
        /> : <></>}
      {page === 'categoriesPage' ?
        <CategoriesPageComp
          categories={categories}
          setCategories={setCategories}
          handlePageChange={handlePageChange}
        /> : <></>}
      {page === 'rulesPage' ?
        <RulesPageComp
          handlePageChange={handlePageChange}
          handleStartGame={handleStartGame}
        /> : <></>}
      {page === 'gamesPage' ?
        <GamePageComp
          setCount={setCount}
          currentList={currentList}
          handlePageChange={handlePageChange}
          setTimer={setTimer}
          timer={timer}
        /> : <></>}
      {page === 'losePage' ?
        <LosePageComp
          count={count}
          handlePageChange={handlePageChange}
          handleStartGame={handleStartGame}
        /> : <></>}
    </>
  );
};

export default MainLayout;