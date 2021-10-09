import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';
import CategoryCard from '../global/CategoryCard';

function CategoryContainer() {
  const categories = useSelector((state) => state.home.data.categories);

  return (
    <div className="container">
      <div
        className="tw-grid tw-my-6 tw-grid-cols-1 md:tw-grid-cols-3 xl:tw-grid-cols-4 tw-gap-x-4 tw-gap-y-6 tw-justify-center"
        style={{ placeItems: 'space-around' }}
      >
        {categories.map((ee) => (
          <CategoryCard key={ee.id} courses={ee.courses} name={ee.name} sub={ee.sub} />
        ))}
      </div>
      <div className="tw-pt-4 tw-mb-8 tw-flex tw-justify-center">
        <Link to="./categories" className="">
          <button className="tw-mx-auto button-secondary">مشاهده همه</button>
        </Link>
      </div>
    </div>
  );
}

export default CategoryContainer;
