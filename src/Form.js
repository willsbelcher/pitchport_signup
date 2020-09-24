import React, { useState, useEffect } from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import { CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';

export const Form = (props) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [userFirst, setUserFirst] = useState("");
  const [userLast, setUserLast] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const stripe = useStripe();

  useEffect(() => {
    console.log(stripe);
    stripe.createToken()
  }, [stripe]);



  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    const user = { cardNumber, cardExpiry, cardCvc, userFirst, userLast, city, state, zip };
    props.onFormSubmit(user);
  };

  return (
    <div>
      <form>
        
        <br></br>
        <input type="text" value={cardNumber} onChange={(event) => setCardNumber(event.target.value)} placeholder="Card number" />
        <br></br>
        <input type="text" value={cardExpiry} onChange={(event) => setCardExpiry(event.target.value)} placeholder="Card expiry" />
        <br></br>
        <input type="text" value={cardCvc} onChange={(event) => setCardCvc(event.target.value)} placeholder="Cvc" />
        <br></br>
        <input type="text" value={userFirst} onChange={(event) => setUserFirst(event.target.value)} placeholder="First name" />
        <br></br>
        <input type="text" value={userLast} onChange={(event) => setUserLast(event.target.value)} placeholder="Last name" />
        <br></br>
        <input type="text" value={city} onChange={(event) => setCity(event.target.value)} placeholder="City" />
        <br></br>
        <input type="text" value={state} onChange={(event) => setState(event.target.value)} placeholder="State" />
        <br></br>
        <input type="text" value={zip} onChange={(event) => setZip(event.target.value)} placeholder="Zip code" />
        <br></br>
        <button type="submit" onClick={handleSubmit}>
          Pay
      </button>
      </form>
    </div>

  );
};