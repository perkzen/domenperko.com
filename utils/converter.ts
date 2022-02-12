export const stringToArray = (text: string): string[] => {
  const arr: string[] = Array();
  for (let i = 0; i < text.length; i++) {
    arr.push(text[i]);
  }
  return arr;
};
