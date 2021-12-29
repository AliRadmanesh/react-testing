/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import addFillIcon from '../../assets/icons/Add Fill.svg';
import starFillIcon from '../../assets/icons/Star Fill.svg';
import arrow from '../../assets/icons/Arrow Down Gray.svg';
import searchIcon from '../../assets/icons/Search.svg';
import closeIcon from '../../assets/icons/Close.svg';
import instance from '../../app/instance';
import {
  setModalSort,
  setModalQuery,
  setModalFree,
  showModal,
} from '../../app/redux/actions/compareActions';
import { isObjEmpty, numberWithCommas } from '../../common/Functions';

const ModalCard = ({ props }) => {
  const {
    id,
    images: { cover },
    title,
    prices,
    academy: { name, avatar },
    rating,
    type,
    duration,
    description,
    is_free,
    discount,
  } = props;

  let realPrice = '';
  let discountPrice = '';
  let courseDiscount = '';

  // const realPrice = '';
  // const discountPrice = '';
  // const courseDiscount = '';

  if (!isObjEmpty(prices) && parseInt(is_free, 10) === 0) {
    realPrice = `${numberWithCommas(prices.original.price)}`;

    if (!isObjEmpty(discount)) {
      if (discount.percentage && parseInt(discount.percentage, 10) > 0) {
        discountPrice = `${numberWithCommas(
          prices.original.price * (1 - parseInt(discount.percentage, 10) / 100),
        )} تومان`;
        courseDiscount = `${discount.percentage} %`;
      } else {
        discountPrice = `${numberWithCommas(prices.original.price - discount.amount)} تومان`;
        courseDiscount = `${numberWithCommas(discount.amount)} تومان`;
      }
    }
  }

  const { dispatcher } = useSelector((state) => state.compare);
  const dispatch = useDispatch();

  const setCourse = () => {
    const url = new URL(window.location);
    url.searchParams.set(dispatcher, id);
  };

  return (
    <div className="modal-card tw-rounded-xl bg-white tw-p-4 tw-w-auto">
      <div
        className="tw-rounded-xl tw-realtive tw-mb-4 tw-block"
        style={{
          background: `url("${cover}") center/cover no-repeat`,
          height: '166px',
        }}
      />
      <p className="tw-text-sm text-dark tw-font-medium 2xl:tw-text-lg tw-truncate tw-mb-4">
        {title}
      </p>
      <div className="tw-flex tw-justify-between tw-items-center">
        <div className="tw-flex tw-items-center">
          <img src={avatar} alt="" className="tw-ml-4 avatar tw-rounded-xl" />
          <p className="font-iranyekan-num text-dark tw-text-sm 2xl:tw-text-base">{name}</p>
        </div>
        <div className="tw-flex tw-flex-col tw-items-end">
          <div className="tw-flex tw-items-center">
            {realPrice.length > 0 && (
              <p
                className={`tw-block ${
                  discountPrice.length > 0
                    ? 'tw-ml-2 text-gray tw-font-normal tw-text-sm tw-line-through'
                    : 'text-blue tw-font-semibold tw-text-lg'
                }`}
              >
                {`${realPrice} ${discountPrice.length > 0 ? '' : ' تومان'}`}
              </p>
            )}
            {courseDiscount.length > 0 && (
              <p className="tw-text-xs tw-font-normal tw-block tw-px-2 tw-py-1 bg-error text-white tw-rounded-lg">
                {courseDiscount}
              </p>
            )}
            {parseInt(is_free, 10) === 1 && (
              <p className="tw-text-base tw-font-bold tw-block text-success">رایگان</p>
            )}
          </div>
          {discountPrice.length > 0 && (
            <p className="text-blue tw-font-bold tw-text-lg">{discountPrice}</p>
          )}
        </div>
      </div>
      <div className="tw-flex tw-justify-between tw-items-center tw-mt-4">
        <div className="tw-flex tw-items-center">
          <p className="text-dark tw-text-sm 2xl:tw-text-base">{type.name}</p>
          <div className="tw-flex tw-justify-center tw-mr-4 tw-items-center">
            <img src={starFillIcon} alt="" className="tw-ml-2 tw-w-4 2xl:tw-w-6" />
            <p className="text-dark tw-text-sm 2xl:tw-text-base">{rating.average}</p>
          </div>
        </div>
        <Link
          to={() => {
            const url = new URL(window.location);
            url.searchParams.set(dispatcher, id);
            return url.search;
          }}
          onClick={() => dispatch(showModal(false))}
          className="button-secondary tw-flex tw-justify-center"
          style={{ padding: '.5rem' }}
        >
          <img src={addFillIcon} alt="" className="tw-ml-2 tw-w-4 2xl:tw-w-6" />
          افزودن دوره
        </Link>
      </div>
    </div>
  );
};

