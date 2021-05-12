import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FooterComponent from "../components/layout/footer";
import HeaderComponent from "../components/layout/header";
import HomePage from "./HomePage"

import styled from 'styled-components';
import { Container } from "react-bootstrap";
import AboutPage from "./AboutPage";

const MainContent = styled.div`
  
`

export default function AppRouter() {
  return (
    <BrowserRouter>
      <div>

        <HeaderComponent/>
        <MainContent>
          <Container className="mt-3">

          <Switch>
            <Route path="/about" component={AboutPage} />
            <Route path="/" component={HomePage} />
          </Switch>

          </Container>

        </MainContent>
        <FooterComponent/>

      </div>
    </BrowserRouter>
  );
}