import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';

it('expect to render Card component', () => {
  expect(shallow(<Card />).length).toEqual(1);

  // compare to previous snapshot __snapshots__
  expect(shallow(<Card />)).toMatchSnapshot();
})
