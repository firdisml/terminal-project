import * as bin from './bin';

export const handleTabCompletion = (
  command: string,
  setCommand: React.Dispatch<React.SetStateAction<string>>,
) => {
  const commands = Object.keys(bin).filter((entry) =>
    entry.startsWith(command),
  );

  if (commands.length === 1) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    setCommand(commands[0]);
  }
};
