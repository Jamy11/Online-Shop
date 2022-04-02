import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/public/Home';
import Login from './pages/public/Login';
import CommonDashboard from './pages/CommonDashboard/CommonDashboard'
import ContactUs from './pages/public/ContactUs';
import Register from './pages/public/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { QueryClient, QueryClientProvider } from 'react-query'


const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Switch>
              <Route exact path='/' component={Home} />
              <PrivateRoute path='/dashboard'>
                <CommonDashboard />
              </PrivateRoute>
              {/* <Route exact path='/dashboard' component={Dashboard} /> */}
              {/* <Route path="/admin" component={Admin} /> */}
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/contactUs' component={ContactUs} />
              <Route exact path='/shop-no/:id' component={ContactUs} />
            </Switch>
          </Router>
        </QueryClientProvider>
      </AuthProvider>

    </div>
  );
}

export default App;
