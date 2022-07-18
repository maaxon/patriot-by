import './App.css';
import 'normalize.css'
import {Router,Route} from 'wouter'
import Main from "./pages/main/main";
import Cards from "./pages/Cards/Cards";
import Page from './pages/Page/Page'
import Card from "./components/card/card";

function App() {
  return (
      <Router>
          <Route path="/" component={Main} />
          <Route path="/page/:id">
              {params => <Page id={params.id} />}
          </Route>
          <Route path="/cards/:active">
              {params => <Cards active={params.active} />}
          </Route>
      </Router>
  );
}

export default App;
