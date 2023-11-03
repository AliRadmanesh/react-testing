import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { TextInput, EmailInput } from '../../common/template/Inputs';
import { TextArea } from '../../common/template/TextArea';
import messageIcon from '../../assets/icons/Message.svg';
import icon from '../../common/template/icon.svg';
import instance from '../../app/instance';

export default function Form() {
  const initialText = '';
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [title, setTitle] = useState(null);
  const [department, setDepartment] = useState(null);
  const [description, setDescription] = useState(null);
  const [nameMessage, setNameMessage] = useState('لطفا نام خود را وارد کنید.');
  const [emailMessage, setEmailMessage] = useState('لطفا ایمیل خود را وارد کنید.');
  const [titleMessage, setTitleMessage] = useState('لطفا موضوع خود را وارد کنید.');
  const [departmentMessage, setDepartmentMessage] = useState('لطفا دپارتمان مرتبط را وارد کنید.');
  const [descriptionMessage, setDescriptionMessage] = useState('لطفا پیام خود را وارد کنید.');
  const [nameState, setNameState] = useState();
  const [emailState, setEmailState] = useState();
  const [titleState, setTitleState] = useState(null);
  const [departmentState, setDepartmentState] = useState(null);
  const [descriptionState, setDescriptionState] = useState(null);
  const [showItems, doShowItems] = useState(false);
  const [dropdownText, setDropdownText] = useState(null);
  const [dropdownWidth, setDropdownWidth] = useState(null);

  const options = [
    { id: 1, title: 'دپارتمان آموزشگاه‌ها' },
    { id: 2, title: 'دپارتمان شرکت‌ها' },
    { id: 3, title: 'پشتیبانی کارساز' },
  ];

  useEffect(() => {
    setDropdownWidth('100%');
  }, []);

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
    return result;
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

      if (res.data.code === 200 || res.data.code === 201) {
        toast.success('با تشکر از شما. پیام با موفقیت دریافت شد.');
        setName('');
        setEmail('');
        setTitle('');
        setDepartment(null);
        setDropdownText(null);
        setDescription('');
      } else {
        toast.error('ارسال درخواست با خطا مواجه شد.');
      }
    }
  };

  return (
    <div className="tw-p-2 md:tw-p-4 border-smooth bg-white tw-order-last lg:tw-order-first">
      <div className="tw-flex tw-items-center tw-mb-4">
        <img src={messageIcon} alt="" className="icon tw-ml-4" />
        <div>
          <p className="tw-text-base text-dark 2xl:tw-text-xl font-kalameh-num tw-font-semibold">
            تماس با ما
          </p>
          <p className="font-kalameh-num tw-text-xs 2xl:tw-text-lg">با ما در ارتباط باشید.</p>
        </div>
      </div>
      <form onSubmit={onSubmit} noValidate>
        <div className="tw-h-auto tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-x-4 font-iranyekan-num">
          <div>
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
            <p className="tw-text-base tw-mb-2 2xl:tw-text-lg tw-font-normal 2xl:tw-font-semibold font-kalameh-num">
              نام
            </p>
            <TextInput
              classes="tw-w-full font-kalameh-num"
              placeholder="نام و نام خانوادگی خود را وارد کنید."
              defaultValue={name}
              onChange={(e) => {
                setName(e.target.value);
                setNameState('');
              }}
              message={nameMessage}
              state={nameState}
              onBlur={(e) => {
                checkValue(e, setNameState);
                if (name) setNameMessage(initialText);
              }}
            />
          </div>
          <div>
            <p className="tw-text-base tw-mb-2 2xl:tw-text-lg tw-font-normal 2xl:tw-font-semibold font-kalameh-num">
              ایمیل
            </p>
            <EmailInput
              classes="tw-w-full font-kalameh-num"
              placeholder="برای مثال info@karsazapp.ir"
              defaultValue={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailState('');
              }}
              message={emailMessage}
              state={emailState}
              onBlur={(e) => {
                checkEmail(e, setEmailState);
                if (email) setEmailMessage(initialText);
              }}
            />
          </div>
          <div>
            <p className="tw-text-base tw-mb-2 2xl:tw-text-lg tw-font-normal 2xl:tw-font-semibold font-kalameh-num">
              موضوع
            </p>
            <TextInput
              classes="tw-w-full font-kalameh-num"
              placeholder="برای مثال همکاری"
              defaultValue={title}
              onChange={(e) => {
                setTitle(e.target.value);
                setTitleState('');
              }}
              message={titleMessage}
              state={titleState}
              onBlur={(e) => {
                checkValue(e, setTitleState);
                if (title) setTitleMessage(initialText);
              }}
            />
          </div>
          <div>
            <p className="tw-text-base tw-mb-2 2xl:tw-text-lg tw-font-normal 2xl:tw-font-semibold font-kalameh-num">
              دپارتمان
            </p>
            <div style={{ marginBottom: '1rem' }} className="template font-kalameh-num">
              <div
                role="none"
                className={`dropdown ${departmentState}`}
                style={{ display: 'flex', justifyContent: 'space-between', borderRadius: '12px' }}
                onClick={() => doShowItems(!showItems)}
              >
                <p style={{ cursor: 'default' }}>
                  {dropdownText || (
                    <span style={{ color: '#878787', opacity: '.7' }}>یک گزینه را انتخاب کنید</span>
                  )}
                </p>
                <img src={icon} alt="" />
              </div>
              <div className="dropdown-container">
                <div
                  className="dropdown-items"
                  style={{
                    display: showItems ? 'block' : 'none',
                    width: dropdownWidth,
                    position: 'absolute',
                  }}
                >
                  {options.map((item) => (
                    <div
                      role="none"
                      key="item"
                      className="dropdown-item"
                      onClick={() => {
                        setDepartment(item.id);
                        setDepartmentState('success');
                        doShowItems(false);
                        setDropdownText(item.title);
                        if (department) setDepartmentMessage('');
                      }}
                    >
                      {item.title}
                    </div>
                  ))}
                </div>
              </div>
              <p
                className="template-dropdown-message font-iranyekan-num"
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

        <div className="tw-flex tw-flex-col tw-w-full font-iranyekan-num">
          <p className="tw-text-base tw-mb-2 2xl:tw-text-lg tw-font-normal 2xl:tw-font-semibold font-kalameh-num">
            پیام
          </p>
          <TextArea
            classes="tw-w-full font-kalameh-num"
            placeholder="پیام خود را در اینجا برای ما بنویسید..."
            defaultValue={description}
            onChange={(e) => {
              setDescription(e.target.value);
              setDescriptionState('');
            }}
            message={descriptionMessage}
            state={descriptionState}
            onBlur={(e) => {
              checkValue(e, setDescriptionState);
              if (description) setDescriptionMessage(initialText);
            }}
          />
        </div>
        <div className="tw-flex tw-justify-center md:tw-justify-end">
          <button type="submit" className="button-primary button-padding tw-w-full md:tw-w-auto">
            ارسال پیام
          </button>
        </div>
      </form>
    </div>
  );
}
