/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import toast from 'react-hot-toast';
import instance from '../../../app/instance';

import Layout from '../../../common/Layout/dashboard';
import Loading from '../../../components/global/Loading';
import RadioButton from '../../../common/template/RadioButton';
import Checkbox from '../../../common/template/Checkbox';
import addPhotoIcon from '../../../assets/icons/Dashboard/add-img.svg';

const customStyle = {
  control: (provided, state) => ({
    ...provided,
    background: 'rgb(240, 242, 242)',
    borderRadius: 12,
    // height: 72,
    height: window.innerWidth >= 768 ? 72 : 56,
    border: 'none',
    // borderColor: state.isHovered ? 'transparent' : 'transparent',
    transition: 'box-shadow .3s ease-in',
    boxShadow: state.isFocused ? '0 0 0 2px #118ab2' : '0 0 0 2px transparent',
  }),

  input: (provided, state) => ({
    ...provided,
    border: 'none',
    boxShadow: 'none',
  }),
  indicatorSeparator: (state) => ({
    display: 'none',
  }),
};

export default function Edit() {
  const [cities, setCities] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [defaults, setDefaults] = useState({});
  const [province, setProvince] = useState({ vlaue: null, label: '' });
  const [city, setCity] = useState({ vlaue: null, label: '' });
  const [gender, setGender] = useState(null);
  const [imgSrc, setImgSrc] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    getValues,
  } = useForm();

  const getProvinces = async () => {
    try {
      const res = await instance.get('/api/v1/web/content/provinces');
      if (res.status === 200) {
        // setProvinces(res.data.data.provinces);
        setProvinces([]);
        // eslint-disable-next-line array-callback-return
        res.data.data.provinces.map((item) => {
          setProvinces((prev) => [...prev, { value: item.id, label: item.name }]);
        });
      }
    } catch (error) {
      const { status, data } = error.response;
      toast.error(data.message);
    }
  };

  const getCities = async (id) => {
    try {
      const res = await instance.get(`/api/v1/web/content/cities/${id}`);
      if (res.status === 200) {
        setCities([]);
        // eslint-disable-next-line array-callback-return
        res.data.data.cities.map((item) => {
          setCities((prev) => [...prev, { value: item.id, label: item.name }]);
        });
      }
    } catch (error) {
      const { status, data } = error.response;
      toast.error(data.message);
    }
  };

  const getProfile = async () => {
    try {
      const res = await instance.get('/api/v1/web/service/users/dashboard/profile');
      if (res.status === 200) {
        setDefaults(res.data.data.profile);
        setImgSrc(res.data.data.profile.image);

        if (res.data.data.profile.province.id !== null) {
          getCities(res.data.data.profile.province.id);
          setProvince({
            label: res.data.data.profile.province.name_fa,
            value: res.data.data.profile.province.id,
          });
          setCity({
            label: res.data.data.profile.city.name_fa,
            value: res.data.data.profile.city.id,
          });
        }

        if (res.data.data.profile.gender) {
          setGender(res.data.data.profile.gender);
        }
      }
    } catch (error) {
      const { status, data } = error.response;
      toast.error(data.message);
    }
    setLoading(false);
  };

  // const onSubmit = (event) => {
  //   event.preventDefault();
  // };

  const onSelectImage = (event) => {
    if (event?.target?.files.length) {
      if (
        event.target.files[0].type === 'image/png' ||
        event.target.files[0].type === 'image/jpg' ||
        event.target.files[0].type === 'image/jpeg'
      ) {
        if (event.target.files[0].size <= 2097152) {
          const avatar = new FileReader();
          avatar.onload = function (e) {
            const img = new Image();
            img.onload = function () {
              //   let imageHasCorrectDimension = true;
              //   let selectedImageErrors = {};
              setImgSrc(img.src);
            };
            console.log(avatar);
            img.src = avatar.result;
          };
          avatar.readAsDataURL(event.target.files[0]);
        } else {
          toast.error('سایز تصویر انتخابی بیشتر از مقدار مجاز (۲ مگابایت) است!');
        }
      } else {
        toast.error('فرمت فایل انتخابی باید .png‌, .jpg و یا .jpeg باشد!');
      }
    }
  };

  const onSubmit = async (prev) => {
    console.log(prev);

    const data = new FormData();
    data.append('user_first_name', defaults.first_name);
    data.append('user_last_name', defaults.last_name);

    if (province.value) {
      data.append('user_province', province.value);
    }
    if (city.value) {
      data.append('user_city', city.value);
    }
    if (gender) {
      data.append('user_gender', gender);
    }
    if (prev.user_back_account) {
      data.append('user_back_account', prev.user_back_account);
    }
    if (prev.user_email) {
      data.append('user_email', prev.user_email);
    }
    if (prev.user_headline) {
      data.append('user_headline', prev.user_headline);
    }
    if (prev.user_image.length !== 0) {
      data.append('user_image', prev.user_image[0], prev.user_image[0].name);
    }
    // eslint-disable-next-line no-restricted-syntax
    for (const pair of data.entries()) {
      // eslint-disable-next-line prefer-template
      console.log(pair[0] + ', ' + pair[1]);
    }

    try {
      const res = await instance.post('/api/v1/web/service/users/dashboard/profile', data);
      if (res.status === 200) {
        toast.success('ثبت اطلاعات با موفقیت انجام شد.');
        window.location.reload();
      }
      if (res.data.code === 422) {
        toast.error(res.data.message);
      }
      if (res.data.code === 401) {
        toast.error(res.data.message);
      }
    } catch (error) {
      toast.error(error);
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
    getProvinces();

    // console.log(getValues('user_province'));
  }, []);

  useEffect(() => {
    if (province.value) getCities(province.value);
  }, [province]);

  // useEffect(() => {}, [defaults]);

  return (
    <Layout>
      {loading ? (
        <Loading />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <form onSubmit={onSubmit}> */}
          <div className="bg-white tw-rounded-xl tw-p-4 font-kalameh-num tw-w-full lg:tw-w-100 tw-max-w-full">
            <div className="tw-flex tw-justify-center 2xl:tw-justif-start tw-flex-col tw-mb-4">
              <p className="tw-text-base tw-font-normal text-black 2xl:tw-text-lg 2xl:tw-font-semibold">
                تصویر پروفایل
              </p>
              <input
                type="file"
                name="photo"
                id="profile-upload"
                {...register('user_image', { required: false })}
                onChange={onSelectImage}
              />
              <label
                className="image-container"
                htmlFor="profile-upload"
                style={{
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundImage:
                    imgSrc !== ''
                      ? `url("${imgSrc}")`
                      : "url('../assets/icons/Dashboard/add-img.svg')",
                  border: defaults.image && 'none',
                }}
              />
              <p className="tw-text-xs tw-font-normal text-gray 2xl:tw-text-base">
                برای افزودن تصویر پروفایل کلیک کنید.
              </p>
            </div>
            <p className="tw-text-base tw-font-normal text-black 2xl:tw-text-lg 2xl:tw-font-semibold tw-mb-2">
              ایمیل
            </p>
            <input
              type="email"
              name="email"
              placeholder="برای مثال karsaz@info.com "
              className="tw-w-full tw-mb-4"
              defaultValue={defaults.email}
              {...register('user_email', { required: false })}
            />
            <p className="tw-text-base tw-font-normal text-black 2xl:tw-text-lg 2xl:tw-font-semibold tw-mb-2">
              شماره شبا
            </p>
            <div className="tw-my-2 tw-grid tw-gap-4 ">
              <div className="tw-flex tw-items-center tw-w-full">
                <input
                  // value={value}
                  type="number"
                  placeholder="شماره شبای خود را وارد کنید..."
                  className="bg-error tw-w-full tw-relative"
                  style={{ borderRadius: '0 12px 12px 0' }}
                  // onChange={(e) => setValue(e.target.value)}
                  defaultValue={defaults.bank_account}
                  {...register('user_bank_account', { required: false, pattern: /[0-9]{24}/ })}
                />
                <div
                  className="tw-px-2 md:tw-px-4 xl:tw-px-6 text-gray bg-dark-gray tw-h-full tw-grid tw-place-items-center"
                  style={{ borderRadius: '12px 0 0 12px' }}
                >
                  IR
                </div>
              </div>
            </div>
            <p className="tw-text-base tw-font-normal text-black 2xl:tw-text-lg 2xl:tw-font-semibold tw-mb-2">
              استان
            </p>
            <Select
              options={provinces}
              height="100px"
              className="tw-rounded-xl dashboard-profile-dropdown text-gray tw-text-sm tw-font-normal 2xl:tw-text-base tw-mb-4"
              placeholder={!province && <div>یک گزینه را انتخاب کنید</div>}
              styles={customStyle}
              defaultValue={province}
              onChange={({ value, label }) => setProvince({ value, label })}
            />
            <p className="tw-text-base tw-font-normal text-black 2xl:tw-text-lg 2xl:tw-font-semibold tw-mb-2">
              شهر
            </p>
            <Select
              options={cities}
              height="100px"
              // isDisabled={!province.value}
              className="tw-rounded-xl dashboard-profile-dropdown text-gray tw-text-sm tw-font-normal 2xl:tw-text-base tw-mb-4"
              placeholder={!city && <div>یک گزینه را انتخاب کنید</div>}
              styles={customStyle}
              defaultValue={city}
              onChange={({ value, label }) => setCity({ value, label })}
            />
            <p className="tw-text-base tw-font-normal text-black 2xl:tw-text-lg 2xl:tw-font-semibold tw-mb-2">
              شغل
            </p>
            <input
              defaultValue={defaults.headline}
              type="text"
              placeholder="شغل خود را وارد کنید. "
              className="tw-w-full tw-mb-4"
              {...register('user_headline', { required: false })}
            />
            <p className="tw-text-base tw-font-normal text-black 2xl:tw-text-lg 2xl:tw-font-semibold tw-mb-2">
              جنسیت
            </p>
            <div className="tw-flex tw-flex-col">
              <div className="template">
                {/* eslint-disable-next-line */}
                <label class="radio-container">
                  <span>مرد</span>
                  <input
                    name="gender"
                    value="male"
                    type="radio"
                    className="radio-button"
                    // {...register('user_gender', { required: false })}
                    onChange={(e) => setGender(e.target.value)}
                    defaultChecked={defaults.gender === 'male'}
                  />
                  <span className="checkmark" />
                </label>
              </div>
              <div className="template tw--mt-6">
                {/* eslint-disable-next-line */}
                <label class="radio-container">
                  <span>زن</span>
                  <input
                    name="gender"
                    value="female"
                    type="radio"
                    className="radio-button"
                    // {...register('user_gender', { required: false })}
                    onChange={(e) => setGender(e.target.value)}
                    defaultChecked={defaults.gender === 'female'}
                  />
                  <span className="checkmark" />
                </label>
              </div>
            </div>
            <button type="submit" className="button-primary tw-w-full tw-text-center">
              ثبت تغییرات
            </button>
          </div>
        </form>
      )}
    </Layout>
  );
}
