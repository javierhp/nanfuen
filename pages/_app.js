import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { LanguageProvider } from '../components/i18n/LanguageContext';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
};
