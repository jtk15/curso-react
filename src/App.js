import React from 'react';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

import Home from './components/pages/Home';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import NewProject from './components/pages/NewProject';

function App() {

  return (
    <Router>
        <div>
            <Link to="/">Home</Link>
            <Link to="/company">Empresa</Link>
            <Link to="/contact">Contato</Link>
            <Link to="/newproject">Novo Projeto</Link>
        </div>

        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/company" element={<Company/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
            <Route exact path="/newproject" element={<NewProject/>}/> 
        </Routes>
    </Router>
  );
}

export default App;
