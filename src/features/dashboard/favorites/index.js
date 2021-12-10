import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../../common/Layout/dashboard';

const SubFavtoriteItem = ({ props }) => {
  const [selected, setSelected] = useState(false);
  const { name, id } = props;

  return (
    <>
      <div
        role="none"
        className="tw-grid tw-relative tw-place-items-center lg:tw-h-24 tw-h-16 tw-cursor-pointer tw-rounded-xl"
        style={{
          background: selected ? '#118AB2' : 'rgba(0,0,0,.75)',
          transition: 'background .5s ease-in-out',
        }}
        onClick={() => setSelected(!selected)}
      >
        <p className="text-white font-kalameh-num tw-text-xs tw-font-normal 2xl:tw-text-base">
          {name}
        </p>
      </div>
    </>
  );
};

const FavtoriteItem = ({ props }) => {
  const [selected, setSelected] = useState(false);
  const { name, sub, image } = props;

  return (
    <>
      <div
        role="none"
        className="tw-inline-grid tw-relative tw-place-items-center lg:tw-h-24 tw-h-16 tw-cursor-pointer tw-rounded-xl"
        style={{
          background:
            // selected ? 'rgba(200,200,200,.5)' :
            'rgba(0,0,0,.75)',
          transition: 'all .5s ease-in-out',
          boxShadow: selected ? '0 0 0 2px white,  0 0 0 4px #118AB2' : '0 0 0 2px white',
        }}
        onClick={() => setSelected(!selected)}
      >
        <img
          src={image}
          alt=""
          className="tw-absolute tw-right-4"
          style={{ width: '36px', height: '36px', top: '50%', transform: 'translateY(-50%)' }}
        />
        <p
          className="text-white font-kalameh-num tw-text-xs tw-font-normal 2xl:tw-text-base"
          style={{
            color:
              // selected ? '#222' :
              '#eee',
            transition: 'all .5s ease-in-out',
          }}
        >
          {name}
        </p>
      </div>
      {selected && sub.map((item) => <SubFavtoriteItem props={item} key={item.id} />)}
    </>
  );
};

export default function Favorites() {
  const [categories, setCategories] = useState([]);

  async function getData() {
    try {
      const res = await axios.get(
        'https://develop.karsazapp.ir/api/v1/web/content/courses/all-categories',
      );

      console.log(res.data);
      if (res.data.code === 200) {
        setCategories(res.data.data.categories);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

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
          کاری
        </p>
        <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-6">
          {categories.map((item) => (
            <FavtoriteItem props={item} key={item.id} />
          ))}
        </div>
      </section>
      <section className="tw-py-16 tw-border-b tw-border-gray-200">
        <p className="tw-text-sm tw-font-medium text-black 2xl:tw-text-lg 2xl:tw-font-semibold tw-mb-4 font-kalameh-num">
          آموزشی
        </p>
        <div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-3 lg:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-6">
          {categories.map((item) => (
            <FavtoriteItem props={item} key={item.id} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
