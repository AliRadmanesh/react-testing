import React, { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

import Footer from '../../components/global/Footer';

export default function CourseList() {
  useEffect(() => {
    toast('hello');
  }, []);

  return (
    <div>
      <div>
        <h1>Courses List</h1>
      </div>
      <Footer />
    </div>
  );
}
