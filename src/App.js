
import './App.css';
import {Route} from 'react-router-dom';

import NavBar from '../src/Components/Navigation/Navbar/Navbar';
import AboutMe from './Pages/AboutMe/AboutMe';
import Skills from '../src/Pages/Skills/Skills';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route path="/" exact component={AboutMe}/>
      <Route path="/skills" exact  component={Skills}/>
    </div>
  );
}

export default App;
