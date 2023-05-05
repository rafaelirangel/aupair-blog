import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import { NotFound, Home, About, Agencies, Contact } from './pages';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/agencies' element={<Agencies />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} /> 
        </Route>
      </Routes>
    </div>
  );
}

export default App;
