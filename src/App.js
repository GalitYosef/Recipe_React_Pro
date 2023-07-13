import './App.css';
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Footer from "./components/Footer/Footer";
import homeCss from "./components/Home/home.module.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Recipe from './components/Recipe/Recipe';
import Brouniz from './components/WhatMake/Brouniz/Brouniz';
import Cookies from './components/WhatMake/Cookies/Cookies';
import Pai from './components/WhatMake/Pai/Pai';
import Shmarim from './components/WhatMake/Shmarim/Shmarim';
import Bchoshot from './components/WhatMake/Bchoshot/Bchoshot';
import Vegan from './components/WhatMake/Vegan/Vegan';

function App() {
  return (
    <>
    <Router>
      {/* <Navbar /> */}

      <Routes>
      <Route path="/" exact  Component={Home}/>
        <Route path="/home" exact  Component={Home}/>
        {/* מעבר למתכון */}
        <Route path="/home/recipe" Component={Recipe}/>
        <Route path="/brauniz/recipe" Component={Recipe}/>
        <Route path="/coockies/recipe" Component={Recipe}/>
        <Route path="/pai/recipe" Component={Recipe}/>
        <Route path="/shmarim/recipe" Component={Recipe}/>
        <Route path="/bchoshot/recipe" Component={Recipe}/>

        <Route path="brauniz" exact Component={Brouniz}/>
        <Route path="coockies"  exact Component={Cookies}/>
        <Route path="pai"  Component={Pai}/>
        <Route path="shmarim"   Component={Shmarim}/>
        <Route path="bchoshot" exact Component={Bchoshot}/>
        <Route path="tivoni" exact Component={Vegan}/>
      </Routes>

       {/* רישום למועדון */}
       <div className={homeCss.section3}>
        {/* <NewsLetter/> */}
      </div>

      {/* footer */}
      <section className={homeCss.section4}>
        <Footer/>
      </section>


    </Router>
  </>
  );
}

export default App;
