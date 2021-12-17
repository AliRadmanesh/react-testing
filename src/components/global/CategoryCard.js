import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function CategoryCard({ name, courses, sub, image }) {
  return (
    <div className="tw-p-4 bg-white border-smooth" style={{ boxShadow: '0 8px 40px #ddd' }}>
      <div className="tw-flex tw-items-center tw-mb-6 tw-text-right tw-mt-2 tw-mr-2">
        <img src={image} alt="" className="tw-w-12" />
        <div className="tw-flex tw-flex-col tw-mr-4">
          <p className="text-black font-iranyekan-num tw-text-base tw-font-medium 2xl:tw-text-xl">
            {name}
          </p>
          <p className="text-gray font-iranyekan-num tw-text-xs tw-font-normal 2xl:tw-text-sm">
            {courses} دوره
          </p>
        </div>
      </div>
      <div className="">
        {sub.map((ee) => (
          <Link to={`/courses/?category[0]=${ee.id}&sort=1&is_free=0&page=1`} key={ee.id}>
            <p className="text-black font-kalameh tw-text-sm tw-font-normal 2xl:tw-text-base tw-mt-2">
              {ee.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

CategoryCard.propTypes = {
  name: PropTypes.string.isRequired,
  courses: PropTypes.number.isRequired,
  sub: PropTypes.array.isRequired,
};
