import './App.css';
import './common/common.css';
import './common/carousel.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import StartupComponent from "./Components/StartupComponent";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={StartupComponent}/>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
