module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["he", "en"],
    localeDetection: false,
  },
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
