import React from 'react';
import PropTypes from 'prop-types';
import PageHeader from '../../components/global/PageHeader';
import Footer from '../../components/global/Footer';

export default function Layout({ children, title, text = '', img = '' }) {
  return (
    <div className="bg-white">
      <PageHeader title={title} text={text} img={img} />
      <div className="tw-py-6 lg:tw-py-16 bg-light">{children}</div>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
};
