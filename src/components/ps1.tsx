import React from 'react';
import config from '../../config.json';
import { signIn, signOut, useSession } from 'next-auth/react';
import { api } from '~/utils/api';

export const Ps1 = () => {
const { data: sessionData } = useSession();

  return (
    <div>
      <span className="text-light-yellow dark:text-dark-yellow">
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */} 
        {sessionData?.user ? sessionData?.user?.name : "visitor"}
      </span>
      <span className="text-light-gray dark:text-dark-gray">@</span>
      <span className="text-light-green dark:text-dark-green">
        {config.ps1_hostname}
      </span>
      <span className="text-light-gray dark:text-dark-gray">:$ ~ </span>
    </div>
  );
};

export default Ps1;
