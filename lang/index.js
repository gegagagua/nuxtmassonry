module.exports = {
  locales: [
    {
      code: 'en',
      iso: 'en-US',
      name: 'English',
      file: 'en.js'
    },
    {
      code: 'ru',
      iso: 'ru-Ru',
      name: 'Russian',
      file: 'ru.js'
    }
  ],
  defaultLocale: 'en',
  seo: false,
  lazy: true,
  detectBrowserLanguage: {
    cookieKey: 'redirected',
    useCookie: true
  },
  langDir: 'lang/',
  parsePages: false,
  vueI18n: {
    fallbackLocale: 'en'
  }
}
