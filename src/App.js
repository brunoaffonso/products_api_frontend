import Topbar from './components/Topbar/Topbar';
import Content from './components/Content/Content';
import { Route, Router, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './utils/PrivateRoute';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <AuthProvider>
          <Topbar></Topbar>
          <Routes>
            <PrivateRoute component={Content} path="/protected" exact />
            <Route component={Login} path="/login" />
            <Route component={Register} path="/register" />
            <Route component={Home} path="/" />
          </Routes>
        </AuthProvider>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
