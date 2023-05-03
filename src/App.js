import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import { NotFound } from './pages';

function App() {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='*' element={<NotFound />} />
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
