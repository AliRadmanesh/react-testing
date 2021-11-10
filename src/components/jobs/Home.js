import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import JobCard from '../global/JobCard';

export default function Home() {
  const { recommended, recent } = useSelector((state) => state.jobs);

  return (
    <div className="bg-light container">
      {recommended.length !== 0 && (
        <div className="tw-py-6 2xl:tw-py-16">
          <p className="text-blue font-kalameh-num tw-text-center tw-mb-8 2xl:tw-mb-16 tw-text-2xl tw-font-extrabold 2xl:tw-text-4xl 2xl:tw-font-black tw-max-w-4/5">
            جدیدترین فرصت های شغلی برای شما
          </p>

          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-4">
            {recommended.map((job) => (
              <JobCard key={job.id} props={job} />
            ))}
          </div>
          <div className="tw-flex tw-mt-4 tw-justify-center">
            <Link to="./" className="button-secondary tw-mt-6 lg:tw-mt-10">
              مشاهده همه
            </Link>
          </div>
        </div>
      )}
      {recent.length !== 0 && (
        <div className="tw-py-6 2xl:tw-py-16">
          <p className="text-blue font-kalameh-num tw-text-center tw-mb-8 2xl:tw-mb-16 tw-text-2xl tw-font-extrabold 2xl:tw-text-4xl 2xl:tw-font-black tw-max-w-4/5">
            آخرین فرصت‌های شغلی
          </p>

          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-4">
            {recent.map((job) => (
              <JobCard key={job.id} props={job} />
            ))}
          </div>
          <div className="tw-flex tw-mt-4 tw-justify-center">
            <Link to="./" className="button-secondary tw-mt-6 lg:tw-mt-10">
              مشاهده همه
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
