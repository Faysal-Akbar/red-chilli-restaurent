import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import BreakfastDetails from './pages/Home/Breakfasts/BreakfastDetails';
import Dinner from './pages/Home/Dinner/Dinner';
import Header from './pages/Home/Header/Header';
import Home from './pages/Home/Home/Home';
import Lunch from './pages/Home/Lunch/Lunch';
import Login from './pages/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Header/>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/breakfast/:breakfastId">
            <BreakfastDetails></BreakfastDetails>
          </PrivateRoute>
          <Route exact path="/lunch/:lunchId">
            <Lunch></Lunch>
          </Route>
          <Route exact path="/dinner">
            <Dinner></Dinner>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
