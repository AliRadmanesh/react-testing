import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import axios from '../../app/axios';
import studentIcon from '../../assets/icons/Student.svg';
import slideIcon from '../../assets/icons/Slide.svg';
import schoolIcon from '../../assets/icons/School.svg';
import authConnect from '../../assets/illustrations/auth-connect.svg';
import authPlus from '../../assets/illustrations/auth-plus.svg';

export default function LeftBanner({ stage }) {
  const [data, setData] = useState({ users: null, academies: null, courses: null });

  useEffect(() => {
    axios
      .get('/api/v1/web/service/login-stat')
      .then((res) => {
        if (res.status === 200) {
          setData(res.data.data.stat);
        }
      })
      .catch(() => toast.error('خطا در برقراری ارتباط برای دریافت اطلاعات'));
  }, []);

  if (stage === 5)
    return (
      <div className="auth-banner tw-hidden lg:tw-grid tw-place-items-center">
        <div className="tw-w-5/6 xl:tw-w-4/5 tw-relative">
          <p className="tw-font-bold tw-text-center font-kalameh-num text-light tw-text-3xl 2xl:tw-text-5xl tw-mb-8 2xl:tw-mb-12">
            به جمع {data.users} دانشجو کارساز بپیوندید
          </p>
          <div
            className="tw-relative tw-w-2/3 2xl:tw-w-1/2 tw-mx-auto"
            style={{
              height: '200px',
              perspective: '1000px',
            }}
          >
            <UserCard stage={stage} users={data.users} />
            <div
              className="tw-flex tw-flex-col tw-relative tw-items-center tw-h-full"
              style={{ width: '200px', right: '50%', transform: 'translateX(50%)' }}
            >
              <img src={authConnect} alt="" className="tw-relative tw-top-8" />
              <img src={authPlus} alt="" className="tw-z-10 tw-absolute tw-top-20 tw-right-14" />
            </div>
            <YouCard />
          </div>
        </div>
      </div>
    );
  return (
    <div className="auth-banner tw-hidden lg:tw-grid tw-place-items-center">
      <div
        className="tw-w-5/6 xl:tw-w-4/5 tw-relative"
        style={{
          top:
            (stage === 3 && window.innerWidth < 1536 && '-6rem') ||
            (stage === 3 && window.innerWidth >= 1536 && '-10rem') ||
            (stage === 1 && window.innerWidth < 1536 && '-8rem') ||
            (stage === 1 && window.innerWidth >= 1536 && '-10rem') ||
            (stage === 2 && window.innerWidth < 1536 && '-6rem') ||
            (stage === 2 && window.innerWidth >= 1536 && '-8rem'),
        }}
      >
        <p className="tw-font-bold tw-text-center font-kalameh-num text-light tw-text-3xl 2xl:tw-text-5xl tw-mb-8 2xl:tw-mb-12">
          دسترسی به جدید ترین دوره های آموزشی و فرصت های شغلی مخصوص شما
        </p>
        <div
          className="tw-relative tw-w-2/3 2xl:tw-w-1/2 tw-mx-auto tw-h-auto "
          style={{ perspective: '1000px' }}
        >
          <CourseCard stage={stage} courses={data.courses} />
          <UserCard stage={stage} users={data.users} />
          <AcademyCard stage={stage} academies={data.academies} />
        </div>
      </div>
    </div>
  );
}

const UserCard = ({ stage, users }) => (
  <div
    className="tw-inline-block tw-shadow-lg tw-w-auto auth-banner-transformation tw-absolute tw-z-10"
    style={{
      transform:
        (stage === 1 && 'skew(-10deg, 0) rotateY(-10deg) rotateX(10deg)') ||
        (stage === 5 && 'skew(10deg, 0) rotateY(10deg) rotateX(-10deg)') ||
        (stage === 2 && 'rotateX(40deg)') ||
        (stage === 3 && 'skew(12deg, 0) rotateX(0deg) rotateY(40deg) rotateZ(4deg)') ||
        (stage === 4 && 'skew(10deg, 0) rotateY(-10deg) rotateX(10deg)'),
      top:
        (stage === 1 && '6rem') ||
        (stage === 2 && '0') ||
        (stage === 3 && '5rem') ||
        (stage === 4 && '0'),
      left:
        (stage === 1 && 'unset') ||
        (stage === 2 && '7rem') ||
        (stage === 3 && '-1rem') ||
        (stage === 4 && '0') ||
        (stage === 5 && '0'),
      right: (stage === 1 && '0') || (stage === 2 && 'unset'),
      bottom: stage === 5 && '0',

      // transformOrigin: stage === 1 && 'top center',
    }}
  >
    <div className="bg-light tw-rounded-xl tw-p-4 2xl:tw-p-6 tw-w-auto tw-flex tw-text-right tw-items-center">
      <img className="tw-opacity-20" src={studentIcon} alt="" />
      <div className="tw-flex tw-flex-col tw-mr-10">
        <p className="text-blue home-counter tw-font-extrabold font-kalameh-num">{users}</p>
        <p className="text-black font-iranyekan-num tw-text-sm tw-font-medium ">دانشجو</p>
      </div>
    </div>
  </div>
);

