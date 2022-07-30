import Topbar from './components/Topbar/Topbar';
import Content from './components/Content/Content';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
// import PrivateRoute from './utils/PrivateRoute';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import RequireAuth from './utils/RequireAuth';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AuthProvider>
          <Topbar></Topbar>
          <Home />
          <Routes>
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Content />
                </RequireAuth>
              }
            />
            {/* <PrivateRoute component={Content} path="/protected" exact /> */}
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            {/* <Route component={Home} path="/" /> */}
            {/* <Route component={Content} path="/" /> */}
          </Routes>
          <Footer></Footer>
        </AuthProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
