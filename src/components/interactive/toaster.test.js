import React from 'react';
import { mount, shallow } from 'enzyme';
import uuid from 'uuid/v4';

import Toaster from './Toaster';

jest.mock('uuid/v4');

describe('Toaster component', () => {

  uuid.mockImplementation(() => 'testid');

  it('matches snapshot', () => {
    const component = shallow(<Toaster isOpen toastProps={{ type: "info", content: <p>test</p> }} />);
    expect(component).toMatchSnapshot();
  });

  it('passes dismiss func to toast', () => {
    const onDismiss = jest.fn()
    const component = mount(<Toaster onDismiss={onDismiss} isOpen toastProps={{ type: "info", content: <p>test</p> }} />);
    const {dismissToast} = component.find("Toast").props();
    expect(typeof dismissToast).toBe('function');
  })

});
