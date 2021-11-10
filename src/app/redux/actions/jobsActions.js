import toast from 'react-hot-toast';
import instance from '../../instance';

export const setJobsSection = (number) => (dispatch) => {
  dispatch({ type: 'SET_JOBS_SECTION', payload: number });
};

export const getJobsData = () => async (dispatch) => {
  try {
    const res = await instance.get('/api/v1/web/service/jobs');
    if (res.status === 200 || res.status === 201) {
      dispatch({
        type: 'GET_JOBS_DATA',
        payload: res.data.data,
      });
    } else if (res.status >= 400 && res.status < 500) {
      toast.error(res.data.message);
    } else if (res.status >= 500) {
      toast.error('خطای سرور');
    } else {
      toast.error('خطای دریافت اطلاعات');
    }
  } catch (error) {
    toast.error(
      'خطا پیش از فرایند دریافت اطلاعات. اتصال خود به شبکه را بررسی نموده و دوباره تلاش نمایید',
    );
  }
};

// export const searchJobs = () => async (dispatch) => {
//   try {
//     const res = await instance.get('/api/v1/web/service/jobs/search/?q=ui');

//     if(res.data.)
//   } catch (error) {}
// };

export const getJobsFilterOptions = () => async (dispatch) => {
  try {
    const res = await instance.get('/api/v1/web/content/jobs/search-content');
    if (res.status === 200 || res.status === 201) {
      dispatch({
        type: 'GET_JOBS_FILTER_OPTIONS',
        payload: res.data.data,
      });
    } else {
      toast.error('خطای دریافت اطلاعات');
    }
  } catch (error) {
    toast.error(
      'خطا پیش از فرایند دریافت اطلاعات. اتصال خود به شبکه را بررسی نموده و دوباره تلاش نمایید',
    );
  }
};

export const addJobsSalaryFilter = (object) => (dispatch) => {
  dispatch({
    type: 'ADD_JOBS_SEARCH_SALARY_FILTER',
    payload: { id: object.id, title: object.title },
  });
};

export const removeJobsSalaryFilter = (id) => (dispatch) => {
  dispatch({
    type: 'REMOVE_JOBS_SEARCH_SALARY_FILTER',
    payload: id,
  });
};

export const addJobsContractFilter = (object) => (dispatch) => {
  dispatch({
    type: 'ADD_JOBS_SEARCH_Contract_FILTER',
    payload: { id: object.id, title: object.title },
  });
};

export const removeJobsContractFilter = (id) => (dispatch) => {
  dispatch({
    type: 'REMOVE_JOBS_SEARCH_Contract_FILTER',
    payload: id,
  });
};

export const addJobsExperianceFilter = (object) => (dispatch) => {
  dispatch({
    type: 'ADD_JOBS_SEARCH_EXPERIANCE_FILTER',
    payload: { id: object.id, title: object.title },
  });
};

export const removeJobsExperianceFilter = (id) => (dispatch) => {
  dispatch({
    type: 'REMOVE_JOBS_SEARCH_EXPERIANCE_FILTER',
    payload: id,
  });
};

export const clearJobsSearchFilters = () => (dispatch) => {
  dispatch({
    type: 'CLEAR_JOBS_FILTERS',
  });
};

export const showJobsMobileMenu = (bool) => (dispatch) => {
  dispatch({
    type: 'SHOW_JOBS_FILTER_MOBILE',
    payload: bool,
  });
};
