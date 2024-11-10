import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-900 text-white relative pb-24">
        <div className="h-full w-full">
          <AppRoutes />
        </div>
        <Navigation />
      </div>
    </BrowserRouter>
  );
}

export default App;