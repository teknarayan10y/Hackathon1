import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Auth from './pages/Auth/Auth';
import './index.css'; // Global syles

function App() {
  return (
    <>
      <Toaster position="bottom-right" richColors />
      <Router>
        <Routes>
          <Route path="/" element={<Auth />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
