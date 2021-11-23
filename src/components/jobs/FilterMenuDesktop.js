import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  addJobsSalaryFilter,
  removeJobsSalaryFilter,
  addJobsContractFilter,
  addJobsExperienceFilter,
  removeJobsContractFilter,
  removeJobsExperienceFilter,
  clearJobsSearchFilters,
} from '../../app/redux/actions/jobsActions';
import Checkbox from '../../common/template/Checkbox';
import FilterIndicator from './FilterIndicator';
import {} from '../../common/hooks/search';

export default function FilterMenuDesktop() {
  const {
    options: { contract_types, work_experiences, salary_ranges },
  } = useSelector((state) => state.jobs.search);

  const { filters } = useSelector((state) => state.jobs.search);

  const dispatch = useDispatch();

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
    document.querySelectorAll('[class*="experience-desktop-"]').forEach((item) => {
      if (item.querySelector('input').checked) item.querySelector('input').checked = false;
    });
    document.querySelectorAll('[class*="contract-desktop-"]').forEach((item) => {
      if (item.querySelector('input').checked) item.querySelector('input').checked = false;
    });
    document.querySelectorAll('[class*="salary-desktop-"]').forEach((item) => {
      if (item.querySelector('input').checked) item.querySelector('input').checked = false;
    });
  };

  return (
    <div className="courses-desktop-filters">
      <div className="tw-p-4 tw-rounded-xl bg-white">
        <div className="tw-flex tw-justify-between tw-items-center tw-mb-4">
          <p className="text-black tw-text-base tw-font-semibold font-kalameh">
            فیلترهای اعمال شده
          </p>
          <button
            className="text-error tw-text-xs tw-font-normal font-iranyekan tw-p-0"
            onClick={clearAllFilters}
          >
            حذف فیلترها
          </button>
        </div>
        <div className="tw-flex tw-items-center tw-flex-wrap">
          {filters.work_experiences.map((experience) => (
            <FilterIndicator
              key={experience.id}
              title={experience.title}
              onDelete={() => {
                dispatch(removeJobsExperienceFilter(experience.id));
                // console.log(document.querySelector(`.experience-${experience.id} input`));
                document
                  .querySelectorAll(`.experience-desktop-${experience.id} input`)
                  .forEach((item) => {
                    item.checked = false;
                  });
              }}
            />
          ))}
          {filters.contract_types.map((type) => (
            <FilterIndicator
              key={type.id}
              title={type.title}
              onDelete={() => {
                dispatch(removeJobsContractFilter(type.id));
                // console.log(document.querySelector(`.academy-${academy.id}`));
                document.querySelector(`.contract-desktop-${type.id} input`).checked = false;
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
                document.querySelector(`.salary-desktop-${salary.id} input`).checked = false;
              }}
            />
          ))}
        </div>
      </div>
      <div className="tw-p-4 tw-rounded-xl bg-white tw-mb-4">
        <p className="text-black tw-text-base tw-font-semibold tw-mb-4 font-kalameh filters-section">
          حداقل حقوق
        </p>
        <div className="filters-section-items">
          {salary_ranges.map((type) => (
            <Checkbox
              key={type.id}
              text={type.title}
              classes={`font-iranyekan-num salary-desktop-${type.id}`}
              onChange={(e) => filterSalary(e, type)}
            />
          ))}
        </div>
      </div>
      <div className="tw-p-4 tw-rounded-xl bg-white tw-mb-4">
        <p className="text-black tw-text-base tw-font-semibold tw-mb-4 font-kalameh filters-section">
          نوع قرار داد
        </p>
        <div className="filters-section-items">
          {contract_types.map((type) => (
            <Checkbox
              key={type.id}
              text={type.name}
              classes={`font-iranyekan-num contract-desktop-${type.id}`}
              onChange={(e) => filterContract(e, type)}
            />
          ))}
        </div>
      </div>
      <div className="tw-p-4 tw-rounded-xl bg-white tw-mb-4">
        <p className="text-black tw-text-base tw-font-semibold tw-mb-4 font-kalameh filters-section">
          سابقه کار
        </p>
        <div className="filters-section-items">
          {work_experiences.map((experience) => (
            <Checkbox
              key={experience.id}
              text={experience.title}
              classes={`font-iranyekan-num experience-desktop-${experience.id}`}
              onChange={(e) => filterExperience(e, experience)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// export default function FilterMenuDesktop() {
//   return (
//     <div>
//       <h1>lkasjlkj</h1>
//     </div>
//   );
// }
