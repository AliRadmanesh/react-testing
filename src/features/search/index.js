import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Error404 from '../../components/search/Error404';
import Result from '../../components/search/Result';
import { searchQuery } from '../../app/redux/actions/searchActions';
import { useQuery } from '../../common/hooks/search';

export default function Search() {
  useQuery();

  console.log(window.location.href.split('q=')[1]);
  const {
    query: { result, status, keywords, string },
  } = useSelector((state) => state.search);

  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(searchQuery(window.location.href.split('q=')[1]));
    dispatch(searchQuery(string));
  }, [status, string]);

  return (
    <>
      {status === 200 && <Result query={keywords} />}
      {status === 400 && <Error404 query={keywords} />}
    </>
  );
}
