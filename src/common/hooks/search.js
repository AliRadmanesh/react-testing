/* 
This custom hook, is dependant to searchCourses function which 
dispatches search result into courses array defined in searchReducer.   
*/
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchCourses, searchQuery, setQueryString } from '../../app/redux/actions/searchActions';
// import instance from '../../app/instance';

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
  const {
    filters: { academies, course_types },
    is_free,
    sort,
  } = useSelector((state) => state.courses);

  const {
    page: { current },
    keywords,
    status,
    string,
  } = useSelector((state) => state.search.query);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(searchQuery(keywords));
    dispatch(setQueryString(keywords, academies, course_types, sort, is_free, current));
  }, [current, academies, course_types, sort, is_free]);
}
