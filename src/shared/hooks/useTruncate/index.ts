export const useTruncate = (
  text: string | JSX.Element | JSX.Element[] | undefined,
  length: number,
) => {
  if (typeof text === "string") {
    return text.length > length ? text.substring(0, length) + "..." : text;
  }
  return text;
};
