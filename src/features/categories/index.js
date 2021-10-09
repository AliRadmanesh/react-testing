import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import PageHeader from '../../components/global/PageHeader';
import CategoryCard from '../../components/global/CategoryCard';

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const res = await axios.get(
        'https://develop.karsazapp.ir/api/v1/web/content/courses/all-categories',
      );

      if (res.code === '200') {
        setCategories(res.data.categories);
      }
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
          categories.length !== 0 ? (
            categories.map((ee) => (
              <CategoryCard key={ee.id} courses={ee.courses} name={ee.name} sub={ee.sub} />
            ))
          ) : (
            <div className="container">
              <p>موردی برای نمایش وجود ندارد.</p>
            </div>
          )
        }
      </div>
    </div>
  );
}
