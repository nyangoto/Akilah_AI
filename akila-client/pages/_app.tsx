/* eslint-disable react/jsx-props-no-spreading */
import { Provider } from 'react-redux';
import '../styles/globals.css';
import '../styles/Home.module.css';
import type { AppProps } from 'next/app';
import { store } from '../reduxstate';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
