const Homepage = ({ handlePageChange }) => {
  return (
    <div className='homepageContainer'>
      <h1 className='pageTitle'>CATCH PHRASE</h1>
      <button className='playBtn' onClick={() => handlePageChange('categoriesPage')}>PLAY</button>
    </div>
  );
};

export default Homepage;