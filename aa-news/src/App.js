
import { Route, Routes} from 'react-router-dom';
import './App.css';
import { ArticleList } from './components/ArticleList';
import { Header } from './components/Header';
import { Navbar } from './components/Navbar';
import React from 'react';



function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar />
      <Routes>
        <Route path="/" element={ <ArticleList />}/>
        <Route path="/topics/:topic_slug" element={ <ArticleList />}/>
      </Routes>
    </div>
  );
}

export default App;
