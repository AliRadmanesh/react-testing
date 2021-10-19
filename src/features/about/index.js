import React, { useState } from 'react';
import styles from './about.module.css';
import arrow from '../../assets/icons/down arrow.svg';
import image from '../../assets/illustrations/About us.svg';
import Layout from '../../common/Layout/pacific';

export default function About() {
  const [height, setHeight] = useState(window.innerHeight);
  const [width, setWidth] = useState(window.innerWidth);

  return (
    <Layout title="درباره کارساز" text="کارساز پلتفرم آموزش و اشتغال">
      <div
        className="container"
        style={{
          height: width <= 768 ? '100vh' : 'auto',
          overflowY: height === 'auto' ? 'scroll' : 'hidden',
        }}
      >
        <div id="about" className={styles.aboutContainer}>
          <div>
            <div className={styles.aboutMain}>
              <h3 className={styles.aboutTitle}>رسالت کارساز</h3>
              <p className={styles.aboutDescription}>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و
                برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
                می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
                متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
                الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
                داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان
                مورد نیاز شامل حروفچینی دستاوردهای اصلی، و .جوابگوی سوالات پیوسته اهل دنیای موجود
                طراحی اساسا مورد استفاده قرار گیرد
              </p>
            </div>

            <div className={styles.aboutImage}>
              <img src={image} alt="" className="tw-w-full tw-mb-4 tw-block lg:tw-hidden" />
            </div>

            <div className={styles.aboutList}>
              <h3 className={styles.aboutTitle}>ویژگی‌های کارساز</h3>
              <ul className={styles.aboutDescription}>
                <li className="tw-flex tw-items-center tw-mb-2">
                  <img
                    style={{ transform: 'rotate(90deg)', width: '18px' }}
                    src={arrow}
                    alt=""
                    className="tw-ml-4"
                  />
                  <span>تنوع گروه های آموزشی در کازساز</span>
                </li>
                <li className="tw-flex tw-items-center tw-mb-2">
                  <img
                    style={{ transform: 'rotate(90deg)', width: '18px' }}
                    src={arrow}
                    alt=""
                    className="tw-ml-4"
                  />
                  <span>آموزش های آموزشگاه های برتر در کارساز</span>
                </li>
                <li className="tw-flex tw-items-center tw-mb-2">
                  <img
                    style={{ transform: 'rotate(90deg)', width: '18px' }}
                    src={arrow}
                    alt=""
                    className="tw-ml-4"
                  />
                  <span>مدرسان برتر در زمینه های مختلف</span>
                </li>
                <li className="tw-flex tw-items-center tw-mb-2">
                  <img
                    style={{ transform: 'rotate(90deg)', width: '18px' }}
                    src={arrow}
                    alt=""
                    className="tw-ml-4"
                  />
                  <span>شارژ شدن کیف پول و برداشت از کیف پول برای خرید های شما</span>
                </li>
                <li className="tw-flex tw-items-center tw-mb-2">
                  <img
                    style={{ transform: 'rotate(90deg)', width: '18px' }}
                    src={arrow}
                    alt=""
                    className="tw-ml-4"
                  />
                  <span>ارائه بهترین فرصت های شغلی برای کاربران</span>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.aboutImage}>
            <img src={image} alt="" className="tw-w-full tw-mb-4 tw-hidden lg:tw-block" />
          </div>
        </div>
      </div>
      <div
        className="tw-fixed tw-w-full tw-bottom-0 tw-p-4 text-blue tw-flex sm:tw-hidden tw-justify-center tw-pt-4"
        style={{
          zIndex: '10000',
          background:
            'linear-gradient(to top, rgba(255,255,255, 1), rgba(255,255,255, 1), rgba(255,255,255, 1), rgba(255,255,255, .9), rgba(255, 255, 255, .8))',
          display: height === 'auto' ? 'none' : 'flex',
        }}
      >
        <button
          className="tw-flex tw-justify-center tw-m-0 tw-p-2"
          onClick={() => {
            setHeight('auto');
          }}
        >
          مشاهده همه
          <img src={arrow} alt="" className="tw-mr-4" style={{ width: '18px' }} />
        </button>
      </div>
    </Layout>
  );
}
