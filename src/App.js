// TODO sækja og setja upp react router


import { Route, Switch } from "react-router";
import { BrowserRouter} from "react-router-dom"

import { Index } from './pages/Index';
import { NewsPage } from './pages/News';
import { NotFound } from './pages/NotFound';


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
