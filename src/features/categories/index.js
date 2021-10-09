import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import PageHeader from '../../components/global/PageHeader';
import CategoryCard from '../../components/global/CategoryCard';

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // getData();
    toast('Hello');
  }, []);

  async function getData() {
    try {
      const res = axios.get(
        'https://develop.karsazapp.ir/api/v1/web/content/courses/all-categories',
      );

      toast.success('Success');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="bg-light">
      <PageHeader title="دسته‌بندی‌ها" text="دسترسی به همه دسته‌بندی‌های کارساز" />
      <div className="tw-grid tw-my-6 tw-grid-cols-1 md:tw-grid-cols-3 xl:tw-grid-cols-4 tw-gap-x-4 tw-gap-y-6 tw-justify-center">
        {
          // map through categories in here.
        }
      </div>
    </div>
  );
}
