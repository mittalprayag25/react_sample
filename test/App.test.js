import React from 'react';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-15';
import Enzyme, { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import App from '../src/App';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  test('needs tests', () => {

  });
});