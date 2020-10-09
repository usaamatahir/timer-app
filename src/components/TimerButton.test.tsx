import React from 'react';
import { shallow } from 'enzyme';
import TimerButton from './TimerButton';


describe('render Timer component', () => {

  it('should render a div in TimerButton', () => {
    const container = shallow(<TimerButton buttonAction={jest.fn()} buttonValue={''} />);
    expect(container.find('div').length).toBeGreaterThanOrEqual(1);
  });


})