import React from 'react';
import { shallow, mount } from 'enzyme';
import Timer from './Timer';
import TimerButton from './TimerButton';

describe('render Timer component', () => {

  it('should render a div in Timer', () => {
    const container = shallow(<Timer />);
    expect(container.find('div').length).toBeGreaterThanOrEqual(1);
  });

  it('should render a class displaytimer', () => {
    const container = shallow(<Timer />);
    expect(container.find('.displayTimer').length).toEqual(1);
  });

  it('render span tag ', () => {
    const container = shallow(<Timer />);
    expect(container.find('span').length).toBeGreaterThanOrEqual(3);
  });

  it('should render a class displaytimer', () => {
    const container = shallow(<Timer />);
    expect(container.find('.displayButton').length).toEqual(1);
  });


  it('render a TimerButton', () => {
    const container = shallow(<Timer />);
    expect(container.find(TimerButton).length).toBeGreaterThanOrEqual(3);
  })
  
});
