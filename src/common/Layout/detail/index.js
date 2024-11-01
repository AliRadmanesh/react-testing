import React from 'react';

import '../layout.css';

import DetailPageHeader from '../../../components/global/DetailPageHeader';
import Footer from '../../../components/global/Footer';

export default function Layout({ children }) {
  return (
    <div className="bg-light">
      <DetailPageHeader />
      <div style={{ position: 'relative', paddingBottom: '1rem' }}>
        <div className="detail-page-bg-pattern">
          <div className="detail-page-bg-fade" />
        </div>
        <div className="detail-page-content">{children}</div>
      </div>
      {/* <div className="detail-page-bg-fade" /> */}
      <Footer />
    </div>
  );
}
