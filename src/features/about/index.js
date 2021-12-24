import React from 'react';
import styles from './about.module.css';
import arrow from '../../assets/icons/down arrow.svg';
import image from '../../assets/illustrations/About us.svg';
import Layout from '../../common/Layout/pacific';

export default function About() {
  return (
    <div
      style={{
        height: window.innerHeight,
        overflowY: 'visible',
      }}
    >
      <Layout title="درباره کارساز" text="کارساز پلتفرم آموزش و اشتغال">
        <div className="container">
          <div id="about" className={styles.aboutContainer}>
            <div>
              <div className={styles.aboutMain}>
                <h3 className={styles.aboutTitle}>رسالت کارساز</h3>
                <p className={styles.aboutDescription}>
                  امروزه آموزش‌های بسیاری در زمینه‌های مختلف وجود دارد که باعث سخت شدن تصمیم‌گیری در
                  انتخاب یک دوره‌ی مناسب شده است. هر آموزشی برای همه افراد مناسب نیست و از طرفی
                  بررسی و مقایسه‌ی آموزش‌ها دیگر به راحتی امکان‌پذیر نیست. رسالت کارساز این است که
                  به شما کمک کند در سریع‌ترین زمان مناسب‌ترین آموزش را انتخاب کنید و آن‌را با تخفیف
                  خرید کنید. در مرحله‌ی بعد به شما کمک می‌کند تا از بین هزاران آگهی شغلی، شغل مناسب
                  خود را پیدا کنید.
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
                    <span>تنوع گروه های آموزشی</span>
                  </li>
                  <li className="tw-flex tw-items-center tw-mb-2">
                    <img
                      style={{ transform: 'rotate(90deg)', width: '18px' }}
                      src={arrow}
                      alt=""
                      className="tw-ml-4"
                    />
                    <span>آموزش های آموزشگاه های برتر</span>
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
      </Layout>
    </div>
  );
}
