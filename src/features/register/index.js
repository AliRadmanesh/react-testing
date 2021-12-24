import React from 'react';

import AuthHeader from '../../components/auth/AuthHeader';
import LeftBanner from '../../components/auth/LeftBanner';

import { SignupContainer } from '../../components/auth/Forms';

export default function Register() {
  return (
    <div className="tw-overflow-x-hidden">
      <AuthHeader />
      <div className="auth-gridder tw-grid tw-h-full" style={{ minHeight: window.innerHeight }}>
        <div className="bg-light tw-grid tw-place-items-center">
          <SignupContainer stage={1} />
        </div>
        <LeftBanner stage={1} />
      </div>
    </div>
  );
}
