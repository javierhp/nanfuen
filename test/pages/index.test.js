import { render } from '@testing-library/react';
import RootIndex from '../../pages/index';

jest.mock('next/router', () => ({
  useRouter: () => ({ replace: jest.fn() })
}));

describe('Home page', () => {
  it('redirects to default locale', () => {
    // Tests that the render doesn't crash since it redirects
    render(<RootIndex />);
  })
})
