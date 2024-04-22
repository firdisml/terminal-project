import * as bin from './bin';

export const commandExists = (command: string) => {
  const commands = ['clear', ...Object.keys(bin)];
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-expect-error
  return commands.indexOf(command.split(' ')[0].toLowerCase()) !== -1;
};
