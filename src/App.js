import './App.scss';
import Header from './components/Header'
import {BrowserRouter as  Router , Switch , Route } from 'react-router-dom'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Dashboard from './pages/Dashboard'
import Category from './pages/categories/category'


function App() {
  return (
      <Router>
        <Header />
        <Category/>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
  );
}

export default App;
