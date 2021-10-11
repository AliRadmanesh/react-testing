import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import JobCard from '../global/JobCard';

export default function JobsContainer() {
  const user_recommended_jobs = useSelector((state) => state.home.data.user_recommended_jobs);

  return (
    <div className="container tw-my-8 lg:tw-my-12">
      <h2 className="title-secondary text-blue tw-text-center tw-mb-6">
        جدیدترین فرصت های شغلی برای شما
      </h2>
      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4">
        {user_recommended_jobs.map((job) => (
          <JobCard key={job.id} props={job} />
        ))}
      </div>
      <Link to="./" className="button-secondary tw-mx-auto">
        مشاهده همه
      </Link>
    </div>
  );
}
