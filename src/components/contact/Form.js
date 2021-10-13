import React, { useState } from 'react';

import { TextInput, EmailInput } from '../../common/template/Inputs';
import { Dropdown } from '../../common/template/Dropdown';
import { TextArea } from '../../common/template/TextArea';

import messageIcon from '../../assets/icons/Message.svg';

export default function Form() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [title, setTitle] = useState(null);
  const [department, setDepartment] = useState(null);
  const [description, setDescription] = useState(null);
  const [nameMessage, setNameMessage] = useState(null);
  const [emailMessage, setEmailMessage] = useState(null);
  const [titleMessage, setTitleMessage] = useState(null);
  const [departmentMessage, setDepartmentMessage] = useState(null);
  const [descriptionMessage, setDescriptionMessage] = useState(null);
  const [nameState, setNameState] = useState(null);
  const [emailState, setEmailState] = useState(null);
  const [titleState, setTitleState] = useState(null);
  const [departmentState, setDepartmentState] = useState(null);
  const [descriptionState, setDescriptionState] = useState(null);

  const options = ['آموزشگاه', 'مدیریت'];

  return (
    <>
      <div className="tw-p-2 md:tw-p-4 border-smooth bg-white">
        <div className="tw-flex tw-items-center tw-mb-4">
          <img src={messageIcon} alt="" className="icon tw-ml-4" />
          <div>
            <p className="tw-text-base text-dark 2xl:tw-text-xl font-kalameh tw-font-semibold">
              تماس با ما
            </p>
            <p className="font-kalameh tw-text-xs 2xl:tw-text-lg">با ما در ارتباط باشید.</p>
          </div>
        </div>
        <div className="tw-h-auto tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-x-4">
          <div className="tw-mt-4">
            {/* <label
              htmlFor="name"
              className="tw-text-base 2xl:tw-text-lg tw-font-normal 2xl:tw-font-semibold tw-flex tw-flex-col"
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
            </label> */}
            <p className="tw-text-base tw-mb-2 2xl:tw-text-lg tw-font-normal 2xl:tw-font-semibold font-kalameh">
              نام
            </p>
            <TextInput
              className="tw-w-full"
              placeholder="نام و نام خانوادگی خود را وارد کنید."
              value={name}
              onChange={(e) => setName(e.target.value)}
              message={nameMessage}
              state={nameState}
            />
          </div>
          <div className="tw-mt-4">
            <p className="tw-text-base tw-mb-2 2xl:tw-text-lg tw-font-normal 2xl:tw-font-semibold font-kalameh">
              ایمیل
            </p>
            <EmailInput
              className="tw-w-full"
              placeholder="برای مثال info@karsaz.app"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              message={emailMessage}
              state={emailState}
            />
          </div>
          <div className="tw-mt-4">
            <p className="tw-text-base tw-mb-2 2xl:tw-text-lg tw-font-normal 2xl:tw-font-semibold font-kalameh">
              موضوع
            </p>
            <TextInput
              className="tw-w-full"
              placeholder="برای مثال همکاری"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              message={titleMessage}
              state={titleState}
            />
          </div>
          <div className="tw-mt-4">
            <p className="tw-text-base tw-mb-2 2xl:tw-text-lg tw-font-normal 2xl:tw-font-semibold font-kalameh">
              دپارتمان
            </p>
            <Dropdown
              options={options}
              className="tw-w-full font-kalameh"
              onChange={(e) => setDepartment(e.target.value)}
            />
          </div>
        </div>

        <div className="tw-flex tw-flex-col tw-w-full tw-mt-4">
          <p className="tw-text-base tw-mb-2 2xl:tw-text-lg tw-font-normal 2xl:tw-font-semibold font-kalameh">
            پیام
          </p>
          <TextArea
            className="tw-w-full"
            placeholder="برای مثال همکاری"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            message={descriptionMessage}
            state={descriptionState}
          />
        </div>
      </div>
    </>
  );
}
