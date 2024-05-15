import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../routes/Home';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}