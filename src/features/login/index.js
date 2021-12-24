import React, { useState, useEffect } from 'react';

import AuthHeader from '../../components/auth/AuthHeader';
import LeftBanner from '../../components/auth/LeftBanner';

import { LoginContainer } from '../../components/auth/Forms';

export default function Login() {
  const [stage, setStage] = useState(1);

  return (
    <div className="tw-overflow-x-hidden">
      <AuthHeader />
      <div className="auth-gridder tw-grid tw-h-full" style={{ minHeight: window.innerHeight }}>
        <div className="bg-light tw-grid tw-place-items-center">
          <LoginContainer stage={stage} />
        </div>
        <LeftBanner stage={stage} />
      </div>
    </div>
  );
}
