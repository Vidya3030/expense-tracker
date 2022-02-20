import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from './context/context';
import { SpeechProvider } from '@speechly/react-client';

ReactDOM.render(
  <SpeechProvider appId="25c08fc9-3331-4e6f-97f7-ef0d2fd0376a" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root')
);

