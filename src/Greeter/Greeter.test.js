import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { Greeter } from './Greeter';

describe('Greeter', () => {
  it('displays greeting', () => {
    const renderer = new ShallowRenderer();
    renderer.render(
      <Greeter name="Kris" greeting="Hello, Kris" setName={jest.fn()} />
    );
    const result = renderer.getRenderOutput();

    expect(result).toMatchSnapshot();
  });
});
