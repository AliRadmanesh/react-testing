import React from 'react';
import FilterMenuDesktop from './FilterMenuDesktop';
import FilterMenuMobile from './FilterMenuMobile';
import FilterMenuButton from './FilterMenuButton';

export default function Search() {
  return (
    <>
      <div className="container courses">
        <div className="tw-grid tw-gap-x-4 courses-grid tw-mb-4">
          <div className="tw-hidden lg:tw-block">
            <FilterMenuDesktop />
          </div>
          <div className="">
            {/* {result.length === 0 && (
                  <p className="tw-text-base text-dark font-kalameh-num tw-font-medium 2xl:tw-text-xl 2xl:tw-font-semibold tw-mt-3">
                    موردی برای نمایش وجود ندارد.
                  </p>
                )}
                {result.map((item) => (
                  <CourseCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description=""
                    price={item.price}
                    author={{ first_name: '', last_name: '', image: '' }}
                    rating={item.rating.average}
                    academy={item.academy}
                    duration={item.duration}
                    type={item.type}
                    is_free={item.is_free}
                    image={item.images.cover}
                    discount={item.discount}
                  />
                ))} */}
          </div>
        </div>
        <div className="tw-grid tw-place-items-center tw-my-8 2xl:tw-my-16">
          {/* <ReactPaginate
          onPageChange={({ selected }) => dispatch(setQueryCurrentPage(selected + 1))}
          breakLabel="..."
          nextLabel={
            <span className="tw-grid tw-mx-1 tw-place-items-center tw-rounded-xl tw-text-sm tw-font-medium 2xl:tw-text-xl 2xl:tw-font-semibold pagination-page-item">
              <img
                src={arrow}
                alt=""
                style={{ width: '40%', height: 'auto', transform: 'rotate(90deg)' }}
              />
            </span>
          }
          pageCount={total}
          previousLabel={
            <span className="tw-grid tw-mx-1 tw-place-items-center tw-rounded-xl tw-text-sm tw-font-medium 2xl:tw-text-xl 2xl:tw-font-semibold pagination-page-item">
              <img
                src={arrow}
                alt=""
                style={{ width: '40%', height: 'auto', transform: 'rotate(-90deg)' }}
              />
            </span>
          }
          initialPage={0}
          marginPagesDisplayed={1}
          containerClassName="tw-flex tw-items-center font-kalameh-num"
          pageClassName="tw-grid tw-mx-1 tw-place-items-center tw-rounded-xl tw-text-sm tw-font-medium 2xl:tw-text-xl 2xl:tw-font-semibold pagination-page-item"
          activeClassName="tw-grid tw-mx-1 tw-place-items-center tw-rounded-xl tw-text-sm tw-font-medium 2xl:tw-text-xl 2xl:tw-font-semibold pagination-page-item-active"
        /> */}
        </div>
      </div>
      <FilterMenuMobile />
      <FilterMenuButton />
    </>
  );
}
