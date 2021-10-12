import React, { useEffect } from 'react';

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
  }, []);

  return (
    <footer className="tw-pb-12 tw-mt-6 lg:tw-mt-16" style={{}}>
      <div className="tw-flex" style={{ gridTemplateColumns: '150px auto ' }}>
        <div
          className="tw-inline-flex tab-effect tw-pr-4"
          style={{ clipPath: 'polygon()', background: 'white' }}
        >
          <img src={logo} alt="" />
          <h3 className="tw-font-black text-blue tw-mr-2 tw-self-center tw-ml-4">کارساز</h3>
        </div>
        <div className="tw-flex" style={{ background: '' }}>
          <div
            className=""
            style={{
              clipPath: 'polygon(20% 0, 100% 0, 80% 100%, 0 100%)',
              width: '40px',
              height: '100px',
              background:
                'linear-gradient(to right, #fff, rgba(225, 225, 225, 1)), linear-gradient(to bottom, #fff, rgba(225, 225, 225, 1))',
            }}
          />
          <div
            style={{
              display: 'flex',
              background: 'white',
              width: '100%',
              boxShadow: '0 -20px 5px -2px rgba(225, 225, 225, 1) inset',
            }}
          />
        </div>
      </div>
      <div
        className=" tw-px-4 tw-pt-12 tw-grid tw-grid-cols-1  md:tw-grid-cols-3 md:tw-gap-x-4 footer-grid"
        style={{}}
      >
        <div className="tw-my-8 tw-text-justify">
          <p>
            {' '}
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک
            است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
            فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
            کتابهای زیادی در شصت و سه درصد گذشته حال و آینده.
            <span className="tw-hidden md:tw-inline">
              شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
              رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت
              می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها حل شود.
            </span>
          </p>
        </div>
        <div className="tw-grid tw-grid-cols-2 tw-gap-x-4 tw-my-8 md:tw-px-8 md:tw-flex md:tw-justify-between">
          <div className="">
            <h4 className="text-blue">لینک‌های مفید</h4>
            <ul className="">
              <li>
                <p>خانه</p>
              </li>
              <li>
                <p>دسته‌بندی</p>
              </li>
              <li>
                <p>فرصت‌های شغلی</p>
              </li>
              <li>
                <p>وبلاگ</p>
              </li>
              <li>
                <p>درباره‌ی ما</p>
              </li>
              <li>
                <p>تماس با ما</p>
              </li>
              <li>
                <p>سئوالات متداول</p>
              </li>
            </ul>
          </div>
          <div className="">
            <h4 className="text-blue">برترین دسته‌ها</h4>
            <ul>
              {top_categories.map((category) => (
                <li key={category.id}>
                  <p>{category.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="tw-my-8 lg:tw-px-4 lg:tw-flex lg:tw-flex-col lg:tw-justify-evenly lg:tw-mx-8">
          <h4 className="text-blue">اپلیکیشن کارساز</h4>
          <p className="tw-my-4 tw-text-justify">
            دسترسی آسان و راحت به دوره های آموزشی و فرصت های شغلی. با استفاده از اپلیکیشن کارساز،
            همه آموزش ها توی جیبته.
          </p>
          <div className="tw-grid tw-grid-cols-2 tw-gap-x-4 tw-py-4">
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
        className="tw-flex tw-justify-around tw-flex-col lg:tw-flex-row-reverse tw-pt-8 lg:tw-items-center"
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
