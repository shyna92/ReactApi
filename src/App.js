import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
       <h1>The Movies</h1>
    <Row title="Recomended for you" fetchUrl={requests.fetchRecommended}/>
    <Row title="Popular Movies" fetchUrl={requests.fetchPopularMovies}/>
    
    </div>
  );
}

export default App;
