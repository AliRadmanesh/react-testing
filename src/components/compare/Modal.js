import React from 'react';

export default function Modal() {
  return (
    <div>
      <h1>modal</h1>
    </div>
  );
}

/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// import React, { useEffect, useState, useRef } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import addFillIcon from '../../assets/icons/Add Fill.svg';
// import starFillIcon from '../../assets/icons/Star Fill.svg';
// import arrow from '../../assets/icons/Arrow Down Gray.svg';
// import searchIcon from '../../assets/icons/Search.svg';
// import closeIcon from '../../assets/icons/Close.svg';
// import instance from '../../app/instance';
// import {
//   setModalSort,
//   setModalQuery,
//   setModalFree,
//   showModal,
// } from '../../app/redux/actions/compareActions';

// export const ModalCard = ({ props, dispatcher }) => {
//   const { images, title, price, is_free, academy, rating, type, discount } = props;

//   return (
//     <div className="modal-card tw-rounded-xl bg-white tw-p-4">
//       <div
//         className="tw-rounded-xl tw-realtive tw-mb-4"
//         style={{ background: `url("${images.cover}") center/cover no-repeat` }}
//       >
//         {discount && (
//           <div
//             className="tw-absolute bg-error text-white tw-top-8 tw-left-8"
//             style={{
//               borderRadius: '12px 12px 0 12px',
//             }}
//           >
//             {discount}%
//           </div>
//         )}
//       </div>
//       <p className="tw-text-sm text-dark tw-font-medium 2xl:tw-text-lg tw-truncate">{title}</p>
//       <div className="tw-flex tw-justify-between tw-items-end">
//         <div className="tw-flex tw-items-end">
//           <img src={academy.image} alt="" className="tw=ml-4" />
//           <p className="font-iranyekan-num text-dark tw-text-sm 2xl:tw-text-base">{academy.name}</p>
//         </div>
//         <p className="text-blue tw-text-sm 2xl:tw-text-base tw-font-semibold">{price}</p>
//       </div>
//       <div className="tw-flex tw-justify-between tw-items-center">
//         <div className="tw-flex tw-items-center">
//           <p className="text-dark tw-text-sm 2xl:tw-text-base">{type.name}</p>
//           <div className="tw-flex tw-justify-center tw-mr-4">
//             <img src={starFillIcon} alt="" className="tw-ml-2" />
//           </div>
//         </div>
//         <button className="button-secondary tw-p-4 tw-flex tw-justify-center">
//           <img src={addFillIcon} alt="" className="tw-ml-2" />
//           افزودن دوره
//         </button>
//       </div>
//     </div>
//   );
// };

// export function IsFreeDropdown() {
//   const { is_free } = useSelector((state) => state.compare.modal);
//   const [text, setText] = useState(() => {
//     switch (is_free) {
//       case 0:
//         return 'پولی';
//       case 1:
//         return 'رایگان';
//       default:
//         return 'مرتبط‌ترین';
//     }
//   });
//   const dispatch = useDispatch();
//   const ref = useRef();
//   return (
//     <div className="font-kalameh-num tw-relative tw-w-full tw-h-auto">
//       <div
//         ref={ref}
//         className="tw-flex items-center courses-dropdown tw-justify-between tw-relative tw-p-4"
//         onClick={(e) => e.target.classList.toggle('active')}
//       >
//         <p className="tw-text-sm tw-font-normal 2xl:tw-text-base">{text}</p>
//         <img src={arrow} alt="" />
//       </div>
//       <div className="courses-dropdown-items">
//         <div
//           className="courses-dropdown-item tw-text-sm tw-font-normal 2xl:tw-text-base"
//           onClick={() => {
//             dispatch(setModalFree(1));
//             setText('رایگان');
//             ref.current.classList.remove('active');
//           }}
//         >
//           رایگان
//         </div>
//         <div
//           className="courses-dropdown-item tw-text-sm tw-font-normal 2xl:tw-text-base"
//           onClick={() => {
//             dispatch(setModalFree(0));
//             setText('پولی');
//             ref.current.classList.remove('active');
//           }}
//         >
//           پولی
//         </div>
//       </div>
//     </div>
//   );
// }

