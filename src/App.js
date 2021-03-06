import "./App.css";
import Home from './components/Home/home'
import Landindpage from './components/landingPage/landingpage'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Contact from "./components/Contact/contact";


function App() {
 

  return (
    <>
    
    <Router>
      <Switch>
      <Route exact path="/">  
                  <Landindpage/>
      </Route>
      <Route exact path="/home">  
                 <Home/>
      </Route>
      <Route exact path="/contact">  
          <Contact/>
      </Route>
      <Route>
          <h1> ERROR 404 NOT FOUND </h1>
      </Route>
      </Switch>
    </Router>
    </>
    

    
  );
}

export default App;
