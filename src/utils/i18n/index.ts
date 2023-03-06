/**
 * @author Mukhammadyusuf Abdurakhimov
 * @param language - language code
 * @param translations - translations object
 * @returns - function that returns translation for given key
 */
const i18n = (language: string, translations: { [key: string]: any }) => {
  const translation = translations[language]; // get translation for given language

  return (key: string) => {
    if (translation[key]) {
      return translation[key]; // return translation for given key
    } else {
      return key; // return key if translation not found
    }
  };
};

export { i18n };
