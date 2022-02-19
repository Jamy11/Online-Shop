import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/public/Home';
import Login from './pages/public/Login';
import Admin from './components/layouts/Admin'
// import Auth from './components/layouts/Auth'



import ContactUs from './pages/public/ContactUs';
import Register from './pages/public/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          {/* <Route exact path='/dashboard' component={MainDashboard} /> */}
          <Route path="/admin" component={Admin} />
          {/* <Route path="/auth" component={Auth} /> */}
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/contactUs' component={ContactUs} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
