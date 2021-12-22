import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function Description({ data }) {
  const { description } = data;

  useEffect(() => {
    document.querySelector('.job-description').innerHTML = description;

    document.querySelectorAll('strong').forEach((item) => {
      const first = item.parentElement;
      const second = item;
      first.parentElement.replaceChild(second, first);
      item.nextSibling.style.marginTop = '.5rem';
    });
  }, [description]);

  return (
    <div className="bg-white tw-rounded-xl tw-shadow-xl tw-p-4 tw-mt-8 font-kalameh-num">
      <p className="text-blue tw-mr-2 tw-text-base tw-font-semibold 2xl:tw-text-2xl 2xl:tw-font-black tw-mb-4">
        شرح شغل و وظایف
      </p>
      <p className="job-description text-gray 2xl:tw-text-base tw-font-normal tw-text-xs" />
      {/* <div className="job-description">
        <p>
          ما در نوبیتکس برای پیاده سازی و توسعه محصولاتمون به دنبال یک هم تیمی جدید با عنوان شغلی
          مدیر محصول هستیم و جدای از توانایی‌های فنی، اخلاق کار گروهی، انرژی و شور و اشتیاق بالا
          برای حل چالش های جدید برامون خیلی مهمه.
        </p>
        <p>
          <strong>مهم ترین مسئولیت‌ها:</strong>
        </p>
        <p>تدوین استراتژی، چشم انداز و ماموریت محصول در راستای استراتژی های سازمان.</p>
        <p>گردآوری اطلاعات بازار، پایش و تحلیل رقبا.</p>
        <p>
          اولویت بندی نیازهای مشتریان از طریق طراحی، اجرا و تحلیل پروژه‌های تحقیقات بازار و مشتریان.
        </p>
        <p>تعیین نیازمندی‌های محصول و اولویت‌بندی‌ آن‌ها براساس متدهای موجود.</p>
        <p>تعیین چشم‌نداز و نقشه راه محصول در توافق با ذی‌نفعان.</p>
        <p>هماهنگی و راهبری تیم طراحی و توسعه در توسعه محصول.</p>
        <p>&nbsp;مشخص کردن شاخص ها و ارزیابی پیشرفت محصول در هر دوره.&nbsp;</p>
        <p>تست نسخه‌های محصول، اخذ و تحلیل بازخورد مشتریان.</p>
        <p>بازبینی نقشه راه توسعه محصول بر اساس فیدبک مشتریان و تصمیم‌گیری داده‌محور.&nbsp;</p>
        <p>
          <strong>نیازمندی‌ها:</strong>
        </p>
        <p>یادگیرنده، تحلیل‌گر، خوش تعامل، داده‌محور.</p>
        <p>آشنایی با ابزارهای تحلیل رفتار کاربران و ابزارهای مدیریت پروژه‌های نرم‌افزاری.</p>
        <p>داشتن سابقه کار مرتبط با مدیریت یا طراحی محصولات دیجیتال.</p>
        <p>داشتن تجربه کار در حوزه کریپتوکارنسی مزیت است.</p>
      </div> */}
    </div>
  );
}
