import {useEffect} from "react";
import {Route, Switch, BrowserRouter, useHistory, HashRouter} from 'react-router-dom';
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
  // const history = useHistory();
  // useEffect(() => {
  //   const unlisten = history.listen(() => {
  //     window.scrollTo(0, 0);
  //   });
  //   return () => {
  //     unlisten();
  //   }
  // }, [history]);

  return (
    <Container>
      <HashRouter>
        <Navigation/>
        <Switch>
          <Route exact path='/a11y/' component={Insurance}/>
          <Route exact path='/a11y/about-us' component={AboutUs}/>
          <Route exact path='/a11y/claim-report' component={ClaimReport}/>
          <Route exact path='/a11y/contact' component={Contact}/>
          <Route exact path='/a11y/not-found' component={NotFound}/>
        </Switch>
        <Footer/>
      </HashRouter>
    </Container>
  );
}

export default App;
