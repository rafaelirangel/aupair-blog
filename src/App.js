import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components';
import { NotFound, About, AuPair, Contact, Blog } from './pages';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import LogIn from './components/accounts/LogIn';
import SignUp from './components/accounts/SignUp';
import { loadUser } from './actions/auth'

function App() {
  useEffect(() => {
     store.dispatch(loadUser());
  }, [loadUser]);

  return (
    <Provider store={store}>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Layout />} >
            <Route path='/' element={<Navigate replace to='/blog' />} />
            <Route path='/about' element={<About />} />
            <Route path='/aupairProgram' element={<AuPair />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/register' element={<SignUp />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </Provider>
  );
}

export default App;