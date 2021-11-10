import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addJobsSalaryFilter,
  removeJobsSalaryFilter,
  addJobsContractFilter,
  addJobsExperienceFilter,
  removeJobsContractFilter,
  removeJobsExperienceFilter,
  clearJobsSearchFilters,
  showJobsMobileMenu,
} from '../../app/redux/actions/jobsActions';
import closeIcon from '../../assets/icons/Close-Gray.svg';
import Checkbox from '../../common/template/Checkbox';
import SearchBar from '../global/SearchBar';
import FilterIndicator from './FilterIndicator';

export default function FilterMenuMobile() {
  const {
    options: { contract_types, work_experiences, salary_ranges },
    mobile,
  } = useSelector((state) => state.jobs.search);

  const { filters } = useSelector((state) => state.jobs.search);

  const dispatch = useDispatch();
  const { result } = useSelector((state) => state.jobs.search);

  const filterContract = (event, item) => {
    if (event.target.checked) {
      dispatch(addJobsContractFilter({ id: item.id, title: item.name }));
    } else {
      dispatch(removeJobsContractFilter(item.id));
    }
  };

  const filterExperience = (event, item) => {
    if (event.target.checked) {
      dispatch(addJobsExperienceFilter({ id: item.id, title: item.title }));
    } else {
      dispatch(removeJobsExperienceFilter(item.id));
    }
  };

  const filterSalary = (event, item) => {
    if (event.target.checked) {
      dispatch(addJobsSalaryFilter({ id: item.id, title: item.title }));
    } else {
      dispatch(removeJobsSalaryFilter(item.id));
    }
  };

  const clearAllFilters = () => {
    dispatch(clearJobsSearchFilters());
    document.querySelectorAll('[class*="academy-desktop-"]').forEach((item) => {
      if (item.querySelector('input').checked) item.querySelector('input').checked = false;
    });
    document.querySelectorAll('[class*="type-desktop-"]').forEach((item) => {
      if (item.querySelector('input').checked) item.querySelector('input').checked = false;
    });
  };

  return (
    <div
      className="courses-mobile-filters tw-fixed bg-light tw-top-0 tw-bottom-0 tw-overflow-y-scroll tw-w-full font-kalameh tw-pb-4"
      style={{ zIndex: '99999', display: mobile ? 'block' : 'none' }}
    >
      <div className="tw-flex tw-py-4 tw-shadow-sm tw-items-center tw-justify-between lg:tw-hidden bg-white container">
        <p className="text-black tw-text-base tw-font-regular">فیلتر جستجو</p>
        <button className="tw-p-0" onClick={() => dispatch(showJobsMobileMenu(false))}>
          <img src={closeIcon} alt="" className="icon" />
        </button>
      </div>
      <div className="container">
        <div className="tw-py-6">
          <SearchBar classes="tw-py-2" />
        </div>
        <div className="tw-p-4 tw-rounded-xl bg-white">
          <div className="tw-flex tw-justify-between tw-items-center tw-mb-4">
            <p className="text-black tw-text-base tw-font-semibold">فیلترهای اعمال شده</p>
            <button
              className="text-error tw-text-xs tw-font-normal font-iranyekan tw-p-0"
              onClick={clearAllFilters}
            >
              حذف فیلترها
            </button>
          </div>
          <div className="tw-flex tw-items-center tw-flex-wrap">
            {filters.contract_types.map((contract) => (
              <FilterIndicator
                key={contract.id}
                title={contract.title}
                onDelete={() => {
                  dispatch(removeJobsContractFilter(contract.id));
                  // console.log(document.querySelector(`.contract-${contract.id} input`));
                  document.querySelector(`.contract-mobile-${contract.id} input`).checked = false;
                }}
              />
            ))}
            {filters.work_experiences.map((experience) => (
              <FilterIndicator
                key={experience.id}
                title={experience.title}
                onDelete={() => {
                  dispatch(removeJobsExperienceFilter(experience.id));
                  // console.log(document.querySelector(`.academy-${academy.id}`));
                  document.querySelector(
                    `.experience-mobile-${experience.id} input`,
                  ).checked = false;
                }}
              />
            ))}
            {filters.salary_ranges.map((salary) => (
              <FilterIndicator
                key={salary.id}
                title={salary.title}
                onDelete={() => {
                  dispatch(removeJobsSalaryFilter(salary.id));
                  // console.log(document.querySelector(`.academy-${academy.id}`));
                  document.querySelector(`.salary-mobile-${salary.id} input`).checked = false;
                }}
              />
            ))}
          </div>
        </div>
        <div className="tw-p-4 tw-rounded-xl bg-white tw-mb-4">
          <p className="text-black tw-text-base tw-font-semibold tw-mb-4">نوع قرار داد</p>
          {work_experiences.map((experience) => (
            <Checkbox
              key={experience.id}
              text={experience.title}
              classes={`font-iranyekan-num experience-mobile-${experience.id}`}
              onChange={(e) => filterExperience(e, experience)}
            />
          ))}
        </div>
        <div className="tw-p-4 tw-rounded-xl bg-white tw-mb-4">
          <p className="text-black tw-text-base tw-font-semibold tw-mb-4">سابقه کار</p>
          {contract_types.map((type) => (
            <Checkbox
              key={type.id}
              text={type.name}
              classes={`font-iranyekan-num type-desktop-${type.id}`}
              onChange={(e) => filterContract(e, type)}
            />
          ))}
        </div>
        <div className="tw-p-4 tw-rounded-xl bg-white tw-mb-4">
          <p className="text-black tw-text-base tw-font-semibold tw-mb-4"> حداقل حقوق</p>
          {salary_ranges.map((type) => (
            <Checkbox
              key={type.id}
              text={type.title}
              classes={`font-iranyekan-num type-desktop-${type.id}`}
              onChange={(e) => filterSalary(e, type)}
            />
          ))}
        </div>
        <button
          className="button-primary tw-w-full tw-sticky tw-bottom-0"
          onClick={() => dispatch(showJobsMobileMenu(false))}
        >
          اعمال تغییرات
        </button>
      </div>
    </div>
  );
}
