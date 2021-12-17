import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../global/Footer';
import MenuMobile from '../global/MenuMobile';
import ScrollToTop from '../global/ScrollToTop';
import MenuDesktop from '../global/MenuDesktop';
import CategoryMenuMobile from '../global/CategoryMenuMobile';
import CategoryMenuDesktop from '../global/CategoryMenuDesktop';
import UserMenu from '../global/UserMenu';
import searchWhiteIcon from '../../assets/icons/Search White.svg';
import { clearQueryFilters, setQueryKeywords } from '../../app/redux/actions/searchActions';

export default function Error404({ query }) {
  const top_search = useSelector((state) => state.home.data.top_search);
  const { keywords } = useSelector((state) => state.search.query);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearQueryFilters());
  }, []);

  return (
    <div className="bg-light">
      <ScrollToTop />
      <MenuMobile />
      <MenuDesktop />
      <UserMenu />
      <CategoryMenuDesktop />
      <CategoryMenuMobile />
      <div className="404-content">
        <div className="container">
          <div className="tw-w-full">
            <div className="tw-grid tw-place-items-center" style={{ minHeight: '600px' }}>
              <div className="tw-max-w-full md:tw-max-w-3/4 lg:tw-max-w-2/3 xl:tw-max-w-1/2 2xl:tw-max-w-2/5">
                <p className="font-kalameh-num text-blue tw-text-center tw-font-extrabold tw-text-2xl 2xl:tw-text-4xl 2xl:tw-font-black 2xl:tw-mb-4">
                  متاسفانه؛ نتیجه ای یافت نشد
                </p>
                <p className="text-dark font-kalameh tw-mb-10 tw-text-xs tw-font-normal 2xl:tw-text-base">
                  متاسفانه نتیجه ای برای «{new URL(window.location).searchParams.get('q') || query}»
                  یافت نشد، لطفا جستجوی دیگری انجام داده یا به صفحات دیگر مراجعه فرمایید.
                </p>
                <div className="">
                  <div className="tw-flex tw-justify-between tw-items-center landing-search-container bg-light tw-mb-4 tw-w-full tw-max-w-lg 2xl:tw-max-w-2xl tw-mx-auto tw-shadow-xl">
                    <input
                      type="text"
                      className="landing-search tw-flex font-kalameh-num tw-w-full tw-px-4 tw-py-0 tw-text-base tw-font-normal"
                      placeholder="نام آموزش، آموزشگاه یا مدرس را سرچ کنید..."
                      onFocus={() => {
                        document.querySelector('.landing-search-container').classList.add('focus');
                      }}
                      onBlur={() => {
                        document
                          .querySelector('.landing-search-container')
                          .classList.remove('focus');
                      }}
                      onChange={(e) => dispatch(setQueryKeywords(e.target.value))}
                    />
                    <Link
                      to={`/?q=${keywords}`}
                      className="tw-m-0 tw-py-2 tw-px-6 button-primary tw-hidden lg:tw-block font-kalameh-num te-text-base tw-font-semibold 2xl:tw-text-xl"
                    >
                      جستجو
                    </Link>
                    <Link
                      to={`/?q=${keywords}`}
                      className="tw-m-0 button-primary tw-block lg:tw-hidden"
                      style={{ padding: '.5rem' }}
                    >
                      <img src={searchWhiteIcon} alt="" />
                    </Link>
                  </div>
                  <div className="tw-py-4 tw-mb-4 tw-w-full tw-max-w-screen-sm tw-mx-auto">
                    <p className="text-black font-iranyekan-num tw-text-sm tw-font-medium 2xl:tw-text-xl tw-mb-2 ">
                      بیشترین کلمات جستجو شده
                    </p>
                    <div className="tw-flex tw-flex-wrap">
                      {top_search.map((item) => (
                        <p
                          key="1"
                          className="bg-medium font-iranyekan-num tw-text-xs tw-font-normal 2xl:tw-text-sm tw-py-2 tw-px-4 tw-m-2"
                          style={{ borderRadius: '6px' }}
                        >
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
