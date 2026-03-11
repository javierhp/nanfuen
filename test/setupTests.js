require('@testing-library/jest-dom')

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: { locale: 'es' },
      asPath: '',
      push: jest.fn(),
      replace: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

jest.mock('../components/i18n/LanguageContext', () => ({
  useLanguage: () => ({
    locale: 'es',
    setLocale: jest.fn(),
    t: (key) => key,
  }),
  LanguageProvider: ({ children }) => <div>{children}</div>
}));
