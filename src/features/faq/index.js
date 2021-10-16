import React from 'react';

import MenuMobile from '../../components/global/MenuMobile';
import MenuDesktop from '../../components/global/MenuDesktop';
import PageHeaderPacific from '../../components/global/PageHeaderPacific';
import Footer from '../../components/global/Footer';

import FAQItem from '../../components/faq/FAQItem';

import qa from '../../assets/illustrations/Q&A.svg';

const db = require('./db.json');

export default function FAQ() {
  return (
    <div className="bg-light">
      {/* <MenuMobile /> */}
      {/* <MenuDesktop /> */}
      <PageHeaderPacific
        title="سئوالات متداول"
        text="شاید سئوال شما هم بین سئوالات متداول کارساز باشد"
      />
      <div
        id="faq"
        className="container bg-light tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-x-8 xl:tw-gap-x-16 tw-py-4 lg:tw-py-6 faq"
      >
        <div className="tw-pb-6 tw-mb-4 lg:tw-pb-16 bg-light">
          {db.map((item) => (
            <FAQItem key={item.id} ask={item.ask} ans={item.ans} />
          ))}
        </div>
        <div className="tw-px-0 lg:pr-4 xl:tw-pb-12">
          <img src={qa} alt="" className="tw-w-full" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
