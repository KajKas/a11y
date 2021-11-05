import {Route, Switch, HashRouter} from 'react-router-dom';
import styled from "styled-components";

import {Navigation} from "./components/Navigation/Navigation";
import {Insurance} from "./modules/Insurance/Insurance";
import {ClaimReport} from "./modules/ClaimReport/ClaimReport";
import {Footer} from "./components/Footer/Footer";
import {NotFound} from "./modules/NotFound/NotFound";

const Container = styled.div`
  height: 100vh;
`;

function App() {

  return (
    <Container>
      <HashRouter>
        <Navigation/>
        <Switch>
          <Route exact path='/' component={Insurance}/>
          <Route exact path='/claim-report' component={ClaimReport}/>
          <Route component={NotFound}/>
        </Switch>
        <Footer/>
      </HashRouter>
    </Container>
  );
}

export default App;
