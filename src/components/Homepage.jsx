const Homepage = ({ setHome, setCategories }) => {
  const playBtnClickHandler = () => {
    setHome(prev => !prev);
    setCategories(prev => !prev);
  };

  return (
    <div className='homepageContainer'>
      <h1 className='pageTitle'>CATCH PHRASE</h1>
      <button className='playBtn' onClick={playBtnClickHandler}>PLAY</button>
    </div>
  );
};

export default Homepage;