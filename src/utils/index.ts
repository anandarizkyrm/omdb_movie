export const sliceStr = (str: string, max: number) => {
  if (str.length > max) {
    return str.slice(0, max) + '. . .';
  }
  return str;
};
