import React, { useEffect } from 'react';
import './App.css';
import { Form } from './Form';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51HO4sIFZ3JapXwQPVvSjjgJyGI5dTjnrs7HCP1xRCWTXRnCx0jmqqoclePKCCamWdAPEAd1FUnmlkok1vgIefUsh00CRWNT4m5');


export const App = () => {

  const onSubmit = aUser => {
    console.log("App component received: ", aUser)
  };

  return (
    <Elements stripe={stripePromise}>
      <div className="App">
      <MyStripeForm />
        <Form onFormSubmit={onSubmit}/>
      </div>
    </Elements>

  );

}


export default App;
