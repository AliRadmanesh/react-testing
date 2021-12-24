import React from 'react';
import { Link } from 'react-router-dom';

export default function StikcyBox({ data }) {
  const {
    title,
    company: { name_fa, name_en, avatar },
  } = data;
  return (
    <div
      className="font-kalameh-num tw-hidden lg:tw-flex tw-flex-col tw-p-4 tw-rounded-xl tw-shadow-xl bg-white tw-sticky"
      style={{ top: '7rem' }}
    >
      <div className="tw-flex tw-flex-row tw-mb-10 tw-items-stretch">
        <img src={avatar} alt="" className="tw-rounded-xl detail-avatar tw-ml-4" />
        <div className="tw-flex tw-flex-col tw-justify-between tw-py-4">
          <p className="tw-text-sm tw-font-medium 2xl:tw-text-xl 2xl:tw-font-semibold text-dark">
            {title}
          </p>
          <p className="tw-text-xs tw-font-normal 2xl:tw-text-base text-blue">
            {name_fa} - {name_en}
          </p>
        </div>
      </div>
      <Link
        to={{ pathname: data.ref_url }}
        target="_blank"
        className="button-primary tw-py-4 tw-text-center tw-mb-8"
      >
        مشاهده و ارسال رزومه
      </Link>
      <p className="tw-text-xs 2xl:tw-text-base tw-font-normal text-gray tw-text-justify font-kalameh-num">
        برای ارسال رزومه به سایت مربوط آگهی ارجاع داده خواهید شد.
        <br />
        لطفا اطلاعات فرصت شغلی را کامل مطالعه کرده و بعد از مطالعه کامل شرایط و شرح شغل و وظایف
        .نسبت به ارسال رزومه اقدام کنید
      </p>
    </div>
  );
}
