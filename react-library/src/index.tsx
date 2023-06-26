import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51NIxI0ArBskLDEMKu7ftasma3Ef4PUkyu04aB6WhCVWc9WLO1Zw1YbNn1tiE5lyRHctOL5ttPQ3PthUzW2SrELv700xV7rqDkL');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <Elements stripe={stripePromise}>
    <App />
  </Elements>
  </BrowserRouter>
);
