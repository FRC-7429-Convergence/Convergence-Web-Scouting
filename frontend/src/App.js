import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './Register';
import Home from './Home';
import Login from './Login';
import Navigation from './Navigation';
import Pit from './Pit';
import Match from './Match';
import TeamList from './TeamList';
import PitList from './PitList';
import MatchList from './MatchList';
import About from './About';
import FRC from './FRC';
import FTC from './FTC';
import FLL from './FLL';
import ScoutingHome from './ScoutingHome';
import LogHours from './LogHours';
import Admin from './Admin';
import RegisterEvent from './RegisterEvent';
import Footer from './Footer';
import Gallery from './Gallery';

function App() {
  return (
   <BrowserRouter>
   <Navigation/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/new_event' element={<RegisterEvent/>}></Route>
      <Route path="/LogHours" element={<LogHours/>}></Route>
      <Route path='/student_home' element={<ScoutingHome/>}></Route>
      <Route path='/team_list' element={<TeamList/>}></Route>
      <Route path='/pit_scouting_list' element={<PitList/>}></Route>
      <Route path='/match_scouting_list' element={<MatchList/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/FRC' element={<FRC/>}></Route>
      <Route path='/FTC' element={<FTC/>}></Route>
      <Route path='/FLL' element={<FLL/>}></Route>
      <Route path='/Pit' element={<Pit/>}></Route>
      <Route path='/Match' element={<Match/>}></Route>
      <Route path='/Gallery' element={<Gallery/>}></Route>
    </Routes>
   </BrowserRouter>

  );
}

export default App;