// export function SortDropdown() {
//   const { sort } = useSelector((state) => state.compare.modal);
//   const [text, setText] = useState(() => {
//     switch (sort) {
//       case 1:
//         return 'مرتبط‌ترین';
//       case 2:
//         return 'جدیدترین';
//       case 3:
//         return 'مرتبط‌ترین';
//       default:
//         return 'مرتبط‌ترین';
//     }
//   });
//   const dispatch = useDispatch();
//   const ref = useRef();
//   return (
//     <div className="font-kalameh-num tw-relative tw-w-full tw-h-auto">
//       <div
//         ref={ref}
//         className="tw-flex items-center courses-dropdown tw-justify-between tw-relative tw-p-4"
//         onClick={(e) => e.target.classList.toggle('active')}
//       >
//         <p className="tw-text-sm tw-font-normal 2xl:tw-text-base">{text}</p>
//         <img src={arrow} alt="" />
//       </div>
//       <div className="courses-dropdown-items">
//         <div
//           className="courses-dropdown-item tw-text-sm tw-font-normal 2xl:tw-text-base"
//           onClick={() => {
//             dispatch(setModalSort(1));
//             setText('مرتبط‌ترین');
//             console.log(ref.current.classList.remove('active'));
//           }}
//         >
//           مرتبط‌ترین
//         </div>
//         <div
//           className="courses-dropdown-item tw-text-sm tw-font-normal 2xl:tw-text-base"
//           onClick={() => {
//             dispatch(setModalSort(2));
//             setText('جدیدترین');
//             console.log(ref.current.classList.remove('active'));
//           }}
//         >
//           جدیدترین
//         </div>
//         <div
//           className="courses-dropdown-item tw-text-sm tw-font-normal 2xl:tw-text-base"
//           onClick={() => {
//             dispatch(setModalSort(3));
//             setText('محبوب‌ترین');
//             console.log(ref.current.classList.remove('active'));
//           }}
//         >
//           محبوب‌ترین
//         </div>
//       </div>
//     </div>
//   );
// }

// export function SearchBar() {
//   const { query } = useSelector((state) => state.compare.modal);
//   const dispatch = useDispatch();

//   const onSubmit = (e) => {
//     e.preventDefault();
//     dispatch(setModalQuery(query));
//   };

//   return (
//     <form
//       className="tw-grid tw-items-center search-container tw-px-2 tw-py-2 md:tw-py-0 search-container tw-mb-4 tw-w-full"
//       style={{ gridTemplateColumns: 'auto 62px' }}
//     >
//       <input
//         type="text"
//         className="search tw-flex tw-p-0  tw-pr-2  tw-w-full tw-text-sm font-kalameh-num"
//         placeholder="نام آموزش، آموزشگاه یا مدرس را سرچ کنید..."
//         onFocus={() => {
//           document.querySelector('.search-container').classList.add('focus');
//         }}
//         onBlur={() => {
//           document.querySelector('.search-container').classList.remove('focus');
//         }}
//         onChange={(e) => dispatch(setModalQuery(e.target.value))}
//       />
//       <button type="submit" className="tw-m-0 tw-p-2 md:tw-py-0 tw-justify-self-end">
//         <img src={searchIcon} alt="" className="icon" />
//       </button>
//     </form>
//   );
// }

// export default function Modal() {
//   const [courses, setCourses] = useState([]);
//   const { show, sort, is_free, query } = useSelector((state) => state.compare.modal);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(showModal(true));
//   }, [show, sort, is_free, query]);

//   return (
//     <div
//       className="tw-grid tw-fixed tw-top-0 tw-right-0 tw-h-full tw-w-full md:tw-p-4 tw-place-items-center"
//       style={{ zIndex: '9999', background: 'red', display: show ? 'grid' : 'none' }}
//     >
//       <div className="bg-light md:tw-rounded-xl tw-px-4 md:tw-py-4 tw-h-full tw-w-full md:tw-h-1/2 lg:tw-h-4/5 xl:tw-h-3/4  xl:tw-w-3/4 2xl:tw-w-2/3">
//         <div className="tw-flex tw-items-center tw-justify-between tw-py-4 font-kalameh-num md:tw-hidden">
//           <p className="tw-text-base tw-font-normal text-dark">افزوردن دوره به لیست</p>
//           <button className="tw-p-0 icon">
//             <img src={closeIcon} alt="" />
//           </button>
//         </div>
//         <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-justify-between tw-items-center">
//           <SearchBar />
//           <div className="tw-flex tw-items-center text-dark tw-flex-col lg:tw-flex-row lg:tw-justify-end">
//             <p className="font-kalameh-num tw-text-xs tw-font-normal 2xl:tw-text-base tw-ml-4 tw-mb-4 lg:tw-mb-0 tw-self-start lg:tw-self-center">
//               مرتب‌شده براساس:‌
//             </p>
//             <div className="tw-grid tw-gap-x-4 tw-grid-cols-2 lg:tw-flex tw-w-full lg:tw-w-auto">
//               <div className="">
//                 <SortDropdown />
//               </div>
//               <div className="">
//                 <IsFreeDropdown />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 xl:tw-grid-cols-3 font-kalameh-num">
//           {courses.length === 0 && (
//             <p className="tw-text-base tw-font-normal text-dark">مورد متناسبی یافت نشد.</p>
//           )}
//           {courses.map((course) => (
//             <ModalCard key={course.id} props={course} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
