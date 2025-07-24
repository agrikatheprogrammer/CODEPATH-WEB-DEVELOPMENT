import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import CharacterDetail from './CharacterDetail';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
      </Routes>
    </Router>
  );
}
