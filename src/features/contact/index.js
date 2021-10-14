import React, { useState } from 'react';
import Layout from '../../common/Layout';
import Form from '../../components/contact/Form';

export default function Contact() {
  return (
    <Layout title="تماس با ما" text="با متنوع ترین راه ها با شما در ارتباط هستیم">
      <div className="container tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-x-4">
        <div>Map</div>
        <Form />
      </div>
    </Layout>
  );
}
