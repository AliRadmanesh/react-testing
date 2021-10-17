import React, { useState } from 'react';

import { TextInput, EmailInput } from '../../common/template/Inputs';
import { TextArea } from '../../common/template/TextArea';

import messageIcon from '../../assets/icons/Message.svg';

import icon from '../../common/template/icon.svg';

import instance from '../../app/instance';

export default function Form() {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [title, setTitle] = useState(null);
  const [department, setDepartment] = useState(1);
  const [description, setDescription] = useState(null);
  const [nameMessage, setNameMessage] = useState(null);
  const [emailMessage, setEmailMessage] = useState(null);
  const [titleMessage, setTitleMessage] = useState(null);
  const [departmentMessage, setDepartmentMessage] = useState(null);
  const [descriptionMessage, setDescriptionMessage] = useState(null);
  const [nameState, setNameState] = useState();
  const [emailState, setEmailState] = useState();
  const [titleState, setTitleState] = useState(null);
  const [departmentState, setDepartmentState] = useState(null);
  const [descriptionState, setDescriptionState] = useState(null);
  const [showItems, doShowItems] = useState(false);

  const options = ['دپارتمان آموزشگاه ها', 'دپارتمان مدیریت'];

  const validateEmail = (add) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(add).toLowerCase());
  };

  const checkValue = (event, handler) => {
    if (!event.target.value) {
      handler('warning');
    } else {
      handler('success');
    }
  };

  const checkEmail = (event, handler) => {
    const result = validateEmail(event.target.value);
    if (!result) {
      handler('warning');
    } else {
      handler('success');
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!name) {
      setNameMessage('لطفاٌ نام خود را وارد نمایید');
      setNameState('error');
    }
    if (!email) {
      setEmailMessage('لطفاٌ نشانی ایمیل خود را بنویسید.');
      setEmailState('error');
    }
    if (!title) {
      setTitleMessage('لطفاٌ عنوانی را برای پیام خود انتخاب کنید');
      setTitleState('error');
    }
    if (!department) {
      setDepartmentMessage('لطفاٌ از بین گزینه‌ها، یکی را انتخاب کنید');
      setDepartmentState('error');
    }
    if (!description) {
      setDescriptionMessage('لطفاٌ پیام خود را برای ما بنویسید');
      setDescriptionState('error');
    }

    if (name && email && title && department && description) {
      const data = {
        name,
        email,
        title,
        department,
        description,
      };

      const res = await instance.post('/api/v1/web/service/contact-us', data);

      console.log(res);
    }
  };

  return (
    <>
      <div className="tw-p-2 md:tw-p-4 border-smooth bg-white tw-order-last md:tw-order-first">
        <div className="tw-flex tw-items-center tw-mb-4">
          <img src={messageIcon} alt="" className="icon tw-ml-4" />
          <div>
            <p className="tw-text-base text-dark 2xl:tw-text-xl font-kalameh tw-font-semibold">
              تماس با ما
            </p>
            <p className="font-kalameh tw-text-xs 2xl:tw-text-lg">با ما در ارتباط باشید.</p>
          </div>
        </div>
        <form onSubmit={onSubmit}>
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
                classes="tw-w-full font-kalameh"
                placeholder="نام و نام خانوادگی خود را وارد کنید."
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setNameState('');
                }}
                message={nameMessage}
                state={nameState}
                onBlur={(e) => checkValue(e, setNameState)}
              />
            </div>
            <div className="tw-mt-4">
              <p className="tw-text-base tw-mb-2 2xl:tw-text-lg tw-font-normal 2xl:tw-font-semibold font-kalameh">
                ایمیل
              </p>
              <EmailInput
                classes="tw-w-full font-kalameh"
                placeholder="برای مثال info@karsaz.app"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailState('');
                }}
                message={emailMessage}
                state={emailState}
                onBlur={(e) => checkEmail(e, setEmailState)}
              />
            </div>
            <div className="tw-mt-4">
              <p className="tw-text-base tw-mb-2 2xl:tw-text-lg tw-font-normal 2xl:tw-font-semibold font-kalameh">
                موضوع
              </p>
              <TextInput
                classes="tw-w-full font-kalameh"
                placeholder="برای مثال همکاری"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                  setTitleState('');
                }}
                message={titleMessage}
                state={titleState}
                onBlur={(e) => checkValue(e, setTitleState)}
              />
            </div>
            <div className="tw-mt-4">
              <p className="tw-text-base tw-mb-2 2xl:tw-text-lg tw-font-normal 2xl:tw-font-semibold font-kalameh">
                دپارتمان
              </p>
              <div style={{ marginBottom: '1rem' }} className="template font-kalameh">
                <div
                  role="none"
                  className={`dropdown ${departmentState}`}
                  style={{ display: 'flex', justifyContent: 'space-between', borderRadius: '12px' }}
                  onClick={() => doShowItems(!showItems)}
                >
                  <p style={{ cursor: 'default' }}>
                    {department || (
                      <span style={{ color: '#878787', opacity: '.7' }}>
                        یک گزینه را انتخاب کنید
                      </span>
                    )}
                  </p>
                  <img src={icon} alt="" />
                </div>
                <div className="dropdown-container">
                  <div className="dropdown-items" style={{ display: showItems ? 'block' : 'none' }}>
                    {options.map((item) => (
                      <div
                        role="none"
                        key="item"
                        className="dropdown-item"
                        onClick={() => {
                          setDepartment(item);
                          setDepartmentState('success ');
                          doShowItems(false);
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                <p
                  className=""
                  style={{
                    color:
                      (!departmentState && '#2c2c2c') ||
                      (departmentState === 'error' && '#B21111') ||
                      (departmentState === 'warning' && '#B26F11') ||
                      (departmentState === 'success' && '#11B262'),
                    visibility: departmentState ? 'visible' : 'hidden',
                    marginTop: '.5rem',
                    marginRight: '.5rem',
                  }}
                >
                  {departmentMessage}
                </p>
              </div>
            </div>
          </div>

          <div className="tw-flex tw-flex-col tw-w-full tw-mt-4">
            <p className="tw-text-base tw-mb-2 2xl:tw-text-lg tw-font-normal 2xl:tw-font-semibold font-kalameh">
              پیام
            </p>
            <TextArea
              classes="tw-w-full font-kalameh"
              placeholder="پیام خود را در اینجا برایمان بنویسید..."
              value={description}
              onChange={(e) => {
                setDescription(e.target.value);
                setDescriptionState('');
              }}
              message={descriptionMessage}
              state={descriptionState}
              onBlur={(e) => checkValue(e, setDescriptionState)}
            />
          </div>
          <div className="tw-flex tw-justify-center md:tw-justify-end">
            <button type="submit" className="button-primary button-padding tw-w-full md:tw-w-auto">
              ارسال پیام
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
