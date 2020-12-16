
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LandingPage, DetailKegiatan, NotFound404 } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/detail-kegiatan" exact component={DetailKegiatan} />
        <Route path="/" exact component={LandingPage} />
        <Route path="*" exact component={NotFound404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
