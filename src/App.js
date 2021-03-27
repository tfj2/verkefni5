// TODO sækja og setja upp react router

import { Layout } from './components/layout/Layout';
import PropTypes from 'prop-types';
import { NewsList } from './components/news-list/NewsList';
import { Route, Switch, Router } from "react-router";
import { BrowserRouter, useParams } from "react-router-dom"

import { Index } from './pages/Index';
import { NewsPage } from './pages/News';
import { NotFound } from './pages/NotFound';

const types = [
  { type: 'innlent'},
  { type: 'erlent'},
  { type: 'ithrottir'},
  { type: 'menning'},
  { type: 'allar'},
];

export default function App() {
  let routes = (

    <BrowserRouter>
    <div>
        <h1>Rúv Fréttir</h1>
          <Switch>
           <Route exact path="/" component = {Index}></Route>
           <Route path="/:types" children={<NewsPage />}></Route>
           <Route component={NotFound} />
          </Switch>
          <p>Fréttir frá</p>
          <a href= "https://ruv.is" rel="noreferrer">
          RUV
       </a>
      </div>
    </BrowserRouter>
  );
  return routes;
}
