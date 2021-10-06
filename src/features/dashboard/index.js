import React from 'react';

import NavigationMobile from '../../components/dashboard/NavigationMobile';
import NavigationDesktop from '../../components/dashboard/NavigationDesktop';
import PopUp from '../../components/dashboard/PopUp';

export default function Dashboard() {
  return (
    <div>
      <PopUp />
      <NavigationMobile />
      <NavigationDesktop />
    </div>
  );
}
