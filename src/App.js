import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PersonsPage } from "./components/pages/index";
import { Header, SideBar } from './components/organisms';
import SideBarData from './components/organisms/SideBar/SideBarData';
import Reports from './components/pages/Reports/Reports'
import { BrowserRouter as Router } from "react-router-dom";
import Units from './components/pages/Units/Units';
import Settings from "./components/pages/Settings/Settings";
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';
const NavScreen = (val) => {
  return (
    <SideBar navPath={
      val.navPath
    }
      icon={
        val.icon
      }
      labelName={
        val.labelName
      } />
  )
}
function App() {
  const [hamstate, setHamstate] = useState(true);
  return (
    <Router>
      <div className="App">
        <Header sethamstate={setHamstate} hamstate={hamstate} />
        <div className="content">
          {hamstate ? <ul className='nav-list'>{SideBarData.map(NavScreen)}</ul>
            : <ul className='ham-list'>{SideBarData.map(NavScreen)}</ul>}
          <span className="dynamic-content">
            <Units />
            <Reports></Reports>
          </span>
          <Routes>
            <Route path="/unittypes/:id" element={<Settings />}></Route>
            <Route path="/people" element={<PersonsPage />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}
export default App;
