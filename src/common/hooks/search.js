/* eslint-disable eqeqeq */
/* eslint-disable no-loop-func */
/* 
This custom hook, is dependant to searchCourses function which 
dispatches search result into courses array defined in searchReducer.   
*/
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  searchCourses,
  searchQuery,
  setQueryString,
  addQueryAcademyFilter,
  addQueryTypeFilter,
} from '../../app/redux/actions/searchActions';
// import instance from '../../app/instance';
import { getSearchContent } from '../../app/redux/actions/coursesActions';

export function useFilters() {
  // const [courses, setCourses] = useState([]);
  const {
    filters: { academies, course_types },
    is_free,
    sort,
    category,
  } = useSelector((state) => state.courses);
  const {
    courses,
    page: { current },
  } = useSelector((state) => state.search);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchCourses(category, academies, course_types, sort, is_free, current));
    // eslint-disable-next-line
  }, [category, academies, course_types, is_free, sort, current]);
  // return null;
}

export function useQuery() {
  const url = new URL(window.location);
  const dispatch = useDispatch();
  const history = useHistory();
  const { filters, page, keywords } = useSelector((state) => state.search.query);
  const { options } = useSelector((state) => state.courses);
  const { sort, is_free, academies, types } = filters;
  const { current, total } = page;

  useEffect(() => {
    // dispatch(searchQuery(window.location.href.split('q=')[1]));
    dispatch(getSearchContent());
  }, []);

  useEffect(() => {
    url.searchParams.set('is_free', is_free);
    url.searchParams.set('sortby', sort);
    url.searchParams.set('page', current);

    if (academies.length === 0) {
      url.searchParams.forEach((value, key) => {
        if (key.includes('academy')) {
          url.searchParams.delete(key);
        }
      });
    } else {
      academies.forEach((item, index) => {
        url.searchParams.set(`academy[${index}]`, item.id);
      });
    }

    types.forEach((item, index) => {
      url.searchParams.set(`type[${index}]`, item.id);
    });

    history.push(`./${url.search}`);
  }, [is_free, sort, current, academies, types]);

  useEffect(() => {
    const { searchParams } = new URL(window.location);
    if (options.academies.length !== 0) {
      // eslint-disable-next-line no-restricted-syntax
      for (const pair of searchParams.entries()) {
        if (pair[0].includes('academy')) {
          options.academies.forEach((item) => {
            if (item.id == pair[1]) {
              const object = { id: item.id, title: item.name };
              dispatch(addQueryAcademyFilter(object));
            }
          });
        }
      }
    }
    if (options.course_types.length !== 0) {
      // eslint-disable-next-line no-restricted-syntax
      for (const pair of searchParams.entries()) {
        if (pair[0].includes('type')) {
          options.course_types.forEach((item) => {
            if (item.id == pair[1]) {
              const object = { id: item.id, title: item.name };
              dispatch(addQueryTypeFilter(object));
            }
          });
        }
      }
    }
  }, [options]);

  useEffect(() => {
    dispatch(searchQuery(url.search));
  }, [new URL(window.location).search]);
}
