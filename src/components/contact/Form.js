import React, { useState } from 'react';

import Dropdown from '../../common/Dropdown';

import messageIcon from '../../assets/icons/Message.svg';

export default function Form() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [title, setTitle] = useState(null);
  const [department, setDepartment] = useState(null);
  const [description, setDescription] = useState(null);

  return (
    <>
      <div className="tw-p-2">
        <div className="tw-flex tw-items-center tw-mb-4">
          <img src={messageIcon} alt="" className="icon tw-ml-4" />
          <div>
            <p className="tw-text-base text-dark xl:tw-text-xl font-kalameh tw-font-semibold">
              تماس با ما
            </p>
            <p className="font-kalameh tw-text-xs xl:tw-text-lg">با ما در ارتباط باشید.</p>
          </div>
        </div>
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-x-4">
          <div className="tw-mt-4">
            <label
              htmlFor="name"
              className="tw-text-base xl:tw-text-lg tw-font-normal xl:tw-font-semibold tw-flex tw-flex-col"
            >
              <span className="tw-mb-2">نام</span>
              <input
                id="name"
                type="text"
                className="tw-w-full"
                placeholder="نام و نام خانوادگی خود را وارد کنید."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>
          <div className="tw-mt-4">
            <label
              htmlFor="email"
              className="tw-text-base xl:tw-text-lg tw-font-normal xl:tw-font-semibold tw-flex tw-flex-col"
            >
              <span className="tw-mb-2">ایمیل</span>
              <input
                id="email"
                type="email"
                className="tw-w-full"
                placeholder="info@karsaz.app برای مثال"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="tw-mt-4">
            <label
              htmlFor="title"
              className="tw-text-base xl:tw-text-lg tw-font-normal xl:tw-font-semibold tw-flex tw-flex-col"
            >
              <span className="tw-mb-2">موضوع</span>
              <input
                id="title"
                type="text"
                className="tw-w-full"
                placeholder="برای مثال همکاری..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
          </div>
          <div className="tw-mt-4">
            <label
              htmlFor="department"
              className="tw-text-base xl:tw-text-lg tw-font-normal xl:tw-font-semibold tw-flex tw-flex-col"
            >
              <span className="tw-mb-2">دپارتمان</span>
              <select
                id="department"
                type="email"
                className="tw-w-full"
                placeholder="info@karsaz.app برای مثال"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="دپارتمان آموزشگاه‌ها">دپارتمان آموزشگاه‌ها</option>
                <option value="دپارتمان آموزشگاه‌ها">دپارتمان آموزشگاه‌ها</option>
                <option value="دپارتمان آموزشگاه‌ها">دپارتمان آموزشگاه‌ها</option>
              </select>
            </label>
          </div>
        </div>

        <div className="tw-flex tw-w-full tw-mt-4">
          <label
            htmlFor="description"
            className="tw-text-base xl:tw-text-lg tw-font-normal xl:tw-font-semibold tw-flex tw-flex-col tw-w-full"
          >
            <span className="tw-mb-2">توضیحات</span>
            <textarea
              id="description"
              className=""
              placeholder="متن پیام خود را وارد نمایید..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
        </div>
        <Dropdown />
      </div>
    </>
  );
}
