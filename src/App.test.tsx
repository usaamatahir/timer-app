import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Timer from './components/Timer';

describe('render APP component', () => {

  
	it('should render a <div />', () => {
		const container = shallow(<App />);
		expect(container.find('div').length).toEqual(1);
  });
  
  it('should render text in h1 tag />', () => {
		const container = shallow(<App />);
		expect(container.find('h1').text()).toContain('Timer App');
  });
  
  it('render a timer component', () => {
    const container = shallow(<App />);
    expect(container.containsMatchingElement(<Timer />)).toEqual(true)
  });
  

});