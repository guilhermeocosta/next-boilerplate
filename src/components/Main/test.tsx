import { render, screen } from '@testing-library/react';

import Main from '.';

describe('<Main />', () => {
  it('should render a heading element', () => {
    const { container } = render(<Main />);

    expect(
      screen.getByRole('heading', { name: /React avançado/i }),
    ).toBeInTheDocument();

    expect(container).toMatchSnapshot();
  });
});