function IsFreeDropdown() {
  const { is_free } = useSelector((state) => state.compare.modal);
  const dispatch = useDispatch();
  const ref = useRef();
  const [text, setText] = useState(() => {
    switch (is_free) {
      case 0:
        return 'دارای هزینه';
      case 1:
        return 'رایگان';
      default:
        return 'مرتبط‌ترین';
    }
  });

  const handleClick = (event) => {
    if (!event.target.className.includes('free-dropdown') && ref.current) {
      ref.current.classList.remove('active');
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className="font-kalameh-num tw-relative tw-w-full tw-h-auto">
      <div
        ref={ref}
        className="tw-flex items-center courses-dropdown modal-free-dropdown tw-justify-between tw-relative tw-p-4"
        onClick={(e) => e.target.classList.toggle('active')}
      >
        <p className="tw-text-sm tw-font-normal 2xl:tw-text-base">{text}</p>
        <img src={arrow} alt="" />
      </div>
      <div className="courses-dropdown-items">
        <div
          className="courses-dropdown-item tw-text-sm tw-font-normal 2xl:tw-text-base"
          onClick={() => {
            dispatch(setModalFree(1));
            setText('رایگان');
            // document.querySelector('.modal-free-dropdown').classList.remove('active');
          }}
        >
          رایگان
        </div>
        <div
          className="courses-dropdown-item tw-text-sm tw-font-normal 2xl:tw-text-base"
          onClick={() => {
            dispatch(setModalFree(0));
            setText('دارای هزینه');
            // document.querySelector('.modal-free-dropdown').classList.remove('active');
          }}
        >
          دارای هزینه
        </div>
      </div>
    </div>
  );
}

function SortDropdown() {
  const { sort } = useSelector((state) => state.compare.modal);
  const [text, setText] = useState(() => {
    switch (sort) {
      case 1:
        return 'مرتبط‌ترین';
      case 2:
        return 'جدیدترین';
      case 3:
        return 'مرتبط‌ترین';
      default:
        return 'مرتبط‌ترین';
    }
  });
  const dispatch = useDispatch();
  const ref = useRef();
  return (
    <div className="font-kalameh-num tw-relative tw-w-full tw-h-auto">
      <div
        ref={ref}
        className="tw-flex items-center courses-dropdown tw-justify-between tw-relative tw-p-4"
        onClick={(e) => e.target.classList.toggle('active')}
      >
        <p className="tw-text-sm tw-font-normal 2xl:tw-text-base">{text}</p>
        <img src={arrow} alt="" />
      </div>
      <div className="courses-dropdown-items">
        <div
          className="courses-dropdown-item tw-text-sm tw-font-normal 2xl:tw-text-base"
          onClick={() => {
            dispatch(setModalSort(1));
            setText('مرتبط‌ترین');
          }}
        >
          مرتبط‌ترین
        </div>
        <div
          className="courses-dropdown-item tw-text-sm tw-font-normal 2xl:tw-text-base"
          onClick={() => {
            dispatch(setModalSort(2));
            setText('جدیدترین');
          }}
        >
          جدیدترین
        </div>
        <div
          className="courses-dropdown-item tw-text-sm tw-font-normal 2xl:tw-text-base"
          onClick={() => {
            dispatch(setModalSort(3));
            setText('محبوب‌ترین');
          }}
        >
          محبوب‌ترین
        </div>
      </div>
    </div>
  );
}

function SearchBar() {
  const { query } = useSelector((state) => state.compare.modal);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(setModalQuery(query));
  };

  return (
    <form
      className="tw-grid tw-items-center search-container tw-py-0 tw-px-2 search-container tw-w-full"
      style={{ gridTemplateColumns: 'auto 62px' }}
      onSubmit={onSubmit}
    >
      <input
        type="text"
        className="search tw-flex tw-p-0  tw-pr-2  tw-w-full tw-text-sm font-kalameh-num"
        placeholder="نام آموزش، آموزشگاه یا مدرس را سرچ کنید..."
        onFocus={() => {
          document.querySelector('.search-container').classList.add('focus');
        }}
        onBlur={() => {
          document.querySelector('.search-container').classList.remove('focus');
        }}
        onChange={(e) => dispatch(setModalQuery(e.target.value))}
      />
      <button type="submit" className="tw-m-0 tw-px-2 tw-justify-self-end">
        <img src={searchIcon} alt="" />
      </button>
    </form>
  );
}

