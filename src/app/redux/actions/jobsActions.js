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
      console.log(1);
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

export const searchJobsQuery = (query) => async (dispatch) => {
  try {
    dispatch({
      type: 'SET_JOBS_SEARCH_LOADING',
    });
    const res = await instance.get(`/api/v1/web/service/jobs/search/${query}`);
    console.log(res);
    if (res.status === 200 || res.status === 201) {
      dispatch({
        type: 'SEARCH_JOBS',
        payload: res.data.data.jobs,
      });
      dispatch({
        type: 'SET_JOBS_SEARCH_PAGE_TOTAL',
        payload: res.data.meta.last_page,
      });
    }
  } catch (error) {
    toast.error('خطا پیش از برقراری ارتباط با سرور');
  }
};

export const searchJobsNoQuery = (query) => async (dispatch) => {
  try {
    dispatch({
      type: 'SET_JOBS_SEARCH_LOADING',
    });
    const res = await instance.get(`/api/v1/web/service/jobs/search-filters/${query}`);
    console.log(res);
    if (res.status === 200 || res.status === 201) {
      dispatch({
        type: 'SEARCH_JOBS',
        payload: res.data.data.jobs,
      });
      dispatch({
        type: 'SET_JOBS_SEARCH_PAGE_TOTAL',
        payload: res.data.meta.last_page,
      });
    }
  } catch (error) {
    toast.error('خطا پیش از برقراری ارتباط با سرور');
  }
};

export const getJobsFilterOptions = () => async (dispatch) => {
  try {
    const res = await instance.get('/api/v1/web/content/jobs/search-content');
    if (res.status === 200 || res.status === 201) {
      // console.log(res.data.data);
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

export const getJobsSearchOptions = () => async (dispatch) => {
  const result = { categories: [], locations: [] };
  try {
    const res = await instance.get('/api/v1/web/content/jobs/search-box-content');
    if (res.status === 200 || res.status === 201) {
      // console.log(res.data.data);
      // eslint-disable-next-line array-callback-return
      res.data.data.categories.map((item) => {
        result.categories.push({ label: item.name, value: item.id });
      });
      // eslint-disable-next-line array-callback-return
      res.data.data.provinces.map((item) => {
        result.locations.push({
          label: item.name,
          value: item.id,
          city: null,
          province: item.name,
        });
      });
      // eslint-disable-next-line array-callback-return
      res.data.data.cities.map((item) => {
        result.locations.push({
          label: item.name,
          value: item.id,
          city: item.name,
          province: item.name.split(' - ')[0],
        });
      });
      // console.log(result);
      dispatch({
        type: 'SET_JOBS_SEARCH_OPTIONS',
        payload: result,
      });
    } else {
      toast.error(res.message);
    }
  } catch (error) {
    toast.error(error);
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
    type: 'ADD_JOBS_SEARCH_CONTRACT_FILTER',
    payload: { id: object.id, name: object.name },
  });
};

export const removeJobsContractFilter = (id) => (dispatch) => {
  dispatch({
    type: 'REMOVE_JOBS_SEARCH_CONTRACT_FILTER',
    payload: id,
  });
};

export const addJobsExperienceFilter = (object) => (dispatch) => {
  dispatch({
    type: 'ADD_JOBS_SEARCH_EXPERIENCE_FILTER',
    payload: { id: object.id, title: object.title },
  });
};

export const removeJobsExperienceFilter = (id) => (dispatch) => {
  dispatch({
    type: 'REMOVE_JOBS_SEARCH_EXPERIENCE_FILTER',
    payload: id,
  });
};

export const clearJobsSearchFilters = () => (dispatch) => {
  dispatch({
    type: 'CLEAR_JOBS_FILTERS',
  });
};

export const setJobsCategory = (object) => (dispatch) =>
  dispatch({ type: 'SET_JOBS_CATEGORY', payload: object });

export const setJobsLocation = (object) => (dispatch) =>
  dispatch({ type: 'SET_JOBS_LOCATION', payload: object });

export const showJobsMobileMenu = (bool) => (dispatch) => {
  dispatch({
    type: 'SHOW_JOBS_FILTER_MOBILE',
    payload: bool,
  });
};

export const clearAllJobsAdustments = () => (dispatch) =>
  dispatch({ type: 'CLEAR_ALL_JOBS_ADJUSTMENTS' });

export const setJobsSearchCurrentPage = (page) => (dispatch) =>
  dispatch({ type: 'SET_JOBS_SEARCH_CURRENT_PAGE', payload: page });

export const setJobsSearchTotalPage = (page) => (dispatch) =>
  dispatch({ type: 'SET_JOBS_SEARCH_PAGE_TOTAL', payload: page });

export const clearJobsFilters = () => (dispatch) => {
  dispatch({
    type: 'CLEAR_JOBS_SEARCH_FILTERS',
  });
};
