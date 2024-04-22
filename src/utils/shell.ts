import type React from 'react';
import * as bin from './bin';

export const shell = async (
  command: string,
  setHistory: (value: string) => void,
  clearHistory: () => void,
  setCommand: React.Dispatch<React.SetStateAction<string>>,
) => {
  const args = command.split(' ');
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-expect-error
  args[0] = args[0].toLowerCase();

  if (args[0] === 'clear') {
    clearHistory();
  } else if (command === '') {
    setHistory('');
  } else if (Object.keys(bin).indexOf(args[0]) === -1) {
    setHistory(
      `shell: command not found: ${args[0]}. Try 'help' to get started.`,
    );
  } else {
     // eslint-disable-next-line @typescript-eslint/ban-ts-comment
     //@ts-expect-error
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    const output = await bin[args[0]](args.slice(1));
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    setHistory(output);
  }

  setCommand('');
};
