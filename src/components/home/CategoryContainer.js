import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';
import CategoryCard from '../global/CategoryCard';

function CategoryContainer() {
  const categories = useSelector((state) => state.home.data.categories);

  return (
    <div className="container tw-mt-8 tw-pt-8 tw-mb-16">
      <p className="text-blue tw-text-center tw-mb-8 2xl:tw-mb-12 tw-font-extrabold 2xl:tw-font-black font-kalameh home-section-title">
        دسته‌بندی‌های کارساز
      </p>
      <div
        className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 xl:tw-grid-cols-4 tw-gap-x-4 tw-gap-y-8 tw-justify-center"
        style={{ placeItems: 'space-around' }}
      >
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
      {/* <div className="tw-pt-4 tw-mt-8 tw-mb-8 tw-flex tw-justify-center">
        <Link to="/categories">
          <button className="tw-mx-auto button-secondary">مشاهده همه</button>
        </Link>
      </div> */}
    </div>
  );
}

export default CategoryContainer;
