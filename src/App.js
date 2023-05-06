import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import { NotFound, Home, About, AuPair, Contact } from './pages';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/aupairProgram' element={<AuPair />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} /> 
        </Route>
      </Routes>
    </div>
  );
}

export default App;
