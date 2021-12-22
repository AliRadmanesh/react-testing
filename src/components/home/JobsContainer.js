import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import JobCard from '../global/JobCard';

export default function JobsContainer() {
  const user_recommended_jobs = useSelector((state) => state.home.data.user_recommended_jobs);

  return (
    <div className="container tw-my-16 lg:tw-my-12 tw-py-16 ">
      <p className="text-blue tw-text-center tw-mb-8 2xl:tw-mb-12 tw-font-extrabold 2xl:tw-font-black tw-max-w-sm tw-mx-auto md:tw-max-w-lg font-kalameh home-section-title">
        جدیدترین فرصت های شغلی برای شما
      </p>
      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-4">
        {user_recommended_jobs.map((job) => (
          <JobCard key={job.id} props={job} />
        ))}
      </div>
      {/* <div className="tw-flex tw-mt-4 tw-justify-center">
        <Link to="/" className="button-secondary">
          مشاهده همه
        </Link>
      </div> */}
    </div>
  );
}
