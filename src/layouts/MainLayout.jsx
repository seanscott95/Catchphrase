import { useState } from "react";
import HomepageComp from "../components/Homepage";
import CategoriesPageComp from "../components/CategoriesPage";
import RulesPageComp from "../components/RulesPage";
import GamePageComp from "../components/GamePage";
import LosePageComp from "../components/LosePage";
import WinnerPageComp from "../components/WinnerPage";
import words from "../assets/Words.json";

const MainLayout = () => {
  const [page, setPage] = useState('homepage');

  const [count, setCount] = useState(0);
  const [currentList, setCurrentList] = useState('');

  const [rules, setRules] = useState('HOT POTATO');

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
  const [timerStreak, setTimerStreak] = useState(false);

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
    if (rules === 'STREAK') {
      setTimerStreak(true)
    } else {
      setTimer(true);
    };
  };

  const handlePageChange = (page) => {
    setPage(page);
    if (page === 'gamesPage') {
      return;
    } else if (page === 'losePage' || 'winnerPage') {
      setTimer(false);
      setTimerStreak(false);
    } else if (page === 'homepage' || 'categoriesPage') {
      setTimer(false);
      setTimerStreak(false);
      setCount(0);
      setRules('HOT POTATO');
    } else {
      setTimer(false);
      setTimerStreak(false);
      setCount(0);
    };
  };

  const homepageBtnClick = () => {
    handlePageChange('homepage');
    setRules('HOT POTATO');
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
          rules={rules}
          setRules={setRules}
        /> : <></>}
      {page === 'gamesPage' ?
        <GamePageComp
          setCount={setCount}
          currentList={currentList}
          handlePageChange={handlePageChange}
          timer={timer}
          setRules={setRules}
          rules={rules}
          homepageBtnClick={homepageBtnClick}
          timerStreak={timerStreak}
          setTimerStreak={setTimerStreak}
        /> : <></>}
      {page === 'losePage' ?
        <LosePageComp
          count={count}
          handlePageChange={handlePageChange}
          handleStartGame={handleStartGame}
          homepageBtnClick={homepageBtnClick}
        /> : <></>}
      {page === 'winnerPage' ?
        <WinnerPageComp
          count={count}
          handlePageChange={handlePageChange}
          handleStartGame={handleStartGame}
          homepageBtnClick={homepageBtnClick}
        /> : <></>}
    </>
  );
};

export default MainLayout;