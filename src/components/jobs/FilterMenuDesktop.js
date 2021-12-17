/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
/* eslint-disable no-restricted-syntax */
/* eslint-disable prefer-destructuring */
import React, { useEffect, useState } from 'react';
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
} from '../../app/redux/actions/jobsActions';
import Checkbox from '../../common/template/Checkbox';
import FilterIndicator from './FilterIndicator';
import {} from '../../common/hooks/search';

export default function FilterMenuDesktop() {
  const {
    filters,
    options: { contract_types, work_experiences, salary_ranges },
  } = useSelector((state) => state.jobs.search);

  const dispatch = useDispatch();
  const history = useHistory();

  const filterContract = (event, item) => {
    const url = new URL(window.location);
    if (!event.target.checked) {
      let temp;
      for (const pair of url.searchParams) {
        // eslint-disable-next-line eqeqeq
        if (pair[0].includes('contract_type') && pair[1] == item.id) {
          temp = pair[0];
          break;
        }
      }
      url.searchParams.delete(temp);
    } else {
      let counter;
      counter = 0;
      for (const pair of url.searchParams) {
        if (pair[0].includes('contract_type')) counter += 1;
      }
      url.searchParams.set(`contract_type[${counter}]`, item.id);
    }
    history.push(`./${url.search}`);
  };

  const filterExperience = (event, item) => {
    const url = new URL(window.location);
    if (!event.target.checked) {
      let temp;
      for (const pair of url.searchParams) {
        // eslint-disable-next-line eqeqeq
        if (pair[0].includes('work_experience') && pair[1] == item.id) {
          temp = pair[0];
          break;
        }
      }
      url.searchParams.delete(temp);
    } else {
      let counter;
      counter = 0;
      for (const pair of url.searchParams) {
        if (pair[0].includes('work_experience')) counter += 1;
      }
      url.searchParams.set(`work_experience[${counter}]`, item.id);
    }
    history.push(`./${url.search}`);
  };

  const filterSalary = (event, item) => {
    const url = new URL(window.location);
    if (!event.target.checked) {
      let temp;
      for (const pair of url.searchParams) {
        // eslint-disable-next-line eqeqeq
        if (pair[0].includes('salary_range') && pair[1] == item.id) {
          temp = pair[0];
          break;
        }
      }
      url.searchParams.delete(temp);
    } else {
      let counter;
      counter = 0;
      for (const pair of url.searchParams) {
        if (pair[0].includes('salary_range')) counter += 1;
      }
      url.searchParams.set(`salary_range[${counter}]`, item.id);
    }
    history.push(`./${url.search}`);
  };

  const clearAllFilters = () => {
    const url = new URL(window.location);
    const arr = [];
    for (const pair of url.searchParams) {
      if (
        pair[0].includes('work_experience') ||
        pair[0].includes('contract_type') ||
        pair[0].includes('salary_range')
      ) {
        arr.push(pair[0]);
      }
    }
    arr.map((key) => url.searchParams.delete(key));
    history.push(`./${url.search}`);
    document.querySelectorAll('[class*="contract-desktop-"]').forEach((element) => {
      element.querySelector('input').checked = false;
    });
    document.querySelectorAll('[class*="salary-desktop-"]').forEach((element) => {
      element.querySelector('input').checked = false;
    });
    document.querySelectorAll('[class*="experience-desktop-"]').forEach((element) => {
      element.querySelector('input').checked = false;
    });
  };

  useEffect(() => {
    document.querySelectorAll('[class*="contract-desktop-"]').forEach((element) => {
      const temp = element.classList[2].split('-')[2];
      filters.contract_types.map((contract) => {
        if (temp == contract.id) {
          element.querySelector('input').checked = true;
        }
      });
    });
    document.querySelectorAll('[class*="experience-desktop-"]').forEach((element) => {
      const temp = element.classList[2].split('-')[2];
      filters.work_experiences.map((experience) => {
        if (temp == experience.id) {
          element.querySelector('input').checked = true;
        }
      });
    });
    document.querySelectorAll('[class*="salary-desktop-"]').forEach((element) => {
      const temp = element.classList[2].split('-')[2];
      filters.salary_ranges.map((salary) => {
        if (temp == salary.id) {
          element.querySelector('input').checked = true;
        }
      });
    });
  }, [filters]);

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
                const url = new URL(window.location);
                for (const pair of url.searchParams) {
                  if (pair[0].includes('work_experience') && pair[1] == experience.id) {
                    url.searchParams.delete(pair[0]);
                    break;
                  }
                }
                history.push(`./${url.search}`);
                document.querySelectorAll('[class*="experience-desktop-"]').forEach((element) => {
                  const temp = element.classList[2].split('-')[2];
                  if (experience.id == temp) element.querySelector('input').checked = false;
                });
              }}
            />
          ))}
          {filters.contract_types.map((contract) => (
            <FilterIndicator
              key={contract.id}
              title={contract.name}
              onDelete={() => {
                const url = new URL(window.location);
                for (const pair of url.searchParams) {
                  if (pair[0].includes('contract_type') && pair[1] == contract.id) {
                    url.searchParams.delete(pair[0]);
                    break;
                  }
                }
                history.push(`./${url.search}`);
                document.querySelectorAll('[class*="contract-desktop-"]').forEach((element) => {
                  const temp = element.classList[2].split('-')[2];
                  if (contract.id == temp) element.querySelector('input').checked = false;
                });
              }}
            />
          ))}
          {filters.salary_ranges.map((salary) => (
            <FilterIndicator
              key={salary.id}
              title={salary.title}
              onDelete={() => {
                const url = new URL(window.location);
                for (const pair of url.searchParams) {
                  if (pair[0].includes('salary_range') && pair[1] == salary.id) {
                    url.searchParams.delete(pair[0]);
                    break;
                  }
                }
                history.push(`./${url.search}`);
                document.querySelectorAll('[class*="salary-desktop-"]').forEach((element) => {
                  const temp = element.classList[2].split('-')[2];
                  if (salary.id == temp) element.querySelector('input').checked = false;
                });
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
