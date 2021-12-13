/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import toast from 'react-hot-toast';
import instance from '../../../app/instance';

import Layout from '../../../common/Layout/dashboard';

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

const ProvincesDropdown = ({ provinces, onChange, defaultValue = { name_fa: '', id: null } }) => {
  console.log(1);

  useEffect(() => {}, [defaultValue]);

  return (
    <Select
      options={provinces}
      height="100px"
      className="tw-rounded-xl dashboard-profile-dropdown text-gray tw-text-sm tw-font-normal 2xl:tw-text-base tw-mb-4"
      placeholder={!defaultValue.id && <div>یک گزینه را انتخاب کنید</div>}
      styles={customStyle}
      onChange={onChange}
      value={
        defaultValue.value !== null &&
        provinces.filter((item) => item.label === defaultValue.name_fa)
      }
    />
  );
};

const CityDropdown = ({ cities, onChange, defaultValue = { name_fa: '', id: null } }) => {
  console.log(1);
  return (
    <Select
      options={cities}
      height="100px"
      className="tw-rounded-xl dashboard-profile-dropdown text-gray tw-text-sm tw-font-normal 2xl:tw-text-base tw-mb-4"
      placeholder={<div>یک گزینه را انتخاب کنید</div>}
      styles={customStyle}
      onChange={onChange}
      value={
        defaultValue.value !== null && cities.filter((item) => item.label === defaultValue.name_fa)
      }
    />
  );
};

export default function Edit() {
  const [cities, setCities] = useState([]);
  const [provinces, setProvinces] = useState([]);

  const [defaults, setDefaults] = useState({});

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

        if (res.data.data.profile.province.id !== null) {
          getCities(res.data.data.profile.province.id);
        }
      }
    } catch (error) {
      const { status, data } = error.response;
      toast.error(data.message);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    getProfile();
    getProvinces();
  }, []);

  // useEffect(() => {}, [defaults]);

  return (
    <Layout>
      <form onSubmit={onSubmit}>
        <div className="bg-white tw-rounded-xl tw-p-4 font-kalameh-num tw-w-full lg:tw-w-100 tw-max-w-full">
          <div className="tw-flex tw-justify-center 2xl:tw-justif-start tw-flex-col tw-mb-4">
            <p className="tw-text-base tw-font-normal text-black 2xl:tw-text-lg 2xl:tw-font-semibold">
              تصویر پروفایل
            </p>
            <input type="file" name="photo" id="profile-upload" />
            <label
              htmlFor="profile-upload"
              style={{
                background: defaults.image
                  ? `url("${defaults.image}") no-repeat center/cover`
                  : "url('../assets/icons/Dashboard/add-img.svg') no-repeat center",
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
          <ProvincesDropdown
            provinces={provinces}
            onChange={({ value }) => {
              console.log(1);
              getCities(value);
            }}
            defaultValue={defaults.province}
          />
          <p className="tw-text-base tw-font-normal text-black 2xl:tw-text-lg 2xl:tw-font-semibold tw-mb-2">
            شهر
          </p>
          <CityDropdown
            cities={cities}
            onChange={() => console.log(1)}
            defaultValue={defaults.city}
          />
          <p className="tw-text-base tw-font-normal text-black 2xl:tw-text-lg 2xl:tw-font-semibold tw-mb-2">
            شغل
          </p>
          <input type="text" placeholder="شغل خود را وارد کنید. " className="tw-w-full tw-mb-4" />
          <p className="tw-text-base tw-font-normal text-black 2xl:tw-text-lg 2xl:tw-font-semibold tw-mb-2">
            جنسیت
          </p>
          <div className="tw-flex tw-flex-col">
            <RadioButton
              name="gender"
              text="مرد"
              defaultValue={defaults.gender === 'male' && true}
            />
            <RadioButton
              name="gender"
              text="زن"
              classes="tw--mt-6"
              defaultValue={defaults.gender === 'female' && true}
            />
          </div>
          <button type="submit" className="button-primary tw-w-full tw-text-center">
            ثبت تغییرات
          </button>
        </div>
      </form>
    </Layout>
  );
}

// function help () {
//   const onSelectImage = (event) => {
//     if (event?.target?.files.length) {
//       if (event.target.files[0].type === 'image/png' || event.target.files[0].type === 'image/jpg' || event.target.files[0].type === 'image/jpeg') {
//         if (event.target.files[0].size <= COVER_MAX_FILE_SIZE_IN_BYTE) {
//           const coverReader = new FileReader()
//           coverReader.onload = function (e) {
//             const img = new Image()
//             img.onload = function () {
//               let imageHasCorrectDimension = true
//               let selectedImageErrors = {}

//               if (img.width > 1920 || img.heigth > 1080 || img.width < 512 || img.height < 288) {
//                 imageHasCorrectDimension = false
//                 selectedImageErrors = { dimensions: true }
//               }
//               if (img.width / img.height < 1.75 || img.width / img.height > 1.80) {
//                 imageHasCorrectDimension = false
//                 selectedImageErrors = { ...selectedImageErrors, aspectRatio: true }
//               }

//               setCoverErrorType({ ...selectedImageErrors })
//               if (!isObjEmpty(selectedImageErrors)) {
//                 if ('dimensions' in selectedImageErrors) {
//                   notify('ERROR', 'نسبت طول به عرض عکس انتخابی باید به نسبت ۹ / ۱۶ باشد!')
//                 }
//                 if ('aspectRatio' in selectedImageErrors) {
//                   notify('ERROR', 'ابعاد عکس انتخابی باید حداقل ۲۸۸ * ۵۱۲ و حداکثر ۱۰۸۰ * ۱۹۲۰ باشد!')
//                 }
//               }

//               if (imageHasCorrectDimension) {
//                 setSelectedCover(img.src)
//               } else {
//                 event.target.value = null
//                 setSelectedCover(null)
//               }
//             }
//             img.src = coverReader.result
//           }
//           coverReader.readAsDataURL(event.target.files[0])
//         } else {
//           notify('ERROR', 'سایز تصویر انتخابی بیشتر از مقدار مجاز (۲ مگابایت) است!')
//           setCoverErrorType({ size: true })
//           setSelectedCover(null)
//           event.target.value = null
//         }
//       } else {
//         notify('ERROR', 'فرمت فایل انتخابی باید .png‌, .jpg و یا .jpeg باشد!')
//         setCoverErrorType({ type: true })
//         setSelectedCover(null)
//         event.target.value = null
//       }
//     } else {
//       setCoverErrorType({})
//       setSelectedCover(null)
//       event.target.value = null
//     }
//   }
// }
