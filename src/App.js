import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Calc from './routes/Calc';
import Quotes from './routes/Quotes';
import Layout from './components/Layout';
import NotMatch from './routes/NotMatch';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calc />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
