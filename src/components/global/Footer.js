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
    <footer className="tw-pb-12 bg-light" style={{}}>
      <div className="tw-grid bg-white footer-gridder" style={{}}>
        <div
          className=""
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
          <div className="" />
        </div>
      </div>
      <div
        className="bg-white container tw-px-4 tw-py-10 tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 tw-gap-x-16 tw-gap-y-8"
        style={{}}
      >
        <div className="">
          <p
            className="tw-text-sm tw-font-normal text-black font-kalameh-num 2xl:tw-text-lg leading-2"
            style={{ lineHeight: window.innerWidth <= 1536 ? '25px' : '35px' }}
          >
            {' '}
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
            است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
            فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
            کتابهای زیادی در شصت و سه درصد گذشته حال و آینده.
            <span className="tw-hidden md:tw-inline lg:tw-hidden xl:tw-inline">
              شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
              رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت
              می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها حل شود.
            </span>
          </p>
        </div>
        <div className="tw-grid tw-grid-cols-2 tw-gap-x-4 tw-px-8 tw-mx-auto tw-max-w-full xl:tw-max-w-sm ">
          <div className="">
            <h4 className="text-blue tw-mb-2">لینک‌های مفید</h4>
            <ul className="">
              <li>
                <Link to="../">
                  <p className="text-primary-hover tw-text-sm tw-font-normal text-black font-kalameh-num 2xl:tw-text-lg tw-truncate">
                    خانه
                  </p>
                </Link>
              </li>
              <li>
                <Link to="../categories">
                  <p className="text-primary-hover tw-text-sm tw-font-normal text-black font-kalameh-num 2xl:tw-text-lg tw-truncate">
                    دسته‌بندی
                  </p>
                </Link>
              </li>
              <li>
                <p className="text-primary-hover tw-text-sm tw-font-normal text-black font-kalameh-num 2xl:tw-text-lg tw-truncate">
                  فرصت‌های شغلی
                </p>
              </li>
              <li>
                <p className="text-primary-hover tw-text-sm tw-font-normal text-black font-kalameh-num 2xl:tw-text-lg tw-truncate">
                  وبلاگ
                </p>
              </li>
              <li>
                <Link to="../about">
                  <p className="text-primary-hover tw-text-sm tw-font-normal text-black font-kalameh-num 2xl:tw-text-lg tw-truncate">
                    درباره‌ی ما
                  </p>
                </Link>
              </li>
              <li>
                <Link to="../contact">
                  <p className="text-primary-hover tw-text-sm tw-font-normal text-black font-kalameh-num 2xl:tw-text-lg tw-truncate">
                    تماس با ما
                  </p>
                </Link>
              </li>
              <li>
                <Link to="../faq">
                  <p className="text-primary-hover tw-text-sm tw-font-normal text-black font-kalameh-num 2xl:tw-text-lg tw-truncate">
                    سئوالات متداول
                  </p>
                </Link>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-blue tw-mb-2">برترین دسته‌ها</h4>
            <ul>
              {top_categories.map((category) => (
                <li key={category.id}>
                  <Link to={`../courses/?category[0]=${category.id}`}>
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
            دسترسی آسان و راحت به دوره های آموزشی و فرصت های شغلی. با استفاده از اپلیکیشن کارساز،
            همه آموزش ها توی جیبته.
          </p>
          <div className="tw-grid tw-grid-cols-2 tw-gap-x-4 tw-py-4 tw-max-w-sm tw-mx-auto">
            <div className="">
              <img src={bazaar} alt="لینک بازار" style={{ width: '100%' }} />
              <div className="tw-my-3" />
              <img src={playstore} alt="لینک استور" style={{ width: '100%' }} />
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
          className="tw-flex tw-justify-between tw-mx-auto tw-mb-4 lg:tw-mt-2"
          style={{ width: '168px' }}
        >
          <img src={TW} alt="" />
          <img src={IG} alt="" />
          <img src={LI} alt="" />
          <img src={FB} alt="" />
        </div>
        <div className="tw-text-center tw-mx-12 lg:tw-mx-auto copyright-container">
          <p>اين وبسايت متعلق به کارساز بوده و تمامی حقوق آن محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
