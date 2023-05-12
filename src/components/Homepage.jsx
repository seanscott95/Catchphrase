const Homepage = ({ setHome, setCategories }) => {
  const playBtnClickHandler = () => {
    setHome(prev => !prev);
    setCategories(prev => !prev);
  };

  return (
    <div className='container'>
      <h1 className='page-title'>CATCH PHRASE</h1>
      <button className='play-btn' onClick={playBtnClickHandler}>PLAY</button>
    </div>
  );
};

export default Homepage;