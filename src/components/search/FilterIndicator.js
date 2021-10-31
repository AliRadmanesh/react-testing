import React from 'react';
import { useDispatch } from 'react-redux';
import closeIcon from '../../assets/icons/Close-Gray.svg';

export default function FilterIndicator({ title, onDelete, classes }) {
  return (
    <div className={`tw-p-2 tw-m-2 tw-text-xs tw-flex bg-medium tw-rounded-md ${classes}`}>
      <p className="tw-ml-2 text-gray font-iranyekan-num tw-text-sm tw-font-normal">{title}</p>
      <button className="tw-p-0" onClick={onDelete}>
        <img src={closeIcon} alt="" style={{ width: '16px' }} />
      </button>
    </div>
  );
}
