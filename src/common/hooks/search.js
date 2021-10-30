/* 
This custom hook, is dependant to searchCourses function which 
dispatches search result into courses array defined in searchReducer.   
*/
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchCourses } from '../../app/redux/actions/searchActions';
// import instance from '../../app/instance';

export function useDesktop() {
  // const [courses, setCourses] = useState([]);
  const {
    filters: { academies, course_types },
    is_free,
    sort,
  } = useSelector((state) => state.courses);

  const { keywords } = useSelector((state) => state.search);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchCourses(keywords, academies, course_types, sort, is_free));
    // eslint-disable-next-line
  }, [keywords, academies, course_types, is_free, sort]);

  // return null;
}
