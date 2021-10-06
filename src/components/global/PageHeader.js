import React from 'react';
import PropTypes from 'prop-types';

export default function PageHeader({ title, text = '', img = '' }) {
  return (
    <div className="tw-w-full tw-h-auto page-header">
      <div className="container tw-flex tw-items-center tw-py-12 lg:tw-py-16 page-header-content tw-w-auto tw-pl-6">
        {img && <img src={img} alt="" />}
        <div>
          <p className="tw-font-extrabold page-header-title lg:tw-font-black font-kalameh text-white">
            {title}
          </p>
          <p
            className="tw-text-xs lg:tw-text-sm tw-font-regular text-light tw-opacity-50"
            style={{
              // visibility: text !== '' ? 'visible' : 'hidden',
              display: text !== '' ? 'initial' : 'none',
              marginTop: text !== '' ? '1.5rem' : '0',
            }}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
