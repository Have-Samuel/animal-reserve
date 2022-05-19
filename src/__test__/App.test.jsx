import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../redux/configureStore';

describe('render App correctly', () => {
  test('render', () => {
    const value = renderer.create(
        <Provider store={store}>
          <App />
        </Provider>
    );
    expect(value).toMatchSnapshot();
  });
});
