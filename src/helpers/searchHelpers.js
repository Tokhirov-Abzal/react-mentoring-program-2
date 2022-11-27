import { DICTIONARY } from "../dictionary";

export const formSearchUrl = (path, params) => {
  if (!path) {
    return DICTIONARY.search.baseSearchUrl;
  }

  const prepareValues = Object.values(path);

  return [DICTIONARY.search.baseSearchUrl, ...prepareValues].join("/");
};
