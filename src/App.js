import './App.css';
import Navbar from './components/navbar/navbar.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from 'react-router-dom'
import HomePage from './pages/home-page/home-page.component';
import AboutPage from './pages/about-me-page/about-page.component';
// import SkillsLarge from './components/skills-large/skills-large.component';
// import SkillsPage from './pages/skills-page.component/skills-page.component';
// import ContactMe from './components/contact-me/contact-me.component';



function App() {
  return (
    <div className="App">


        <Routes>
          <Route path = '/'  element = {<Navbar/>} >
            <Route index element = {<AboutPage/>} />
            <Route path='/aboutme' element = {<HomePage/>} />
            {/* <Route path='/contactme' element = {<ContactMe/>} /> */}
          </Route>
        </Routes>



    </div>
  );
}

export default App;
