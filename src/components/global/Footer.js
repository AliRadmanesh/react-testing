import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getTopCategories } from '../../app/redux/actions/footerActions';

import bazaar from '../../assets/images/logo/bazaar@2x.png';
import playstore from '../../assets/images/logo/play store@2x.png';
import enamad from '../../assets/images/logo/enamad.fcc99d2.png';
import LI from '../../assets/svg/footer/LI.svg';
import FB from '../../assets/svg/footer/FB.svg';
import IG from '../../assets/svg/footer/IG.svg';
import TW from '../../assets/svg/footer/TW.svg';
import logo from '../../assets/images/logo/karsaz/logo-small.svg';

function Footer() {
  const top_categories = useSelector((state) => state.footer.top_categories);
  const dispatch = useDispatch();

  useEffect(() => {
    if (top_categories.length === 0) {
      dispatch(getTopCategories());
    }
    // eslint-disable-next-line
  }, []);

  return (
    <footer className="tw-mb-16 md:tw-mb-8 bg-light">
      <div className="tw-grid bg-white footer-gridder">
        <div
          style={{
            boxShadow: '0 -10px 8px -8px #eee',
          }}
        >
          <div
            className="tw-inline-flex tab-effect tw-py-8 bg-white tw-px-4 footer-righter"
            style={{
              clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%)',
              boxShadow: '-10px 0 5px -8px #eee',
            }}
          >
            <img src={logo} alt="" />
            <h3 className="tw-font-black text-blue tw-mr-2 tw-self-center tw-ml-4">کارساز</h3>
          </div>
          {/* <div
            className="bg-white"
            style={{
              clipPath: 'polygon(20% 0, 100% 0, 80% 100%, 0 100%)',
              width: '40px',
              height: '100px',
              position: 'relative',
              right: '-1rem',
              boxShadow: '10px 0 15px -8px #eee',
              // background: 'red',
            }}
          /> */}
        </div>
        <div
          className="tw-flex tw-w-full bg-light"
          style={{
            // background: 'linear-gradient(to bottom, rgba(251, 251, 251, .5), rgba(251, 251, 251, .1))',
            boxShadow: '0 -10px 8px -8px #eee inset',
          }}
        >
          <div />
        </div>
      </div>
      <div className="bg-white container tw-px-4 tw-py-10 tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 tw-gap-x-16 tw-gap-y-8">
        <div>
          <p
            className="tw-text-sm tw-font-normal text-black font-kalameh-num 2xl:tw-text-lg leading-2"
            style={{ lineHeight: window.innerWidth <= 1536 ? '25px' : '35px' }}
          >
            با کمک کارساز از میان آموزش‌های برتر ایران، مناسب‌ترین را انتخاب کنید، با تخفیف خرید
            کنید، آموزش ببینید و مهارت‌های خود را ارتقا دهید و در کارساز به شغل رویایی خود برسید.
            همچنین با شرکت در بوتکمپ‌های کارساز وارد بازار کار شوید.
          </p>
        </div>
        <div className="tw-grid tw-grid-cols-2 tw-gap-x-4 tw-px-8 tw-mx-auto tw-max-w-full xl:tw-max-w-sm ">
          <div>
            <h4 className="text-blue tw-mb-2">لینک‌های مفید</h4>
            <ul>
              <li>
                <Link to="/">
                  <p className="text-primary-hover tw-text-sm tw-font-normal text-black font-kalameh-num 2xl:tw-text-lg tw-truncate">
                    خانه
                  </p>
                </Link>
              </li>
              <li>
                <Link to="/categories">
                  <p className="text-primary-hover tw-text-sm tw-font-normal text-black font-kalameh-num 2xl:tw-text-lg tw-truncate">
                    دسته‌بندی
                  </p>
                </Link>
              </li>
              <li>
                <Link to="/jobs">
                  <p className="text-primary-hover tw-text-sm tw-font-normal text-black font-kalameh-num 2xl:tw-text-lg tw-truncate">
                    فرصت‌های شغلی
                  </p>
                </Link>
              </li>
              <li>
                <a href="https://karsaz.app/blog" target="_blank" rel="noreferrer">
                  <p className="text-primary-hover tw-text-sm tw-font-normal text-black font-kalameh-num 2xl:tw-text-lg tw-truncate">
                    وبلاگ
                  </p>
                </a>
              </li>
              <li>
                <Link to="/about">
                  <p className="text-primary-hover tw-text-sm tw-font-normal text-black font-kalameh-num 2xl:tw-text-lg tw-truncate">
                    درباره‌ی ما
                  </p>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <p className="text-primary-hover tw-text-sm tw-font-normal text-black font-kalameh-num 2xl:tw-text-lg tw-truncate">
                    تماس با ما
                  </p>
                </Link>
              </li>
              <li>
                <Link to="/faq">
                  <p className="text-primary-hover tw-text-sm tw-font-normal text-black font-kalameh-num 2xl:tw-text-lg tw-truncate">
                    سئوالات متداول
                  </p>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-blue tw-mb-2">برترین دسته‌ها</h4>
            <ul>
              {top_categories.map((category) => (
                <li key={category.id}>
                  <Link to={`/courses/?category[0]=${category.id}&sortby=1&is_free=0&page=1`}>
                    <p className="tw-text-sm tw-font-normal text-black font-kalameh-num 2xl:tw-text-lg tw-truncate text-primary-hover">
                      {category.name}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="tw-px-8 tw-flex tw-flex-col tw-justify-between md:tw-justify-start">
          <h4 className="text-blue tw-mb-2">اپلیکیشن کارساز</h4>
          <p className=" tw-text-justify">
            دسترسی آسان و راحت به دوره‌های آموزشی و فرصت‌های شغلی. با استفاده از اپلیکیشن کارساز،
            همه‌ی آموزش‌ها تو جیبته!
          </p>
          <div className="tw-grid tw-grid-cols-2 tw-gap-x-4 tw-py-4 tw-max-w-sm tw-mx-auto">
            <div>
              <a href="https://cafebazaar.ir/app/com.karsaz.app" target="_blank" rel="noreferrer">
                <img src={bazaar} alt="لینک بازار" style={{ width: '100%' }} />
              </a>
              <div className="tw-my-3" />
              <a
                href="https://play.google.com/store/apps/details?id=com.karsaz.app"
                target="_blank"
                rel="noreferrer"
              >
                <img src={playstore} alt="لینک پلی استور" style={{ width: '100%' }} />
              </a>
            </div>
            <div className="tw-flex tw-justify-center tw-items-center">
              <img src={enamad} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-white tw-flex tw-justify-around tw-flex-col lg:tw-flex-row-reverse tw-pt-8 lg:tw-items-center"
        style={{ borderTop: '1px solid #E2E2E2' }}
      >
        <div
          className="tw-flex tw-justify-center tw-mx-auto tw-mb-4 lg:tw-mt-2"
          style={{ width: '168px' }}
        >
          {/* <img src={TW} alt="" /> */}
          <a
            href="https://www.instagram.com/karsaz.app/"
            target="_blank"
            rel="noreferrer"
            className="tw-ml-4"
          >
            <img src={IG} alt="" />
          </a>
          <a href="https://www.linkedin.com/company/karsazapp/" target="_blank" rel="noreferrer">
            <img src={LI} alt="" />
          </a>
          {/* <img src={FB} alt="" /> */}
        </div>
        <div className="tw-text-center tw-mx-12 lg:tw-mx-auto copyright-container">
          <p>&copy; اين وبسايت متعلق به کارساز بوده و تمامی حقوق آن محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
