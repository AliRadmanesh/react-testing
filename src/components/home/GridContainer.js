import React from 'react';
import { useSelector } from 'react-redux';
import studentIcon from '../../assets/icons/Student.svg';
import slideIcon from '../../assets/icons/Slide.svg';
import schoolIcon from '../../assets/icons/School.svg';

const GridContainer = () => {
  // const dispatch = useDispatch()
  const { users, academies, courses } = useSelector((state) => state.home.data.stat);
  // const {users, academies, courses} = useSelector(state => state.homeReducer.data.stat)
  // const users=10
  // const academies=10
  // const courses=10
  // const users = useSelector(state => state.home.data.stat.users)
  // const academies = 10
  // const courses = 10

  return (
    <div
      className="tw-grid tw-grid-rows-2 lg:tw-flex tw-justify-center tw-gap-y-4 tw-w-full tw-mt-4 lg:tw-mt-6 xl:tw-my-12"
      style={{ marginBottom: '5rem' }}
    >
      <div className="tw-flex tw-justify-center">
        <div
          className="bg-white border-smooth tw-py-2 tw-px-4 lg:tw-px-6 tw-mx-2 tw-py-4 tw-w-auto tw-flex tw-text-right"
          style={{ gridArea: 'card-1', boxShadow: '5px 5px 10px #ccc' }}
        >
          <img className="tw-opacity-40" src={studentIcon} alt="" />
          <div className="tw-flex tw-flex-col tw-mr-6">
            <h3 className="text-blue">{users}</h3>
            <p className="text-primary">دانشجو</p>
          </div>
        </div>
        <div
          className="bg-white border-smooth tw-py-2 tw-px-4 lg:tw-px-6 tw-mx-2 tw-py-4 tw-w-auto tw-flex tw-text-right"
          style={{ gridArea: 'card-1', boxShadow: '5px 5px 10px #ccc' }}
        >
          <img className="tw-opacity-40" src={schoolIcon} alt="" />
          <div className="tw-flex tw-flex-col tw-mr-6">
            <h3 className="text-blue">{academies}</h3>
            <p className="text-primary">آموزشگاه</p>
          </div>
        </div>
      </div>
      <div className="tw-flex tw-justify-center">
        <div
          className="bg-white border-smooth tw-py-2 tw-px-4 lg:tw-px-6 tw-mx-2 tw-py-4 tw-w-auto tw-flex tw-text-right"
          style={{ gridArea: 'card-1', boxShadow: '5px 5px 10px #ccc' }}
        >
          <img className="tw-opacity-40" src={slideIcon} alt="" />
          <div className="tw-flex tw-flex-col tw-mr-6">
            <h3 className="text-blue">{courses}</h3>
            <p className="text-primary">آموزش</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridContainer;
