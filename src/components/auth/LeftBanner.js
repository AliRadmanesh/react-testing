import React from 'react';

import studentIcon from '../../assets/icons/Student.svg';
import slideIcon from '../../assets/icons/Slide.svg';
import schoolIcon from '../../assets/icons/School.svg';

export default function LeftBanner({ stage }) {
  console.log(1);

  return (
    <div className="auth-banner  tw-hidden lg:tw-grid tw-items-center tw-justify-items-end">
      <div className="tw-w-5/6  tw-bg-red-500">
        <p className="tw-font-bold tw-text-center font-kalameh-num text-light tw-text-3xl 2xl:tw-text-5xl tw-mb-8 2xl:tw-mb-12">
          دسترسی به جدید ترین دوره های آموزشی و فرصت های شغلی مخصوص شما
        </p>
        <div className="tw-relative tw-w-1/2 tw-mx-auto" style={{ perspective: '1000px' }}>
          <UserCard stage={stage} />
        </div>
      </div>
    </div>
  );
}

const UserCard = ({ stage }) => {
  console.log(1);
  return (
    <div
      className="tw-inline-block tw-w-auto auth-banner-transformation tw-absolute"
      style={{
        transform:
          (stage === 1 && 'skew(-10deg, 0) rotateY(-20deg) rotateX(10deg)') ||
          (stage === 2 && 'skew(520deg, 0)'),
        top: (stage === 1 && '50%') || (stage === 2 && '-20%'),
        left: (stage === 1 && '50%') || (stage === 2 && '0'),
        transformOrigin: stage === 1 && 'top center',
      }}
    >
      <div className="bg-light tw-rounded-xl tw-py-4 tw-px-4 lg:tw-px-6 tw-mx-2 md:tw-py-4 tw-w-auto tw-flex tw-text-right tw-items-center">
        <img className="tw-opacity-40 avatar" src={studentIcon} alt="" />
        <div className="tw-flex tw-flex-col tw-mr-6">
          <p className="text-blue home-counter tw-font-extrabold 2xl:tw-font-black font-kalameh-num">
            1909
          </p>
          <p className="text-black font-iranyekan-num tw-text-sm 2xl:tw-text tw-font-medium 2xl:tw-text-xl">
            دانشجو
          </p>
        </div>
      </div>
    </div>
  );
};

const AcademyCard = ({ stage }) => {
  console.log(1);
  return (
    <div
      className="tw-inline-block tw-w-auto auth-banner-transformation"
      style={{
        transform:
          (stage === 1 && 'skew(-10deg, 0) rotateY(-20deg) rotateX(10deg)') ||
          (stage === 2 && 'skew(0)'),
        top: stage === 1 && '50%',
        transformOrigin: stage === 1 && 'top center',
      }}
    >
      <div className="bg-light tw-rounded-xl tw-py-4 tw-px-4 lg:tw-px-6 tw-mx-2 md:tw-py-4 tw-w-auto tw-flex tw-text-right tw-items-center">
        <img className="tw-opacity-40 avatar" src={schoolIcon} alt="" />
        <div className="tw-flex tw-flex-col tw-mr-6">
          <p className="text-blue home-counter tw-font-extrabold 2xl:tw-font-black font-kalameh-num">
            200
          </p>
          <p className="text-black font-iranyekan-num tw-text-sm 2xl:tw-text tw-font-medium 2xl:tw-text-xl">
            آموزشگاه
          </p>
        </div>
      </div>
    </div>
  );
};

const CourseCard = ({ stage }) => {
  console.log(1);
  return (
    <div
      className="tw-inline-block tw-w-auto auth-banner-transformation"
      style={{
        transform:
          (stage === 1 && 'skew(-10deg, 0) rotateY(-20deg) rotateX(10deg)') ||
          (stage === 2 && 'skew(0)'),
        top: stage === 1 && '50%',
        transformOrigin: stage === 1 && 'top center',
      }}
    >
      <div className="bg-light tw-rounded-xl tw-py-4 tw-px-4 lg:tw-px-6 tw-mx-2 md:tw-py-4 tw-w-auto tw-flex tw-text-right tw-items-center">
        <img className="tw-opacity-40 avatar" src={slideIcon} alt="" />
        <div className="tw-flex tw-flex-col tw-mr-6">
          <p className="text-blue home-counter tw-font-extrabold 2xl:tw-font-black font-kalameh-num">
            1500
          </p>
          <p className="text-black font-iranyekan-num tw-text-sm 2xl:tw-text tw-font-medium 2xl:tw-text-xl">
            آموزش
          </p>
        </div>
      </div>
    </div>
  );
};
