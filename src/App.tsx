/* eslint-disable react/react-in-jsx-scope */
import './App.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './features/Home';
import NotFound from './features/NotFound';

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
