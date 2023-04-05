import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Index from './Sites/Index';
import Kasvi from './Sites/Kasvi';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Index />} />

            <Route path='kasvi/:id' element={<Kasvi />} />
            <Route path='*' element={<h1>404 - Ei löydy</h1>} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