export default function Modal() {
  const [courses, setCourses] = useState([]);
  const { show, sort, is_free, query } = useSelector((state) => state.compare.modal);
  const { primary, secondary } = useSelector((state) => state.compare);
  const dispatch = useDispatch();

  const ref = useRef();

  const getData = async () => {
    let search = '';

    if (query !== '') search = query;
    else {
      if (query === '' && !primary.id && secondary.id) {
        search = secondary.title;
      }

      if (query === '' && !secondary.id && primary.id) {
        search = primary.title;
      }
    }
    if (search !== '') {
      const res = await instance.get(
        `/api/v1/web/service/courses/search/?q=${search}&sortby=${sort}&is_free=${is_free}`,
      );
      if (res.status === 200 || res.status === 201) {
        setCourses(res.data.data.courses);
      }
    }
  };

  // eslint-disable-next-line
  const handleClick = (e) => {
    if (e.target.classList.contains('modal-box-container')) {
      dispatch(showModal(false));
    }
  };

  useEffect(() => {
    if (show) getData();
    else setCourses([]);

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [show, sort, is_free, query]);

  return (
    <>
      <div
        ref={ref}
        className="tw-grid tw-fixed tw-top-0 tw-right-0 tw-h-full tw-w-full tw-place-items-center modal-box-container"
        style={{
          zIndex: '9999',
          backgroundColor: 'rgba(0,0,0,0.5)',
          display: show ? 'grid' : 'none',
        }}
      />
      <div
        style={{ zIndex: '999999', display: show ? 'flex' : 'none' }}
        className="modal-box tw-fixed tw-m-auto tw-flex tw-flex-col bg-light md:tw-rounded-xl tw-h-full tw-w-full md:tw-h-4/5 lg:tw-h-4/5 xl:tw-h-3/4 md:tw-w-5/6  xl:tw-w-3/4 2xl:tw-w-2/3 tw-overflow-y-hidden  "
      >
        <div className="tw-flex tw-px-4 tw-items-center tw-justify-between tw-py-4 font-kalameh-num md:tw-hidden">
          <p className="tw-text-base tw-font-normal text-dark">افزوردن دوره به لیست</p>
          <button onClick={() => dispatch(showModal(false))} className="tw-p-0 tw-w-4 2xl:tw-w-6">
            <img src={closeIcon} alt="" />
          </button>
        </div>
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-4 tw-justify-between tw-items-center tw-border-b-2 tw-border-gray-200 tw-py-4 tw-mx-4">
          <div className="tw-mb-4 lg:tw-mb-0">
            <SearchBar />
          </div>
          <div className="tw-flex tw-items-center text-dark tw-flex-col lg:tw-flex-row lg:tw-justify-end">
            <p className="font-kalameh-num tw-text-xs tw-font-normal 2xl:tw-text-base tw-ml-4 tw-mb-4 lg:tw-mb-0 tw-self-start lg:tw-self-center">
              مرتب‌شده براساس:‌
            </p>
            <div className="tw-grid tw-gap-x-4 tw-grid-cols-2 lg:tw-flex tw-w-full lg:tw-w-auto">
              <div>
                <SortDropdown />
              </div>
              <div>
                <IsFreeDropdown />
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            courses.length === 0
              ? 'modal-grid tw-grid tw-grid-cols-1 font-kalameh-num tw-place-items-center tw-h-1/2'
              : 'modal-grid tw-grid tw-m-4 tw-pr-4 tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-2 xl:tw-grid-cols-3 font-kalameh-num tw-h-full tw-overflow-y-auto tw-gap-4'
          }
        >
          {courses.length === 0 && (
            <p className="tw-text-base tw-font-normal text-dark modal-message">
              مورد متناسبی یافت نشد. برای دیدن دوره‌ها، عبارت مورد نظر خود را جستجو کنید.
            </p>
          )}
          {courses.map((course) => (
            <ModalCard key={course.id} props={course} />
          ))}
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
