import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { unregister } from './registerServiceWorker';

window.renderCheckout = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
	
    document.getElementById(containerId),
  );
  unregister();
};

window.unmountCheckout = containerId => {
	window.location.reload(true);
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
