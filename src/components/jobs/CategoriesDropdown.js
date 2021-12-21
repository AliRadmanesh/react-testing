import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import arrow from '../../assets/icons/Arrow Down Gray.svg';
import { setJobsCategory } from '../../app/redux/actions/jobsActions';

export default function CategoriesDropdown() {
  const ref = useRef();
  const dispatch = useDispatch();
  const {
    category: { name, id },
    categories,
  } = useSelector((state) => state.jobs.search);

  return (
    <div className="font-kalameh-num tw-relative tw-h-full tw-w-full">
      <button
        ref={ref}
        className=" jobs-search-area-2 tw-flex tw-w-full tw-text-sm tw-font-normal 2xl:tw-text-base tw-items-center tw-justify-between tw-relative tw-p-4"
        onClick={(e) => e.target.classList.toggle('active')}
      >
        {!id ? 'گروه شغلی' : name}
        <span>
          <img src={arrow} alt="" />
        </span>
      </button>
      <div>{categories.map((item) => console.log(item))}</div>
    </div>
  );
}

//   <div
//   key={item.id}
//   role="none"
//   className="tw-text-sm tw-font-normal 2xl:tw-text-base"
//   onClick={() => {
//     dispatch(setJobsCategory(item));
//     ref.current.classList.remove('active');
//   }}
// >
//   {item.name}
// </div>
