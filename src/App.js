import {Route, Switch, BrowserRouter} from 'react-router-dom';

import {Navigation} from "./components/Navigation/Navigation";
import {Insurance} from "./modules/Insurance/Insurance";
import {AboutUs} from "./modules/AboutUs/AboutUs";
import {ClaimReport} from "./modules/ClaimReport/ClaimReport";
import {Contact} from "./modules/Contact/Contact";
import {Footer} from "./components/Footer/Footer";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation/>
        <Switch>
          <Route exact path='/' component={Insurance}/>
          <Route exact path='/about-us' component={AboutUs}/>
          <Route exact path='/claim-report' component={ClaimReport}/>
          <Route exact path='/contact' component={Contact}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
