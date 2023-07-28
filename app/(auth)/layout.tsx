import React, { ReactNode } from 'react';

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div>
      <div className='flex items-center justify-center h-full'>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;