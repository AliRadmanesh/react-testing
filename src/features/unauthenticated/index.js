import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Footer from '../../components/global/Footer';
import MenuMobile from '../../components/global/MenuMobile';
import ScrollToTop from '../../components/global/ScrollToTop';
import MenuDesktop from '../../components/global/MenuDesktop';
import UserMenu from '../../components/global/UserMenu';

export default function Unauthenticated() {
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
      <MenuDesktop />
      <MenuMobile />
      <UserMenu />
      <div className="404-content">
        <div className="container">
          <div className="tw-w-full">
            <div className="tw-grid tw-place-items-center" style={{ minHeight: '600px' }}>
              <div className="tw-max-w-full md:tw-max-w-3/4 lg:tw-max-w-2/3 xl:tw-max-w-1/2 2xl:tw-max-w-2/5">
                <p className="font-kalameh-num tw-mb-4 2xl:tw-mb-8 text-blue tw-text-center tw-font-extrabold tw-text-2xl 2xl:tw-text-4xl 2xl:tw-font-black">
                  هویت احراز نشده
                </p>
                <p className="text-dark font-kalameh tw-text-center tw-mb-2 tw-text-xs tw-font-normal 2xl:tw-text-base">
                  صفحه مورد نظر تنها در صورتی است که هویت شما احراز شده باشد.
                </p>
                <p className="text-dark font-kalameh tw-text-center  tw-mb-4 2xl:tw-mb-6 tw-text-xs tw-font-normal 2xl:tw-text-base">
                  در صورت تمایل با کلیک برروی دکمه زیر، وارد صفحه احراز شوید.
                </p>
                <div className="tw-grid tw-justify-center">
                  <Link to="/auth" className="button-primary button-padding">
                    ورود/ثبت‌نام
                  </Link>
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
