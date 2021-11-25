import React, { useState, useEffect } from 'react';

import AuthHeader from '../../components/auth/AuthHeader';
import LeftBanner from '../../components/auth/LeftBanner';

import { ForgetPassContainer } from '../../components/auth/Forms';

export default function Retrieve() {
  const [stage, setStage] = useState(1);

  return (
    <div className="tw-overflow-x-hidden" style={{}}>
      <AuthHeader />
      <div className="auth-gridder tw-grid tw-h-full" style={{ minHeight: window.innerHeight }}>
        <div className="bg-light tw-grid tw-place-items-center">
          <ForgetPassContainer stage={stage} />
        </div>
        <LeftBanner stage={stage} />
      </div>
    </div>
  );
}
