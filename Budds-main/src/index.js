import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import posthog from 'posthog-js'; 
import { BrowserRouter } from "react-router-dom";
posthog.init(
  '<ph_project_api_key>', { api_host: '<ph_instance_address>' }
) 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