const AcademyCard = ({ stage, academies }) => (
  <div
    className="tw-inline-block tw-shadow-lg tw-absolute tw-w-auto auth-banner-transformation"
    style={{
      transform:
        (stage === 1 && 'skew(10deg, 0) rotateY(10deg) rotateX(-10deg)') ||
        (stage === 2 && 'rotateX(40deg)') ||
        (stage === 3 && 'unset') ||
        (stage === 4 && 'skew(-10deg, 0) rotateY(-10deg) rotateX(10deg)'),
      top:
        (stage === 1 && '12rem') ||
        (stage === 2 && window.innerWidth < 1536 && '5rem') ||
        (stage === 2 && window.innerWidth >= 1536 && '8rem') ||
        (stage === 3 && '0') ||
        (stage === 4 && '4rem'),
      left: (stage === 1 && '0') || (stage === 2 && 'unset'),
      right: (stage === 3 && 3) || (stage === 4 && '0'),
      // transformOrigin: stage === 1 && 'top center',
    }}
  >
    <div className="bg-light tw-rounded-xl tw-p-4 2xl:tw-p-6 tw-w-auto tw-flex tw-text-right tw-items-center">
      <img className="tw-opacity-20" src={schoolIcon} alt="" />
      <div className="tw-flex tw-flex-col tw-mr-10">
        <p className="text-blue home-counter tw-font-extrabold font-kalameh-num">{academies}</p>
        <p className="text-black font-iranyekan-num tw-text-sm tw-font-medium ">آموزشگاه</p>
      </div>
    </div>
  </div>
);

const CourseCard = ({ stage, courses }) => (
  <div
    className="tw-inline-block tw-shadow-lg tw-absolute tw-w-auto auth-banner-transformation"
    style={{
      transform:
        (stage === 1 && 'skew(10deg, 0) rotateY(10deg) rotateX(-10deg)') ||
        (stage === 2 && 'rotateX(40deg)') ||
        (stage === 3 && 'skew(-10deg, 0) rotateY(-10deg) rotateZ(0) rotateX(-7deg)') ||
        (stage === 4 && 'skew(-10deg, 0) rotateY(-10deg) rotateX(10deg)'),
      top:
        (stage === 1 && 'unset') ||
        (stage === 2 && window.innerWidth < 1536 && '6rem') ||
        (stage === 2 && window.innerWidth >= 1536 && '10rem') ||
        (stage === 3 && '12rem') ||
        (stage === 4 && window.innerWidth < 1536 && '10rem') ||
        (stage === 4 && window.innerWidth >= 1536 && '12rem'),
      left: (stage === 1 && '4rem') || (stage === 2 && '1rem') || (stage === 4 && '3rem'),
      // transformOrigin: stage === 1 && 'top center',
    }}
  >
    <div className="bg-light tw-rounded-xl tw-p-4 2xl:tw-p-6 tw-w-auto tw-flex tw-text-right tw-items-center">
      <img className="tw-opacity-20" src={slideIcon} alt="" />
      <div className="tw-flex tw-flex-col tw-mr-10">
        <p className="text-blue home-counter tw-font-extrabold font-kalameh-num">{courses}</p>
        <p className="text-black font-iranyekan-num tw-text-sm tw-font-medium ">آموزش</p>
      </div>
    </div>
  </div>
);

const YouCard = () => (
  <div
    className="tw-inline-block tw-shadow-lg tw-absolute tw-w-auto auth-banner-transformation  tw-z-10"
    style={{
      transform: 'skew(-10deg, 0) rotateY(-10deg) rotateX(10deg)',
      top: '0',
      right: '0',
    }}
  >
    <div className="bg-light tw-rounded-xl tw-py-6 tw-px-12 2xl:tw-py-10 2xl:tw-px-16 tw-w-auto tw-flex tw-text-right tw-items-center">
      <p className="text-blue home-counter tw-font-extrabold font-kalameh-num">شما</p>
    </div>
  </div>
);
