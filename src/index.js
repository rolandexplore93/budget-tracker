import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ProvideContext } from './Context/Context';
import { SpeechProvider } from '@speechly/react-client'

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

ReactDOM.render(
  // import Speechly and wrap the app code inside it
  <SpeechProvider appId='8966b6a1-9d96-49d8-ad48-b34c2b2c379a' language='en-US'>
      <ProvideContext>
          <App />
      </ProvideContext>
  </SpeechProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
