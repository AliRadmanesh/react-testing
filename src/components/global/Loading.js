import React from 'react';

import loading from '../../assets/gifs/loading.gif';

export default function Loading() {
  return (
    <div
      className="tw-grid tw-place-items-center tw-w-full tw-h-full"
      style={{ minHeight: '400px', minWidth: '100%' }}
    >
      <img src={loading} alt="loading..." />
    </div>
  );
}
