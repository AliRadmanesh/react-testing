import React from 'react';
import PropTypes from 'prop-types';

export default function CategoryCard({ name, courses, sub }) {
  return (
    <div className="tw-p-4 bg-white border-smooth" style={{ boxShadow: '8px 8px 16px #ddd' }}>
      <div className="tw-flex tw-mb-6 tw-text-right">
        {/* img here */}
        <div className="tw-flex tw-flex-col">
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
          <p
            key={ee.id}
            className="text-black font-kalameh tw-text-sm tw-font-normal 2xl:tw-text-base tw-mt-2"
          >
            {ee.name}
          </p>
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
