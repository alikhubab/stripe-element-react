import { useEffect, useState } from "react";
import {loadStripe} from "@stripe/stripe-js";

function Payment(props) {
    const [stripPromise, setStripPromise] = useState(null);
    const [clientSecret, setClientSecret] = useState( "");

    useEffect(()=> {
        fetch('/config').then(async r => {
            const {publishableKey} = await r.json()
            console.log(publishableKey)
            setStripPromise(loadStripe(publishableKey))
        })

    }, [])


    return (
    <>
      <h1>React Stripe and the Payment Element</h1>
    </>
  );
}

export default Payment;
