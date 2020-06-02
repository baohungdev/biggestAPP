import React from "react";
import StripeCheckout from "react-stripe-checkout";
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const pubslishableKey = "pk_test_PLQiWAh5SOzbbYMiIRmDv2C500n6ZwL84v";
  const onToken = (token) => {
    console.log(token);
    alert("Your payment is successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Clothing Store"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={pubslishableKey}
    />
  );
};

export default StripeCheckoutButton;
