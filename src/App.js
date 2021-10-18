import {Route, Switch, BrowserRouter} from 'react-router-dom';
import styled from "styled-components";

import {Navigation} from "./components/Navigation/Navigation";
import {Insurance} from "./modules/Insurance/Insurance";
import {AboutUs} from "./modules/AboutUs/AboutUs";
import {ClaimReport} from "./modules/ClaimReport/ClaimReport";
import {Contact} from "./modules/Contact/Contact";
import {Footer} from "./components/Footer/Footer";
import {NotFound} from "./modules/NotFound/NotFound";

const Container = styled.div`
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Navigation/>
        <Switch>
          <Route exact path='/' component={Insurance}/>
          <Route exact path='/about-us' component={AboutUs}/>
          <Route exact path='/claim-report' component={ClaimReport}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/not-found' component={NotFound}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </Container>
  );
}

export default App;
