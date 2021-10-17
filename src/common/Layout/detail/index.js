import React from 'react';
import PropTypes from 'prop-types';

import '../layout.css';

import DetailPageHeader from '../../../components/global/DetailPageHeader';
import Footer from '../../../components/global/Footer';

export default function Layout({ children, title, text = '', img = '' }) {
  return (
    <div className="bg-white">
      <DetailPageHeader title={title} text={text} img={img} />
      <div className="layout-content bg-light">{children}</div>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
};
