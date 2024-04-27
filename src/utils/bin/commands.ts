// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';
import { getSession, signIn, signOut, useSession } from 'next-auth/react';
import { stringify } from 'querystring';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  let c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};


// About
export const about = async (args: string[]): Promise<string> => {
  return 'My master is geeppeetto!';
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};


export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
    const session = await getSession()
    return `${session?.user ? session?.user?.name : "visitor"}`;
};

export const cd = async (args: string[]): Promise<string> => {
  return 'um ure not allow to be here';
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode.`;
};

export const logout = async (args?: string[]): Promise<void> => {
    void signOut() 
};

export const session = async (args?: string[]): Promise<void | string> => {
    const session = await getSession()
if (!session){
    void signIn() 
}
else{
    return `${session?.user?.name} \n${session?.user?.email} \n${session?.user?.id} \n${session?.expires}`
}
};

export const login = async (args?: string[]): Promise<void | string> => {
const session = await getSession()
if (!session?.user){
    void signIn() 
}
else{
    return `You already logged in bruh`
}
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};