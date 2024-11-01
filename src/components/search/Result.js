import React from 'react';

export default function Result() {
  return (
    <div>
      <h1>Status 200</h1>
    </div>
  );
}

// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import ReactPaginate from 'react-paginate';
// import Layout from '../../common/Layout/chill';
// import SearchBar from '../global/SearchBar';
// import CourseCard from '../courses/CourseCard';
// import FilterMenuButton from '../courses/FilterMenuButton';
// import FilterMenuMobile from '../courses/FilterMenuMobile';
// import FilterMenuDesktop from '../courses/FilterMenuDesktop';
// import SortDropdown from '../courses/SortDropdown';
// import IsFreeDropdown from '../courses/IsFreeDropdown';
// import {
//   getSearchContent,
//   addCoursesTypeFilter,
//   addCoursesAcademyFilter,
// } from '../../app/redux/actions/coursesActions';
// import { searchCourses, setCurrentPage } from '../../app/redux/actions/searchActions';
// import arrow from '../../assets/icons/Arrow Down Gray.svg';
// import '../../features/courses/courses.css';

// export default function Courses() {
//   const dispatch = useDispatch();
//   const history = useHistory();
//   const {
//     options,
//     sort,
//     is_free,
//     filters: { course_types, academies },
//   } = useSelector((state) => state.courses);
//   const {
//     courses,
//     page: { current, total },
//   } = useSelector((state) => state.search);

//   useEffect(() => {
//     dispatch(getSearchContent());
//   }, []);

//   useEffect(() => {
//     dispatch(searchCourses(new URL(window.location).search));
//   }, [new URL(window.location).search]);

//   useEffect(() => {
//     const { searchParams } = new URL(window.location);
//     if (options.academies.length !== 0) {
//       // eslint-disable-next-line no-restricted-syntax
//       for (const pair of searchParams.entries()) {
//         if (pair[0].includes('academy')) {
//           options.academies.forEach((item) => {
//             if (item.id == pair[1]) {
//               const object = { id: item.id, title: item.name };
//               dispatch(addCoursesAcademyFilter(object));
//             }
//           });
//         }
//       }
//     }
//     if (options.course_types.length !== 0) {
//       // eslint-disable-next-line no-restricted-syntax
//       for (const pair of searchParams.entries()) {
//         if (pair[0].includes('type')) {
//           options.course_types.forEach((item) => {
//             if (item.id == pair[1]) {
//               const object = { id: item.id, title: item.name };
//               dispatch(addCoursesTypeFilter(object));
//             }
//           });
//         }
//       }
//     }
//   }, [options]);

//   useEffect(() => {
//     const url = new URL(window.location.origin);
//     academies.forEach((item, index) => {
//       url.searchParams.set(`academy[${index}]`, item.id);
//     });
//     course_types.forEach((item, index) => {
//       url.searchParams.set(`type[${index}]`, item.id);
//     });
//     url.searchParams.set(`sortby`, sort);
//     url.searchParams.set(`is_free`, is_free);
//     url.searchParams.set(`page`, current);
//     history.push(`./${url.search}`);
//   }, [academies, course_types, sort, is_free, current]);

//   // useFilters();

//   return (
//     <Layout title="کورس‌ها" text="دوره‌های آموزشی">
//       <div className="container courses">
//         <div className="tw-grid tw-gap-x-4 courses-grid tw-mb-4">
//           <div className="tw-hidden lg:tw-block">
//             <SearchBar />
//           </div>
//           <div className="tw-flex tw-items-center text-dark tw-flex-col lg:tw-flex-row lg:tw-justify-end">
//             <p className="font-kalameh-num tw-text-xs tw-font-normal 2xl:tw-text-base tw-ml-4 tw-mb-4 lg:tw-mb-0 tw-self-start lg:tw-self-center">
//               مرتب‌شده براساس:‌
//             </p>
//             <div className="tw-grid tw-gap-x-4 tw-grid-cols-2 lg:tw-flex tw-w-full lg:tw-w-auto">
//               <div>
//                 <SortDropdown />
//               </div>
//               <div>
//                 <IsFreeDropdown />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="tw-grid tw-gap-x-4 courses-grid tw-mb-4">
//           <div className="tw-hidden lg:tw-block">
//             <FilterMenuDesktop />
//           </div>
//           <div>
//             {courses.length === 0 && (
//               <p className="tw-text-base text-dark font-kalameh-num tw-font-medium 2xl:tw-text-xl 2xl:tw-font-semibold tw-mt-3">
//                 موردی برای نمایش وجود ندارد.
//               </p>
//             )}
//             {courses.map((item) => (
//               <CourseCard
//                 key={item.id}
//                 title={item.title}
//                 description=""
//                 price={item.price}
//                 author={{ first_name: '', last_name: '', image: '' }}
//                 rating={item.rating.average}
//                 academy={item.academy}
//                 duration={item.duration}
//                 type={item.type}
//                 is_free={item.is_free}
//                 image={item.images.cover}
//                 discount={item.discount}
//               />
//             ))}
//           </div>
//         </div>
//         <div className="tw-grid tw-place-items-center tw-my-8 2xl:tw-my-16">
//           <ReactPaginate
//             onPageChange={({ selected }) => dispatch(setCurrentPage(selected + 1))}
//             breakLabel="..."
//             nextLabel={
//               <span className="tw-grid tw-mx-1 tw-place-items-center tw-rounded-xl tw-text-sm tw-font-medium 2xl:tw-text-xl 2xl:tw-font-semibold pagination-page-item">
//                 <img
//                   src={arrow}
//                   alt=""
//                   style={{ width: '40%', height: 'auto', transform: 'rotate(90deg)' }}
//                 />
//               </span>
//             }
//             pageCount={total}
//             previousLabel={
//               <span className="tw-grid tw-mx-1 tw-place-items-center tw-rounded-xl tw-text-sm tw-font-medium 2xl:tw-text-xl 2xl:tw-font-semibold pagination-page-item">
//                 <img
//                   src={arrow}
//                   alt=""
//                   style={{ width: '40%', height: 'auto', transform: 'rotate(-90deg)' }}
//                 />
//               </span>
//             }
//             initialPage={0}
//             marginPagesDisplayed={1}
//             containerClassName="tw-flex tw-items-center font-kalameh-num"
//             pageClassName="tw-grid tw-mx-1 tw-place-items-center tw-rounded-xl tw-text-sm tw-font-medium 2xl:tw-text-xl 2xl:tw-font-semibold pagination-page-item"
//             activeClassName="tw-grid tw-mx-1 tw-place-items-center tw-rounded-xl tw-text-sm tw-font-medium 2xl:tw-text-xl 2xl:tw-font-semibold pagination-page-item-active"
//           />
//         </div>
//       </div>
//       <div>
//         <FilterMenuMobile />
//       </div>
//       <FilterMenuButton />
//     </Layout>
//   );
// }
