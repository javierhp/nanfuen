import React from 'react';
import { render, screen } from '@testing-library/react';
import Classes from '../../pages/[locale]/classes';
import { LanguageProvider } from '../../components/i18n/LanguageContext';

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: { locale: 'es' },
    pathname: '/[locale]/classes',
    asPath: '/es/classes',
    push: jest.fn(),
  }),
}));

describe('Classes Page', () => {
  it('renders suspension notice and does not render virtual classes', () => {
    render(
      <LanguageProvider initialLocale="es">
        <Classes />
      </LanguageProvider>
    );

    // Verify suspension notice is present
    expect(
      screen.getByText(/la inscripcion de las clases virtuales se encuentran momentaneamente suspendidas momentaneamente/i)
    ).toBeInTheDocument();

    // Verify virtual classes cards are hidden
    expect(screen.queryByText('Clases semanales')).not.toBeInTheDocument();
    expect(screen.queryByText('Pack trimestral: Clases semanales')).not.toBeInTheDocument();
    expect(screen.queryByText('Pack semestral: Clases semanales')).not.toBeInTheDocument();

    // Verify in-person workshops are still shown
    expect(screen.getByText('Talleres presenciales')).toBeInTheDocument();
  });
});
