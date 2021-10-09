import React from 'react';
import { Toaster } from 'react-hot-toast';
import AppRouter from './routes/Router';

import '../index.css';
import '../assets/fonts/fonts.css';
import '../sass/main.scss';

function App() {
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
