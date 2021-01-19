
import './App.css';
import {Route} from 'react-router-dom';

import NavBar from '../src/Components/Navigation/Navbar/Navbar';
import AboutMe from './Pages/AboutMe/AboutMe';
import Skills from '../src/Pages/Skills/Skills';
import Work from '../src/Pages/Work/Work';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route path="/" exact component={AboutMe}/>
      <Route path="/skills" exact  component={Skills}/>
      <Route path="/work" exact component={Work}/>
    </div>
  );
}

export default App;
