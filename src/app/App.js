import React, { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import AppRouter from './routes/Router';

import '../index.css';
import '../assets/fonts/fonts.css';
import '../sass/main.scss';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [new URL(window.location).pathname]);

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
