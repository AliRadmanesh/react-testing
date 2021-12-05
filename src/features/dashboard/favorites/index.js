import React, { useState } from 'react';
import Layout from '../../../common/Layout/dashboard';

const FavtoriteItem = () => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      role="none"
      className="tw-grid tw-place-items-center lg:tw-h-24 tw-h-16 tw-cursor-pointer tw-rounded-xl"
      style={{
        background: selected ? '#118AB2' : 'red',
        transition: 'background .5s ease-in-out',
      }}
      onClick={() => setSelected(!selected)}
    >
      <p className="text-white font-kalameh-num tw-text-xs tw-font-normal 2xl:tw-text-base">
        عنوان حوزه
      </p>
    </div>
  );
};

export default function Favorites() {
  return (
    <Layout>
      <p className="2xl:tw-text-2xl 2xl:tw-font-black text-blue font-kalameh-num tw-font-bold tw-text-base">
        علاقه‌مندی‌ها
      </p>
      <p className="2xl:tw-text-base tw-text-xs tw-font-normal font-kalameh-num text-black">
        کاربر گرامی شما می توانید با انتخاب حوزه های مورد علاقه برای آموزش و شغل از آخرین و جدید
        ترین پیشنهاد های آموزشی و کاری برخوردار شوید.
      </p>
      <section className="tw-py-16 tw-border-b tw-border-gray-200">
        <p className="tw-text-sm tw-font-medium text-black 2xl:tw-text-lg 2xl:tw-font-semibold tw-mb-4 font-kalameh-num">
          عناوان
        </p>
        <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-4">
          <FavtoriteItem />
          <FavtoriteItem />
          <FavtoriteItem />
          <FavtoriteItem />
          <FavtoriteItem />
          <FavtoriteItem />
          <FavtoriteItem />
        </div>
      </section>
    </Layout>
  );
}
