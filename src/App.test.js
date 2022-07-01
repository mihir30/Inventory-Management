import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders app component',()=>{
    render(<App/>)
    expect(App).toBeTruthy();
  });

});
