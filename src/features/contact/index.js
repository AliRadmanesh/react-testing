import React from 'react';
import Layout from '../../common/Layout/pacific';
import Form from '../../components/contact/Form';
import ContactMap from '../../components/contact/Map';

export default function Contact() {
  return (
    <Layout title="تماس با ما" text="با متنوع ترین راه ها با شما در ارتباط هستیم">
      <div className="container tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-4">
        <ContactMap />
        <Form />
      </div>
    </Layout>
  );
}
