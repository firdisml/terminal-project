// // List of commands that require API calls

export const projects = async (args: string[]): Promise<string> => {
  const projects = "this is project";
  return projects;
};

export const quote = async (args: string[]): Promise<string> => {
  const data = "this quote";
  return data;
};

export const readme = async (args: string[]): Promise<string> => {
  const readme = "this is readme";
  return readme;
};

export const weather = async (args: string[]): Promise<string> => {
  const city = args.join('+');
  if (!city) {
    return 'Usage: weather [city]. Example: weather casablanca';
  }
  const weather = "this is weather"
  return weather;
};
