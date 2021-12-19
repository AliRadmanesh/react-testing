import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../../components/global/Footer';
import MenuMobile from '../../components/global/MenuMobile';
import ScrollToTop from '../../components/global/ScrollToTop';
import MenuDesktop from '../../components/global/MenuDesktop';
import searchWhiteIcon from '../../assets/icons/Search White.svg';
import UserMenu from '../../components/global/UserMenu';

export default function Page404() {
  const [query, setQuery] = useState('');
  const top_search = useSelector((state) => state.home.data.top_search);
  const history = useHistory();

  const onSubmit = (event) => {
    console.log(1);
    event.preventDefault();

    if (query !== '') {
      history.push(`../courses/search/?q=${query}&is_free=0&sort=1&page=1`);
    }
  };

  return (
    <div className="bg-light">
      <ScrollToTop />
      <MenuMobile />
      <MenuDesktop />
      <UserMenu />
      <div className="404-content">
        <div className="container">
          <div className="tw-w-full">
            <div className="tw-grid tw-place-items-center" style={{ minHeight: '600px' }}>
              <div className="tw-max-w-full md:tw-max-w-3/4 lg:tw-max-w-2/3 xl:tw-max-w-1/2 2xl:tw-max-w-2/5">
                <p className="font-kalameh-num text-blue tw-text-center tw-font-extrabold tw-text-2xl 2xl:tw-text-4xl 2xl:tw-font-black 2xl:tw-mb-4">
                  نتیجه ای یافت نشد
                </p>
                <p className="text-dark font-kalameh tw-text-center tw-text-xs tw-font-normal 2xl:tw-text-base">
                  با عرض پوزش، نتوانستیم محتوای مورد نظر شما را بیابیم.
                </p>
                <p className="text-dark font-kalameh tw-text-center tw-mb-10 tw-text-xs tw-font-normal 2xl:tw-text-base">
                  می‌توانید از باکس زیر برای جستجو استفاده کنید یا در صورت تمایل به صفحه پیشین{' '}
                  <button className="tw-p-0" onClick={() => history.push(-1)}>
                    <span
                      className="font-kalameh tw-text-center tw-mb-10 tw-text-xs tw-font-normal 2xl:tw-text-base text-blue"
                      style={{ borderBottom: '1px solid #11a802' }}
                    >
                      بازگردید
                    </span>
                  </button>
                  .
                </p>
                <div className="">
                  <form onSubmit={onSubmit}>
                    <div className="tw-flex tw-justify-between tw-items-center landing-search-container bg-light tw-mb-4 tw-w-full tw-max-w-lg 2xl:tw-max-w-2xl tw-mx-auto tw-shadow-xl">
                      <input
                        type="text"
                        className="landing-search tw-flex font-kalameh-num tw-w-full tw-px-4 tw-py-0 tw-text-base tw-font-normal"
                        placeholder="نام آموزش، آموزشگاه یا مدرس را سرچ کنید..."
                        onFocus={() => {
                          document
                            .querySelector('.landing-search-container')
                            .classList.add('focus');
                        }}
                        onBlur={() => {
                          document
                            .querySelector('.landing-search-container')
                            .classList.remove('focus');
                        }}
                        onChange={(e) => setQuery(e.target.value)}
                      />
                      <button className="tw-m-0 tw-py-2 tw-px-6 button-primary tw-hidden lg:tw-block font-kalameh-num te-text-base tw-font-semibold 2xl:tw-text-xl">
                        جستجو
                      </button>
                      <button
                        className="tw-m-0 button-primary tw-block lg:tw-hidden"
                        style={{ padding: '.5rem' }}
                      >
                        <img src={searchWhiteIcon} alt="" />
                      </button>
                    </div>
                  </form>
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
