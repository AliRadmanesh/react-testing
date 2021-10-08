import React, { useState, useEffect } from 'react';
import MenuMobile from '../../components/global/MenuMobile';
import MenuDesktop from '../../components/home/HomeMenuDesktop';
import PageHeader from '../../components/global/PageHeader';
import Footer from '../../components/global/Footer';

import CategoryCard from '../../components/global/CategoryCard';

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Send request and set categories
  }, []);

  return (
    <div className="bg-light">
      <MenuMobile />
      <PageHeader title="دسته‌بندی‌ها" text="دسترسی به همه دسته‌بندی‌های کارساز" />
      <div className="tw-grid tw-my-6 tw-grid-cols-1 md:tw-grid-cols-3 xl:tw-grid-cols-4 tw-gap-x-4 tw-gap-y-6 tw-justify-center">
        {
          // map through categories in here.
        }
      </div>
    </div>
  );
}
