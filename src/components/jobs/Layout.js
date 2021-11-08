import React from 'react';

import Search from './Search';

export default function Layout({ children }) {
  return (
    <>
      <div className="bg-light">
        <div className="" style={{ position: 'relative' }}>
          <div className="" style={{ height: 'auto', display: 'block' }}>
            <div className="jobs-page-bg-pattern" style={{ zIndex: '-2' }}>
              <div className="jobs-page-bg-fade" style={{ zIndex: '-1' }} />
              <div className="container tw-py-4" style={{ width: '100%', height: '100%' }}>
                <Search />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">{children}</div>
    </>
  );
}
