import React from 'react';
import { useSelector } from 'react-redux';
import JobCard from '../global/JobCard';

export default function RelatedJobsContainer() {
  const { recommended_jobs } = useSelector((state) => state.job.data);
  return (
    <div className="tw-py-4 tw-my-16 2xl:tw-py-16">
      <p className="tw-text-center font-kalameh-num tw-text-xl tw-font-extrabold 2xl:tw-text-3xl 2xl:tw-font-black text-blue tw-mb-4 2xl:tw-mb-8">
        فرصت های شغلی مرتبط
      </p>
      <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-4">
        {recommended_jobs.map((job) => (
          <JobCard key={job.id} props={job} />
        ))}
      </div>
    </div>
  );
}
