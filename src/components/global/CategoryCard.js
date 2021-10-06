import React from 'react';
import PropTypes from 'prop-types';

export default function CategoryCard({ name, courses, sub }) {
  return (
    <div className="tw-p-4 bg-white border-smooth" style={{ boxShadow: '8px 8px 16px #ddd' }}>
      <div className="tw-flex tw-mb-6">
        <div className="tw-flex tw-flex-col">
          <p className="text-primary">{name}</p>
          <caption className="text-gray">{courses} دوره</caption>
        </div>
      </div>
      <div className="">
        {sub.map((ee) => (
          <p key={ee.id} className="text-secondary tw-mt-2">
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
