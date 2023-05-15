const Homepage = ({ setHomepage, setCategoriesPage }) => {
  const playBtnClickHandler = () => {
    setHomepage(prev => !prev);
    setCategoriesPage(prev => !prev);
  };

  return (
    <div className='homepageContainer'>
      <h1 className='pageTitle'>CATCH PHRASE</h1>
      <button className='playBtn' onClick={playBtnClickHandler}>PLAY</button>
    </div>
  );
};

export default Homepage;