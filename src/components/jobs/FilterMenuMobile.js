/* eslint-disable no-restricted-syntax */
/* eslint-disable eqeqeq */
/* eslint-disable array-callback-return */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();

  const filterContract = (event, item) => {
    if (event.target.checked) {
      dispatch(addJobsContractFilter({ id: item.id, name: item.name }));
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
    document.querySelectorAll('[class*="experience-mobile-"]').forEach((item) => {
      if (item.querySelector('input').checked) item.querySelector('input').checked = false;
    });
    document.querySelectorAll('[class*="contract-mobile-"]').forEach((item) => {
      if (item.querySelector('input').checked) item.querySelector('input').checked = false;
    });

    document.querySelectorAll('[class*="salary-mobile-"]').forEach((item) => {
      if (item.querySelector('input').checked) item.querySelector('input').checked = false;
    });
  };

  const submitChange = () => {
    const url = new URL(window.location);
    const arr = [];
    for (const pair of url.searchParams) {
      if (pair[0].includes('academy') || pair[0].includes('type')) {
        arr.push(pair[0]);
      }
    }
    arr.map((key) => url.searchParams.delete(key));
    filters.work_experiences.map((item, index) =>
      url.searchParams.set(`work_experience[${index}]`, item.id),
    );
    filters.contract_types.map((item, index) =>
      url.searchParams.set(`contract_type[${index}]`, item.id),
    );
    filters.salary_ranges.map((item, index) =>
      url.searchParams.set(`salary_range[${index}]`, item.id),
    );

    history.push(`./${url.search}`);
    dispatch(showJobsMobileMenu(false));
  };

  useEffect(() => {
    document.querySelectorAll('[class*="contract-mobile-"]').forEach((element) => {
      const temp = element.classList[2].split('-')[2];
      filters.contract_types.map((contract) => {
        if (temp == contract.id) {
          element.querySelector('input').checked = true;
        }
      });
    });
    document.querySelectorAll('[class*="experience-mobile-"]').forEach((element) => {
      const temp = element.classList[2].split('-')[2];
      filters.work_experiences.map((experience) => {
        if (temp == experience.id) {
          element.querySelector('input').checked = true;
        }
      });
    });
    document.querySelectorAll('[class*="salary-mobile-"]').forEach((element) => {
      const temp = element.classList[2].split('-')[2];
      filters.salary_ranges.map((salary) => {
        if (temp == salary.id) {
          element.querySelector('input').checked = true;
        }
      });
    });
  }, [filters]);

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
              classes={`font-iranyekan-num contract-mobile-${type.id}`}
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
              classes={`font-iranyekan-num salary-mobile-${type.id}`}
              onChange={(e) => filterSalary(e, type)}
            />
          ))}
        </div>
        <div className="tw-sticky tw-bottom-0 md:tw-w-3/4 md:tw-mx-auto lg:tw-w-1/2">
          <button className="button-primary tw-w-full " onClick={submitChange}>
            اعمال تغییرات
          </button>
        </div>
      </div>
    </div>
  );
}
