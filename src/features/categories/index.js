import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import CategoryCard from '../../components/global/CategoryCard';
import Layout from '../../common/Layout/pacific';

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

      if (res.data.code === 200) {
        setCategories(res.data.data.categories);
      }
    } catch (error) {
      toast.error(error);
    }
  }

  return (
    <div className="bg-light">
      <Layout title="دسته‌بندی‌ها" text="دسترسی به همه دسته‌بندی‌های کارساز">
        {categories.length !== 0 ? (
          <div className="container tw-grid tw-my-6 tw-grid-cols-1 md:tw-grid-cols-3 xl:tw-grid-cols-4 tw-gap-x-4 tw-gap-y-6 tw-justify-center">
            {categories.map((ee) => (
              <CategoryCard
                key={ee.id}
                courses={ee.courses}
                name={ee.name}
                sub={ee.sub}
                image={ee.image}
              />
            ))}
          </div>
        ) : (
          <div className="container">
            <p className="tw-font-yekan tw-font-bold">موردی برای نمایش وجود ندارد :(</p>
          </div>
        )}
      </Layout>
    </div>
  );
}
